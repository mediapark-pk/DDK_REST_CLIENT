import { Transaction, TransactionSchema } from 'ddk.registry/dist/model/common/transaction';
import { TransactionId } from 'ddk.registry/dist/model/common/type';
export interface ITransactionRepository {
    add(transaction: TransactionSchema<any>): void;
    get(id: string): TransactionSchema<any>;
    has(id: string): boolean;
    remove(id: string): boolean;
}
export declare class TransactionRepository implements ITransactionRepository {
    private readonly transactions;
    constructor();
    add(transaction: Transaction<any>): void;
    update(transaction: Transaction<any>): void;
    get(transactionId: TransactionId): Transaction<any>;
    has(transactionId: TransactionId): boolean;
    remove(id: string): boolean;
}
