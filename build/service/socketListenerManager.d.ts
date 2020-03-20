import { EVENT_TYPES } from 'ddk.registry/dist/model/transport/event';
import { WebhookAction, WebhookService } from 'src/service/webhook';
import { SystemService } from 'src/service/system';
import { BlockchainService } from 'src/service/blockchain';
import { BlockService } from 'src/service/block';
import { ISocketClient } from 'src/shared/socket';
import { TransactionConfirmationService } from 'src/service/transaction/confirmation';
import { TransactionRepository } from 'src/repository/transaction';
import { BlockRepository } from 'src/repository/block';
import { NodePool } from 'src/service/nodePool';
export declare class SocketListenerManager {
    private readonly systemService;
    private readonly blockchainService;
    private readonly blockService;
    private readonly transactionConfirmationService;
    private readonly webhookService;
    private readonly transactionRepository;
    private readonly blockRepository;
    constructor(systemService: SystemService, blockchainService: BlockchainService, blockService: BlockService, transactionConfirmationService: TransactionConfirmationService, webhookService: WebhookService<WebhookAction | EVENT_TYPES>, transactionRepository: TransactionRepository, blockRepository: BlockRepository, nodePool: NodePool);
    private addWebhookServiceListeners;
    private addBlockServiceListeners;
    private addTransactionConfirmationServiceListeners;
    private addSystemServiceListeners;
    private addBlockchainServiceListeners;
    addListeners(socket: ISocketClient<string>): void;
}
