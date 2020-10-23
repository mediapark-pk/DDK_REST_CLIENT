"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const timers_1 = require("timers");
class TransactionConfirmationService {
    constructor(transactionRepository, blockService, numberOfConfirmations, unsubscribeTimeout = 86400000) {
        this.numberOfConfirmations = numberOfConfirmations;
        this.transactionRepository = transactionRepository;
        this.blockService = blockService;
        this.unsubscribeTimeout = unsubscribeTimeout;
        this.listeners = new Map();
        this.unsubscribe = this.unsubscribe.bind(this);
        this.onApplyBlock = this.onApplyBlock.bind(this);
    }
    notify(url, transaction) {
        return node_fetch_1.default(url, {
            method: 'post',
            body: JSON.stringify(transaction),
        });
    }
    subscribe(listener) {
        const unsubscribeTimeoutId = timers_1.setTimeout(() => this.unsubscribe(listener.transactionId), this.unsubscribeTimeout);
        if (!this.listeners.has(listener.transactionId)) {
            this.listeners.set(listener.transactionId, []);
        }
        this.listeners
            .get(listener.transactionId)
            .push({ ...listener, unsubscribeTimeoutId });
    }
    unsubscribe(id) {
        if (!this.listeners.has(id)) {
            return;
        }
        this.listeners
            .get(id)
            .forEach(listener => timers_1.clearTimeout(listener.unsubscribeTimeoutId));
        this.listeners.delete(id);
    }
    async onApplyBlock(block) {
        const notifiedIds = [];
        for (const [id, listeners] of this.listeners.entries()) {
            const transaction = this.transactionRepository.get(id);
            if (!transaction || !transaction.blockId) {
                return;
            }
            const transactionBlock = await this.blockService.get(transaction.blockId);
            if (!transactionBlock) {
                return;
            }
            if (transactionBlock.height + this.numberOfConfirmations >
                block.height) {
                return;
            }
            transaction.confirmations = block.height - transactionBlock.height;
            listeners.forEach(listener => this.notify(listener.url, transaction));
            notifiedIds.push(id);
        }
        notifiedIds.forEach(this.unsubscribe);
    }
}
exports.TransactionConfirmationService = TransactionConfirmationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZpY2UvdHJhbnNhY3Rpb24vY29uZmlybWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNERBQTZDO0FBQzdDLG1DQUFrRDtBQXNCbEQsTUFBYSw4QkFBOEI7SUFRdkMsWUFDSSxxQkFBNEMsRUFDNUMsWUFBMkIsRUFDM0IscUJBQTZCLEVBQzdCLHFCQUE2QixRQUFRO1FBRXJDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztRQUNuRCxJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBRTdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVPLE1BQU0sQ0FBQyxHQUFXLEVBQUUsV0FBd0I7UUFDaEQsT0FBTyxvQkFBSyxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBeUM7UUFDL0MsTUFBTSxvQkFBb0IsR0FBRyxtQkFBVSxDQUNuQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFDOUMsSUFBSSxDQUFDLGtCQUFrQixDQUMxQixDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxDQUFDLFNBQVM7YUFDVCxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQzthQUMzQixJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFdBQVcsQ0FBQyxFQUFVO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN6QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsU0FBUzthQUNULEdBQUcsQ0FBQyxFQUFFLENBQUM7YUFDUCxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBWTtRQUMzQixNQUFNLFdBQVcsR0FBa0IsRUFBRSxDQUFDO1FBRXRDLEtBQUssTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3BELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RDLE9BQU87YUFDVjtZQUVELE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDaEQsV0FBVyxDQUFDLE9BQU8sQ0FDdEIsQ0FBQztZQUNGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDbkIsT0FBTzthQUNWO1lBRUQsSUFDSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHFCQUFxQjtnQkFDcEQsS0FBSyxDQUFDLE1BQU0sRUFDZDtnQkFDRSxPQUFPO2FBQ1Y7WUFFRCxXQUFXLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1lBRW5FLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUN6QyxDQUFDO1lBRUYsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4QjtRQUVELFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDSjtBQTVGRCx3RUE0RkMifQ==