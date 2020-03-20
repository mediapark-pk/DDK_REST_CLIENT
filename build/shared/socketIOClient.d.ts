import { ResponseEntity } from 'ddk.registry/dist/model/common/responseEntity';
import { SocketClient } from 'src/shared/socket';
export declare class SocketIOClient<ActionTypes> extends SocketClient<SocketIOClient.Socket, ActionTypes> {
    constructor(socket: SocketIOClient.Socket, event?: string, timeout?: number);
    send<D, R>(code: ActionTypes, data: D): Promise<ResponseEntity<R>>;
    readonly isConnected: boolean;
    readonly uri: string;
}
