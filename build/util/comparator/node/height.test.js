"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const height_1 = require("src/util/comparator/node/height");
describe('Node Height Desc Comparator', () => {
    it('Returns 0 when both nodes are on the same height', () => {
        const a = { height: 500, isConnected: true };
        const b = { height: 500, isConnected: true };
        const expected = 0;
        const actual = height_1.nodeHeightDescComparator.compare(a, b);
        chai_1.expect(expected).to.deep.equal(actual);
    });
    it('Returns 1 when node A has a height less than B', () => {
        const a = { height: 100, isConnected: false };
        const b = { height: 500, isConnected: false };
        const expected = 1;
        const actual = height_1.nodeHeightDescComparator.compare(a, b);
        chai_1.expect(expected).to.deep.equal(actual);
    });
    it('Returns -1 when node A has a height more than B', () => {
        const a = { height: 500, isConnected: true };
        const b = { height: 100, isConnected: false };
        const expected = -1;
        const actual = height_1.nodeHeightDescComparator.compare(a, b);
        chai_1.expect(expected).to.deep.equal(actual);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVpZ2h0LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbC9jb21wYXJhdG9yL25vZGUvaGVpZ2h0LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFHOUIsNERBQTJFO0FBRTNFLFFBQVEsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLEVBQUU7SUFDekMsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLEdBQUcsRUFBRTtRQUN4RCxNQUFNLENBQUMsR0FBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxHQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDcEQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sTUFBTSxHQUFHLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdEQsYUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdEQUFnRCxFQUFFLEdBQUcsRUFBRTtRQUN0RCxNQUFNLENBQUMsR0FBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxHQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDckQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sTUFBTSxHQUFHLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdEQsYUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlEQUFpRCxFQUFFLEdBQUcsRUFBRTtRQUN2RCxNQUFNLENBQUMsR0FBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxHQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDckQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEIsTUFBTSxNQUFNLEdBQUcsaUNBQXdCLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0RCxhQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9