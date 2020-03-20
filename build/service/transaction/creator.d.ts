import { ResponseEntity } from 'ddk.registry/dist/model/common/responseEntity';
import { SlotService } from 'ddk.registry/dist/service/slot';
import { TransactionData } from 'ddk.registry/dist/model/common/type';
import { Transaction } from 'ddk.registry/dist/model/common/transaction';
import { AccountService } from 'src/service/account';
interface TimeService {
    getTime(): Promise<number>;
}
export declare class TransactionCreator {
    private readonly slotService;
    private readonly timeService;
    private readonly accountService;
    constructor(slotService: SlotService, timeService: TimeService, accountService: AccountService);
    private createAsset;
    private calculateAsset;
    create(data: TransactionData, secret: string, secondSecret: string): Promise<ResponseEntity<Transaction<any>> | any>;
}
export {};
