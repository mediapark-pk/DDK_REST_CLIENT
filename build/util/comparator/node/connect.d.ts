import { Comparator } from 'src/util/comparator';
import { INode } from 'src/model/node';
export declare class NodeConnectComparator implements Comparator<INode> {
    compare(a: INode, b: INode): number;
}
export declare const nodeConnectComparator: NodeConnectComparator;
