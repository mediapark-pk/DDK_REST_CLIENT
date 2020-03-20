import { Comparator } from 'src/util/comparator';
import { INode } from 'src/model/node';
import { Direction } from 'ddk.registry/dist/model/common/type';
export declare class NodeHeightComparator implements Comparator<INode> {
    private readonly direction;
    constructor(direction?: Direction);
    compare(a: INode, b: INode): number;
}
export declare const nodeHeightDescComparator: NodeHeightComparator;
