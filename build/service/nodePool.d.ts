import { ResponseEntity } from 'ddk.registry/dist/model/common/responseEntity';
import { API_ACTION_TYPES } from 'ddk.registry/dist/model/transport/code';
import { EVENT_TYPES } from 'ddk.registry/dist/model/transport/event';
import { Node } from 'src/model/node';
import { Comparator } from 'src/util/comparator';
import { Emitter } from 'src/shared/emitter';
export declare enum NodePoolAction {
    repick = "repick"
}
export declare class NodePool extends Emitter<NodePoolAction> {
    private readonly nodes;
    private readonly nodeComparator;
    private readonly nodeSwitchHeightThreshold;
    private readonly initialPickTimeout;
    private primary;
    constructor(nodes: Array<Node>, nodeComparator: Comparator<Node>);
    private onApplyBlock;
    private onDisconnect;
    private init;
    send<Data, Response>(code: API_ACTION_TYPES | EVENT_TYPES, data: Data): Promise<ResponseEntity<Response>>;
    private repickPrimary;
}
