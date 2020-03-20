import { EVENT_TYPES } from 'ddk.registry/dist/model/transport/event';
import { API_ACTION_TYPES } from 'ddk.registry/dist/model/transport/code';
import { ISocketClient } from 'src/shared/socket';
export interface INode {
    height: number;
    isConnected: boolean;
}
export declare class Node implements INode {
    private blockchain;
    socket: ISocketClient<API_ACTION_TYPES | EVENT_TYPES>;
    constructor(socket: ISocketClient<API_ACTION_TYPES | EVENT_TYPES>);
    private onApplyBlock;
    private onUndoBlock;
    readonly height: number;
    readonly isConnected: boolean;
}
