"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = require("src/util/comparator/node/connect");
const height_1 = require("src/util/comparator/node/height");
class NodeComparator {
    constructor(connectComparator, heightDescComparator) {
        this.connectComparator = connectComparator;
        this.heightDescComparator = heightDescComparator;
        this.compare = this.compare.bind(this);
    }
    compare(a, b) {
        const result = this.connectComparator.compare(a, b);
        if (result) {
            return result;
        }
        return this.heightDescComparator.compare(a, b);
    }
}
exports.NodeComparator = NodeComparator;
exports.nodeComparator = new NodeComparator(connect_1.nodeConnectComparator, height_1.nodeHeightDescComparator);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbC9jb21wYXJhdG9yL25vZGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw4REFBeUU7QUFDekUsNERBQTJFO0FBRTNFLE1BQWEsY0FBYztJQUl2QixZQUNJLGlCQUFvQyxFQUNwQyxvQkFBdUM7UUFFdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUVqRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBUSxFQUFFLENBQVE7UUFDdEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxNQUFNLEVBQUU7WUFDUixPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUVELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNKO0FBdEJELHdDQXNCQztBQUVZLFFBQUEsY0FBYyxHQUFHLElBQUksY0FBYyxDQUM1QywrQkFBcUIsRUFDckIsaUNBQXdCLENBQzNCLENBQUMifQ==