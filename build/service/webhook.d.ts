export declare enum WebhookAction {
    APPLY_TRANSACTION = "APPLY_TRANSACTION"
}
export interface ISubscriber<Action> {
    subscribe(action: Action, url: string): void;
    unsubscribe(action: Action, url: string): void;
}
export declare class WebhookService<Action> implements ISubscriber<Action> {
    private readonly actions;
    constructor();
    subscribe(action: Action, url: string): void;
    unsubscribe(action: Action, url: string): void;
    on(action: Action, data: any): void;
}
