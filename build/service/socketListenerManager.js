"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webhook_1 = require("src/service/webhook");
const nodePool_1 = require("src/service/nodePool");
class SocketListenerManager {
    constructor(systemService, blockchainService, blockService, transactionConfirmationService, webhookService, transactionRepository, blockRepository, nodePool) {
        this.systemService = systemService;
        this.blockchainService = blockchainService;
        this.blockService = blockService;
        this.transactionConfirmationService = transactionConfirmationService;
        this.webhookService = webhookService;
        this.transactionRepository = transactionRepository;
        this.blockRepository = blockRepository;
        this.addListeners = this.addListeners.bind(this);
        nodePool.on(nodePool_1.NodePoolAction.repick, (node) => {
            this.addListeners(node.socket);
        });
    }
    addWebhookServiceListeners(socket) {
        socket.addCodeListener("DECLINE_TRANSACTION" /* DECLINE_TRANSACTION */, (transaction) => {
            this.webhookService.on("DECLINE_TRANSACTION" /* DECLINE_TRANSACTION */, transaction);
        });
        socket.addCodeListener("APPLY_BLOCK" /* APPLY_BLOCK */, (block) => {
            this.webhookService.on("APPLY_BLOCK" /* APPLY_BLOCK */, block);
            block.transactions.forEach(transaction => {
                this.webhookService.on(webhook_1.WebhookAction.APPLY_TRANSACTION, transaction);
            });
        });
    }
    addBlockServiceListeners(socket) {
        socket.addCodeListener("APPLY_BLOCK" /* APPLY_BLOCK */, this.blockService.onApplyBlock);
    }
    addTransactionConfirmationServiceListeners(socket) {
        socket.addCodeListener("APPLY_BLOCK" /* APPLY_BLOCK */, (block) => this.transactionConfirmationService.onApplyBlock(block));
    }
    addSystemServiceListeners(socket) {
        socket.addCodeListener("UPDATE_SYSTEM_INFO" /* UPDATE_SYSTEM_INFO */, this.systemService.onUpdateInfo);
    }
    addBlockchainServiceListeners(socket) {
        socket.addCodeListener("UPDATE_BLOCKCHAIN_INFO" /* UPDATE_BLOCKCHAIN_INFO */, this.blockchainService.onUpdateInfo);
    }
    addListeners(socket) {
        this.addWebhookServiceListeners(socket);
        this.addBlockServiceListeners(socket);
        this.addTransactionConfirmationServiceListeners(socket);
        this.addSystemServiceListeners(socket);
        this.addBlockchainServiceListeners(socket);
        // TODO: Refactor it
        socket.addCodeListener("APPLY_BLOCK" /* APPLY_BLOCK */, (block) => {
            block.transactions.forEach(transaction => {
                if (this.transactionRepository.has(transaction.id)) {
                    this.transactionRepository.update(transaction);
                }
                else {
                    this.transactionRepository.add(transaction);
                }
            });
        });
        socket.addCodeListener("APPLY_BLOCK" /* APPLY_BLOCK */, (block) => {
            this.blockRepository.add(block);
        });
        socket.addCodeListener("UNDO_BLOCK" /* UNDO_BLOCK */, (block) => {
            this.blockRepository.remove(block.id);
        });
        socket.addCodeListener("UNDO_BLOCK" /* UNDO_BLOCK */, (block) => {
            block.transactions.forEach(transaction => {
                this.transactionRepository.remove(transaction.id);
            });
        });
    }
}
exports.SocketListenerManager = SocketListenerManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0TGlzdGVuZXJNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2Uvc29ja2V0TGlzdGVuZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsaURBQW9FO0FBUXBFLG1EQUFnRTtBQU1oRSxNQUFhLHFCQUFxQjtJQVM5QixZQUNJLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxZQUEwQixFQUMxQiw4QkFBOEQsRUFDOUQsY0FBMkQsRUFDM0QscUJBQTRDLEVBQzVDLGVBQWdDLEVBQ2hDLFFBQWtCO1FBRWxCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsOEJBQThCLEdBQUcsOEJBQThCLENBQUM7UUFDckUsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO1FBQ25ELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBRXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsUUFBUSxDQUFDLEVBQUUsQ0FBQyx5QkFBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQVUsRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLDBCQUEwQixDQUFDLE1BQTZCO1FBQzVELE1BQU0sQ0FBQyxlQUFlLGtEQUVsQixDQUFDLFdBQXdCLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsa0RBRWxCLFdBQVcsQ0FDZCxDQUFD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