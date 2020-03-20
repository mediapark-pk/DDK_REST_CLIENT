import { BlockchainInfoSchema } from 'ddk.registry/dist/model/common/type';
export interface IBlockchainRepository {
    getInfo(): BlockchainInfoSchema;
    updateInfo(info: BlockchainInfoSchema): void;
}
export declare class BlockchainRepository implements IBlockchainRepository {
    private info;
    constructor();
    getInfo(): BlockchainInfoSchema;
    updateInfo(info: BlockchainInfoSchema): void;
}
