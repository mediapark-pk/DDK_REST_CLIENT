import { BlockSchema } from 'ddk.registry/dist/model/common/block';
import { IBlockRepository } from 'src/repository/block';
import { NodePool } from 'src/service/nodePool';
export interface IBlockService {
    onApplyBlock(block: BlockSchema): void;
    add(block: BlockSchema): void;
    get(id: string): Promise<BlockSchema>;
}
export declare class BlockService {
    private repository;
    private nodePool;
    constructor(repository: IBlockRepository, nodePool: NodePool);
    onApplyBlock(block: BlockSchema): void;
    add(block: BlockSchema): void;
    get(id: string): Promise<BlockSchema>;
}
