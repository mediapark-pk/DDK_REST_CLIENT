import { Comparator } from 'src/util/comparator';
import { INode } from 'src/model/node';
export declare class NodeComparator implements Comparator<INode> {
    private readonly connectComparator;
    private readonly heightDescComparator;
    constructor(connectComparator: Comparator<INode>, heightDescComparator: Comparator<INode>);
    compare(a: INode, b: INode): number;
}
export declare const nodeComparator: NodeComparator;
