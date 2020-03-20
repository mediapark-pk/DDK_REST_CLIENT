export interface IBaseEmitter<EVENT> {
    on(event: EVENT, fn: Function): this;
    emit<T>(event: EVENT, ...args: Array<T>): this;
}
export interface IEmitter<EVENT> extends IBaseEmitter<EVENT> {
    removeListener(event: EVENT, fn: Function): this;
}
export declare class Emitter<EVENT> implements IEmitter<EVENT> {
    protected readonly listeners: Map<EVENT, Array<Function>>;
    constructor();
    on(event: EVENT, fn: Function): this;
    emit<T>(event: EVENT, ...args: T[]): this;
    removeListener(event: EVENT, fn: Function): this;
}
