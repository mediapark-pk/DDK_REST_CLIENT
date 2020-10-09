import { ResponseEntity } from 'ddk.registry/dist/model/common/responseEntity';
import { API_ACTION_TYPES } from 'ddk.registry/dist/model/transport/code';
import { EVENT_TYPES } from 'ddk.registry/dist/model/transport/event';
import { Block } from 'ddk.registry/dist/model/common/block';

import { Node } from 'src/model/node';
import { Comparator } from 'src/util/comparator';
import { Emitter } from 'src/shared/emitter';

export enum NodePoolAction {
    repick = 'repick',
}
var count:number = 0
export class NodePool extends Emitter<NodePoolAction> {
    private readonly nodes: Array<Node>;
    private readonly nodeComparator: Comparator<Node>;
    private readonly nodeSwitchHeightThreshold: number = 3;
    private readonly initialPickTimeout: number = 3000;
    private primary: Node;


    constructor(nodes: Array<Node>, nodeComparator: Comparator<Node>) {
        super();

        this.nodes = nodes;
        this.nodeComparator = nodeComparator;

        this.onDisconnect = this.onDisconnect.bind(this);
        this.onApplyBlock = this.onApplyBlock.bind(this);

        this.init();
    }

    private onApplyBlock(block: Block) {
        if (!this.primary) {
            return;
        }

        if (
            this.primary.height + this.nodeSwitchHeightThreshold <=
            block.height
        ) {
            this.repickPrimary();
        }
    }

    private onDisconnect(node: Node) {
        if (!this.primary) {
            return;
        } else if (node.socket.uri === this.primary.socket.uri) {
            this.repickPrimary();
        }
    }

    private init() {
        this.nodes.forEach(node =>
            node.socket.on('disconnect', (_reason: string) => {
                this.onDisconnect(node);
            }),
        );

        this.nodes.forEach(node =>
            node.socket.on('connect_timeout', (_timeout: number) => {
                this.onDisconnect(node);
            }),
        );

        this.nodes.forEach(node => {
            node.socket.addCodeListener(
                EVENT_TYPES.APPLY_BLOCK,
                this.onApplyBlock,
            );

            // TODO: fix removing listeners
            node.socket.on('reconnect', () => {
                node.socket.addCodeListener(
                    EVENT_TYPES.APPLY_BLOCK,
                    this.onApplyBlock,
                );
            });
        });

        setTimeout(() => {
            if (!this.primary) {
                this.repickPrimary();
            }
        }, this.initialPickTimeout);
    }

    async send<Data, Response>(
        code: API_ACTION_TYPES | EVENT_TYPES,
        data: Data,
    ): Promise<ResponseEntity<Response>> {
        if (!this.nodes.filter(node => node.socket.isConnected).length) {
            return new ResponseEntity({
                errors: ['All nodes are disconnected. Please try again later.'],
            });
        } else if (!this.primary) {
            console.log(`[NodePool][send] Primary node is missing. Repick`);
            return new ResponseEntity({
                errors: ['Nodes are not available. Please try again later.'],
            });
            // this.repickPrimary();
        }
        console.log(data)
        const response = await this.primary.socket.send<Data, Response>(
            code,
            data,
        );
        if (
            !response.success &&
            response.errors.filter(error =>
                error.toLowerCase().includes('timeout'),
            ).length
        ) {
            // TODO: ban this node or decrease priority
            // https://trello.com/c/zRAMcjpv/52-add-ban-logic-for-slow-nodes
            if (count == 10){
                count = 0
                return new ResponseEntity({
                    errors: ['All nodes are disconnected. Please try again later.'],
                });
            }
            // this.repickPrimary();
            count = count +1
            return this.send(code, data);
            
        }
        count = 0
        return response;
    }

    private repickPrimary(): void {
        if (this.primary && this.nodes.length === 1) {
            return;
        } else if (!this.nodes.filter(node => node.socket.isConnected).length) {
            console.log(
                `[NodePool][repickPrimary] Skip, no active connections`,
            );
            this.primary = undefined;
            return;
        } else if (this.primary) {
            this.primary.socket.removeCodeListeners();
        }

        this.nodes.sort(this.nodeComparator.compare);
        this.primary = this.nodes[0];

        console.log(
            `[NodePool][repickPrimary] Primary node changed to ${this.primary.socket.uri}`,
        );

        this.emit(NodePoolAction.repick, this.primary);
    }
}
