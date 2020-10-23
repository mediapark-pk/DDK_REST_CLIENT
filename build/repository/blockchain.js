"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockchainRepository {
    constructor() {
        this.info = {
            airdropBalance: 0,
            totalSupply: 0,
            circulatingSupply: 0,
            tokenHolders: 0,
            totalStakeAmount: 0,
            totalStakeHolders: 0,
            transactionsCount: 0,
        };
    }
    getInfo() {
        return this.info;
    }
    updateInfo(info) {
        this.info = info;
    }
}
exports.BlockchainRepository = BlockchainRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tjaGFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3J5L2Jsb2NrY2hhaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSxNQUFhLG9CQUFvQjtJQUc3QjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUixjQUFjLEVBQUUsQ0FBQztZQUNqQixXQUFXLEVBQUUsQ0FBQztZQUNkLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsWUFBWSxFQUFFLENBQUM7WUFDZixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsaUJBQWlCLEVBQUUsQ0FBQztTQUN2QixDQUFDO0lBQ04sQ0FBQztJQUVELE9BQU87UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUEwQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUF0QkQsb0RBc0JDIn0=