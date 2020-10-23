"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockchainService {
    constructor(blockchainRepository) {
        this.repository = blockchainRepository;
        // TODO: fetch blockchain info when API will be added to core
        this.onUpdateInfo = this.onUpdateInfo.bind(this);
    }
    onUpdateInfo(info) {
        this.repository.updateInfo(info);
    }
}
exports.BlockchainService = BlockchainService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tjaGFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL2Jsb2NrY2hhaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFhLGlCQUFpQjtJQUcxQixZQUNJLG9CQUEyQztRQUUzQyxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFvQixDQUFDO1FBRXZDLDZEQUE2RDtRQUU3RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxZQUFZLENBQUMsSUFBMEI7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNKO0FBaEJELDhDQWdCQyJ9