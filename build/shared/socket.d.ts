import { ResponseEntity } from 'ddk.registry/dist/model/common/responseEntity';
import { IBaseEmitter } from 'src/shared/emitter';
export interface ISocketClient<Code> extends IBaseEmitter<string> {
    send<Data, Response>(code: Code, data: Data): Promise<ResponseEntity<Response>>;
    addCodeListener(code: Code, fn: Function): void;
    removeCodeListener(code: Code): void;
    removeCodeListeners(): void;
    readonly isConnected: boolean;
    readonly uri: string;
}
export declare abstract class SocketClient<Socket extends IBaseEmitter<any>, Code> implements ISocketClient<Code> {
    protected readonly socket: Socket;
    protected readonly messageListeners: Map<string, (value?: any) => void>;
    protected readonly codeListeners: Map<Code, Array<Function>>;
    protected readonly timeout: number;
    protected readonly event: string;
    constructor(socket: Socket, event?: string, timeout?: number);
    on(event: string, fn: Function): any;
    emit(event: string, ...args: Array<any>): any;
    getSocket(): Socket;
    addCodeListener(code: Code, fn: Function): void;
    removeCodeListener(code: Code): void;
    removeCodeListeners(): void;
    abstract send<Data, Response>(code: Code, data: Data): Promise<ResponseEntity<Response>>;
    abstract readonly isConnected: boolean;
    abstract readonly uri: string;
}
