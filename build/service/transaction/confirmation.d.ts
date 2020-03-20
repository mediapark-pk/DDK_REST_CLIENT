/// <reference types="node" />
import { Block } from 'ddk.registry/dist/model/common/block';
import { TransactionId } from 'ddk.registry/dist/model/common/type';
import { TransactionRepository } from 'src/repository/transaction';
import { IBlockService } from 'src/service/block';
export declare type TransactionConfirmationListener = {
    transactionId: TransactionId;
    url: string;
};
declare type ConfirmationListener = {
    unsubscribeTimeoutId: NodeJS.Timeout;
} & TransactionConfirmationListener;
export interface IConfirmationsService<ID, T> {
    subscribe(data: T): void;
    unsubscribe(id: ID): void;
}
export declare class TransactionConfirmationService implements IConfirmationsService<string, ConfirmationListener> {
    private readonly transactionRepository;
    private readonly blockService;
    private readonly numberOfConfirmations;
    private readonly listeners;
    private readonly unsubscribeTimeout;
    constructor(transactionRepository: TransactionRepository, blockService: IBlockService, numberOfConfirmations: number, unsubscribeTimeout?: number);
    private notify;
    subscribe(listener: TransactionConfirmationListener): void;
    unsubscribe(id: string): void;
    onApplyBlock(block: Block): Promise<void>;
}
export {};
