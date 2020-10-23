"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeHeightComparator {
    constructor(direction = 'ASC') {
        this.direction = direction;
    }
    compare(a, b) {
        if (a.height < b.height) {
            if (this.direction === 'ASC') {
                return -1;
            }
            return 1;
        }
        if (a.height > b.height) {
            if (this.direction === 'ASC') {
                return 1;
            }
            return -1;
        }
        return 0;
    }
}
exports.NodeHeightComparator = NodeHeightComparator;
exports.nodeHeightDescComparator = new NodeHeightComparator('DESC');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWwvY29tcGFyYXRvci9ub2RlL2hlaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQWEsb0JBQW9CO0lBRzdCLFlBQVksWUFBdUIsS0FBSztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRUQsT0FBTyxDQUFDLENBQVEsRUFBRSxDQUFRO1FBQ3RCLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDYjtZQUNELE9BQU8sQ0FBQyxDQUFDO1NBQ1o7UUFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO2dCQUMxQixPQUFPLENBQUMsQ0FBQzthQUNaO1lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNiO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7QUF0QkQsb0RBc0JDO0FBRVksUUFBQSx3QkFBd0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDIn0=