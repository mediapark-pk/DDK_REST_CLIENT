"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockService {
    constructor(repository, nodePool) {
        this.repository = repository;
        this.nodePool = nodePool;
        this.onApplyBlock = this.onApplyBlock.bind(this);
    }
    onApplyBlock(block) {
        this.repository.lastBlockHeight = block.height;
    }
    add(block) {
        this.repository.add(block);
    }
    async get(id) {
        if (this.repository.has(id)) {
            return this.repository.get(id);
        }
        const response = await this.nodePool.send("GET_BLOCK" /* GET_BLOCK */, { id });
        if (!response.success) {
            return null;
        }
        return response.data;
    }
}
exports.BlockService = BlockService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9ibG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWFBLE1BQWEsWUFBWTtJQUlyQixZQUNJLFVBQTRCLEVBQzVCLFFBQWtCO1FBRWxCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFrQjtRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ25ELENBQUM7SUFFRCxHQUFHLENBQUMsS0FBa0I7UUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVTtRQUNoQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEM7UUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSw4QkFBMEQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztDQUNKO0FBbENELG9DQWtDQyJ9