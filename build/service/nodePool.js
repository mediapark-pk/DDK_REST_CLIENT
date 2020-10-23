"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseEntity_1 = require("ddk.registry/dist/model/common/responseEntity");
const emitter_1 = require("src/shared/emitter");
var NodePoolAction;
(function (NodePoolAction) {
    NodePoolAction["repick"] = "repick";
})(NodePoolAction = exports.NodePoolAction || (exports.NodePoolAction = {}));
// var count:number = 0
class NodePool extends emitter_1.Emitter {
    constructor(nodes, nodeComparator) {
        super();
        this.nodeSwitchHeightThreshold = 3;
        this.initialPickTimeout = 3000;
        this.nodes = nodes;
        this.nodeComparator = nodeComparator;
        this.onDisconnect = this.onDisconnect.bind(this);
        this.onApplyBlock = this.onApplyBlock.bind(this);
        this.init();
    }
    onApplyBlock(block) {
        if (!this.primary) {
            return;
        }
        if (this.primary.height + this.nodeSwitchHeightThreshold <=
            block.height) {
            this.repickPrimary();
        }
    }
    onDisconnect(node) {
        if (!this.primary) {
            return;
        }
        else if (node.socket.uri === this.primary.socket.uri) {
            this.repickPrimary();
        }
    }
    init() {
        this.nodes.forEach(node => node.socket.on('disconnect', (_reason) => {
            this.onDisconnect(node);
        }));
        this.nodes.forEach(node => node.socket.on('connect_timeout', (_timeout) => {
            this.onDisconnect(node);
        }));
        this.nodes.forEach(node => {
            node.socket.addCodeListener("APPLY_BLOCK" /* APPLY_BLOCK */, this.onApplyBlock);
            // TODO: fix removing listeners
            node.socket.on('reconnect', () => {
                node.socket.addCodeListener("APPLY_BLOCK" /* APPLY_BLOCK */, this.onApplyBlock);
            });
        });
        setTimeout(() => {
            if (!this.primary) {
                this.repickPrimary();
            }
        }, this.initialPickTimeout);
    }
    async send(code, data) {
        if (!this.nodes.filter(node => node.socket.isConnected).length) {
            return new responseEntity_1.ResponseEntity({
                errors: ['All nodes are disconnected. Please try again later.'],
            });
        }
        else if (!this.primary) {
            console.log(`[NodePool][send] Primary node is missing. Repick`);
            // return new ResponseEntity({
            //     errors: ['Nodes are not available. Please try again later.'],
            // });
            this.repickPrimary();
        }
        console.log(data);
        const response = await this.primary.socket.send(code, data);
        if (!response.success &&
            response.errors.filter(error => error.toLowerCase().includes('timeout')).length) {
            // TODO: ban this node or decrease priority
            // https://trello.com/c/zRAMcjpv/52-add-ban-logic-for-slow-nodes
            // if (count == 10){
            //     count = 0
            //     return new ResponseEntity({
            //         errors: ['All nodes are disconnected. Please try again later.'],
            //     });
            // }
            this.repickPrimary();
            // count = count +1
            return this.send(code, data);
        }
        // count = 0
        return response;
    }
    repickPrimary() {
        if (this.primary && this.nodes.length === 1) {
            return;
        }
        else if (!this.nodes.filter(node => node.socket.isConnected).length) {
            console.log(`[NodePool][repickPrimary] Skip, no active connections`);
            this.primary = undefined;
            return;
        }
        else if (this.primary) {
            this.primary.socket.removeCodeListeners();
        }
        this.nodes.sort(this.nodeComparator.compare);
        this.primary = this.nodes[0];
        console.log(`[NodePool][repickPrimary] Primary node changed to ${this.primary.socket.uri}`);
        this.emit(NodePoolAction.repick, this.primary);
    }
}
exports.NodePool = NodePool;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZVBvb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9ub2RlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtGQUErRTtBQU8vRSxnREFBNkM7QUFFN0MsSUFBWSxjQUVYO0FBRkQsV0FBWSxjQUFjO0lBQ3RCLG1DQUFpQixDQUFBO0FBQ3JCLENBQUMsRUFGVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUV6QjtBQUNELHVCQUF1QjtBQUN2QixNQUFhLFFBQVMsU0FBUSxpQkFBdUI7SUFRakQsWUFBWSxLQUFrQixFQUFFLGNBQWdDO1FBQzVELEtBQUssRUFBRSxDQUFDO1FBTkssOEJBQXlCLEdBQVcsQ0FBQyxDQUFDO1FBQ3RDLHVCQUFrQixHQUFXLElBQUksQ0FBQztRQU8vQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUVyQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxZQUFZLENBQUMsS0FBWTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU87U0FDVjtRQUVELElBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHlCQUF5QjtZQUNwRCxLQUFLLENBQUMsTUFBTSxFQUNkO1lBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVPLFlBQVksQ0FBQyxJQUFVO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lB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