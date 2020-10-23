"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const time_service_1 = __importDefault(require("eska-common/dist/time_service"));
const slot_1 = require("ddk.registry/dist/service/slot");
const repository_1 = require("src/repository");
const blockchain_1 = require("src/service/blockchain");
const block_1 = require("src/service/block");
const account_1 = require("src/service/account");
const webhook_1 = require("src/service/webhook");
const configurator_1 = require("src/service/configurator");
const confirmation_1 = require("src/service/transaction/confirmation");
const config_1 = require("src/config");
const creator_1 = require("src/service/transaction/creator");
const system_1 = require("src/service/system");
const socket_1 = require("src/service/socket");
const socketIOClient_1 = require("src/shared/socketIOClient");
const nodePool_1 = require("src/service/nodePool");
const node_1 = require("src/model/node");
const socketListenerManager_1 = require("src/service/socketListenerManager");
const node_2 = require("src/util/comparator/node");
exports.blockchainService = new blockchain_1.BlockchainService(repository_1.blockchainRepository);
exports.systemService = new system_1.SystemService(repository_1.systemRepository);
exports.accountService = new account_1.AccountService();
exports.webhookService = new webhook_1.WebhookService();
exports.transactionService = new creator_1.TransactionCreator(slot_1.slotService, time_service_1.default, exports.accountService);
const nodes = config_1.NODE_HOSTS
    .map(host => socket_1.initSocketIOClient(host.ip, host.port))
    .map(socket => new socketIOClient_1.SocketIOClient(socket))
    .map(socket => new node_1.Node(socket));
exports.nodePool = new nodePool_1.NodePool(nodes, node_2.nodeComparator);
exports.blockService = new block_1.BlockService(repository_1.blockRepository, exports.nodePool);
exports.transactionConfirmationService = new confirmation_1.TransactionConfirmationService(repository_1.transactionRepository, exports.blockService, config_1.NUMBER_OF_CONFIRMATIONS);
exports.socketListenerManager = new socketListenerManager_1.SocketListenerManager(exports.systemService, exports.blockchainService, exports.blockService, exports.transactionConfirmationService, exports.webhookService, repository_1.transactionRepository, repository_1.blockRepository, exports.nodePool);
configurator_1.configureWebhooks(exports.webhookService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlGQUF3RDtBQUV4RCx5REFBNkQ7QUFHN0QsK0NBS3dCO0FBQ3hCLHVEQUEyRDtBQUMzRCw2Q0FBaUQ7QUFDakQsaURBQXFEO0FBQ3JELGlEQUFvRTtBQUNwRSwyREFBNkQ7QUFDN0QsdUVBQXNGO0FBQ3RGLHVDQUFpRTtBQUNqRSw2REFBcUU7QUFDckUsK0NBQW1EO0FBQ25ELCtDQUF3RDtBQUN4RCw4REFBMkQ7QUFDM0QsbURBQWdEO0FBQ2hELHlDQUFzQztBQUN0Qyw2RUFBMEU7QUFDMUUsbURBQTBEO0FBRzdDLFFBQUEsaUJBQWlCLEdBQUcsSUFBSSw4QkFBaUIsQ0FBQyxpQ0FBb0IsQ0FBQyxDQUFDO0FBQ2hFLFFBQUEsYUFBYSxHQUFHLElBQUksc0JBQWEsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDO0FBQ3BELFFBQUEsY0FBYyxHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFDO0FBQ3RDLFFBQUEsY0FBYyxHQUFHLElBQUksd0JBQWMsRUFBK0IsQ0FBQztBQUNuRSxRQUFBLGtCQUFrQixHQUFHLElBQUksNEJBQWtCLENBQ3BELGtCQUFXLEVBQ1gsc0JBQVcsRUFDWCxzQkFBYyxDQUNqQixDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQUcsbUJBQVU7S0FDbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsMkJBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSwrQkFBYyxDQUFpQyxNQUFNLENBQUMsQ0FBQztLQUN6RSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBRXhCLFFBQUEsUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxLQUFLLEVBQUUscUJBQWMsQ0FBQyxDQUFDO0FBRS9DLFFBQUEsWUFBWSxHQUFHLElBQUksb0JBQVksQ0FBQyw0QkFBZSxFQUFFLGdCQUFRLENBQUMsQ0FBQztBQUMzRCxRQUFBLDhCQUE4QixHQUFHLElBQUksNkNBQThCLENBQzVFLGtDQUFxQixFQUNyQixvQkFBWSxFQUNaLGdDQUF1QixDQUMxQixDQUFDO0FBRVcsUUFBQSxxQkFBcUIsR0FBRyxJQUFJLDZDQUFxQixDQUMxRCxxQkFBYSxFQUNiLHlCQUFpQixFQUNqQixvQkFBWSxFQUNaLHNDQUE4QixFQUM5QixzQkFBYyxFQUNkLGtDQUFxQixFQUNyQiw0QkFBZSxFQUNmLGdCQUFRLENBQ1gsQ0FBQztBQUVGLGdDQUFpQixDQUFDLHNCQUFjLENBQUMsQ0FBQyJ9