import { BlockId } from 'ddk.registry/dist/model/common/type';
import { BlockSchema } from 'ddk.registry/dist/model/common/block';
export interface IBlockRepository {
    lastBlockHeight: number;
    add(block: BlockSchema): void;
    get(blockId: BlockId): BlockSchema;
    has(blockId: BlockId): boolean;
    remove(id: string): boolean;
}
export declare class BlockRepository implements IBlockRepository {
    private readonly blocks;
    lastBlockHeight: number;
    constructor();
    add(block: BlockSchema): void;
    get(id: BlockId): BlockSchema;
    has(id: BlockId): boolean;
    remove(id: string): boolean;
}
