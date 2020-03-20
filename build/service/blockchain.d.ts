import { BlockchainInfoSchema } from 'ddk.registry/dist/model/common/type';
import { IBlockchainRepository } from 'src/repository/blockchain';
export declare class BlockchainService {
    private repository;
    constructor(blockchainRepository: IBlockchainRepository);
    onUpdateInfo(info: BlockchainInfoSchema): void;
}
