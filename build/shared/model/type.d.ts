import { TransactionType } from 'ddk.registry/dist/model/common/transaction/type';
import { Sort, Pagination } from 'ddk.registry/dist/model/common/type';
export declare type getTransactionsRequest = {
    filter?: {
        type?: TransactionType;
        blockId?: string;
        senderPublicKey?: string;
    };
    sort?: Array<Sort>;
} & Pagination;
