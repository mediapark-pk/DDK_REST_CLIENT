"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("ddk.registry/dist/model/common/transaction/type");
const referral_1 = require("ddk.registry/dist/model/common/transaction/asset/referral");
const send_1 = require("ddk.registry/dist/model/common/transaction/asset/send");
const delegate_1 = require("ddk.registry/dist/model/common/transaction/asset/delegate");
const stake_1 = require("ddk.registry/dist/model/common/transaction/asset/stake");
const signature_1 = require("ddk.registry/dist/model/common/transaction/asset/signature");
const vote_1 = require("ddk.registry/dist/model/common/transaction/asset/vote");
const responseEntity_1 = require("ddk.registry/dist/model/common/responseEntity");
const vote_2 = require("ddk.registry/dist/service/transaction/vote");
const stake_2 = require("ddk.registry/dist/service/transaction/stake");
const transaction_1 = require("ddk.registry/dist/service/transaction");
const repository_1 = require("src/repository");
class TransactionCreator {
    constructor(slotService, timeService, accountService) {
        this.slotService = slotService;
        this.timeService = timeService;
        this.accountService = accountService;
    }
    createAsset(type, data) {
        switch (type) {
            case type_1.TransactionType.REFERRAL:
                const assetReferral = {
                    referral: BigInt(data.referral),
                };
                return new responseEntity_1.ResponseEntity({ data: new referral_1.AssetReferral(assetReferral) });
            case type_1.TransactionType.SEND:
                const assetSend = {
                    recipientAddress: BigInt(data.recipientAddress),
                    amount: data.amount,
                };
                return new responseEntity_1.ResponseEntity({ data: new send_1.AssetSend(assetSend) });
            case type_1.TransactionType.SIGNATURE:
                const assetSignature = {
                    publicKey: data.publicKey,
                };
                return new responseEntity_1.ResponseEntity({ data: new signature_1.AssetSignature(assetSignature) });
            case type_1.TransactionType.DELEGATE:
                const assetDelegate = {
                    username: data.username,
                };
                return new responseEntity_1.ResponseEntity({ data: new delegate_1.AssetDelegate(assetDelegate) });
            case type_1.TransactionType.STAKE:
                const assetStake = {
                    amount: data.amount,
                    startTime: data.startTime,
                    airdropReward: data.airdropReward,
                };
                return new responseEntity_1.ResponseEntity({ data: new stake_1.AssetStake(assetStake) });
            case type_1.TransactionType.VOTE:
                const assetVote = {
                    votes: data.votes,
                    type: data.type,
                    reward: data.reward,
                    unstake: data.unstake,
                    airdropReward: data.airdropReward,
                };
                return new responseEntity_1.ResponseEntity({ data: new vote_1.AssetVote(assetVote) });
            default:
                return new responseEntity_1.ResponseEntity({ errors: ['Unknown transaction type'] });
        }
    }
    async calculateAsset(transaction, sender) {
        switch (transaction.type) {
            case type_1.TransactionType.STAKE:
                const assetStake = stake_2.createAssetStake({
                    createdAt: transaction.createdAt || this.slotService.getTime(),
                    amount: transaction.asset.amount,
                }, sender, repository_1.blockchainRepository.getInfo().airdropBalance);
                return new responseEntity_1.ResponseEntity({ data: assetStake });
            case type_1.TransactionType.VOTE:
                const assetVote = vote_2.createAssetVote({
                    createdAt: transaction.createdAt || this.slotService.getTime(),
                    type: transaction.asset.type,
                    votes: transaction.asset.votes,
                }, sender, repository_1.blockRepository.lastBlockHeight, repository_1.blockchainRepository.getInfo().airdropBalance);
                return new responseEntity_1.ResponseEntity({ data: assetVote });
            default:
                return this.createAsset(transaction.type, transaction.asset);
        }
    }
    async create(data, secret, secondSecret) {
        if (!data.createdAt) {
            const currentTime = await this.timeService.getTime();
            data.createdAt = this.slotService.getTime(currentTime);
        }
        let sender;
        switch (data.type) {
            case type_1.TransactionType.STAKE:
            case type_1.TransactionType.VOTE:
                let accountResponse = await this.accountService.fetchBySecret(secret);
                if (!accountResponse.success) {
                    return accountResponse;
                }
                sender = accountResponse.data;
                break;
            default:
                break;
        }
        const assetResponse = await this.calculateAsset(data, sender);
        if (!assetResponse.success) {
            return assetResponse;
        }
        data.asset = assetResponse.data;
        return transaction_1.transactionCreator.create({
            data,
            sender,
            secret,
            secondSecret,
        });
    }
}
exports.TransactionCreator = TransactionCreator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlL3RyYW5zYWN0aW9uL2NyZWF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwRUFBa0Y7QUFDbEYsd0ZBQStHO0FBQy9HLGdGQUFtRztBQUNuRyx3RkFBK0c7QUFDL0csa0ZBQXNHO0FBQ3RHLDBGQUFrSDtBQUNsSCxnRkFBbUc7QUFFbkcsa0ZBQStFO0FBQy9FLHFFQUE2RTtBQUM3RSx1RUFBK0U7QUFLL0UsdUVBQTJFO0FBRTNFLCtDQUF1RTtBQU92RSxNQUFhLGtCQUFrQjtJQUszQixZQUNJLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGNBQThCO1FBRTlCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxXQUFXLENBQUMsSUFBcUIsRUFBRSxJQUFTO1FBQ2hELFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxzQkFBZSxDQUFDLFFBQVE7Z0JBQ3pCLE1BQU0sYUFBYSxHQUF3QjtvQkFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNsQyxDQUFDO2dCQUVGLE9BQU8sSUFBSSwrQkFBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksd0JBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUUsS0FBSyxzQkFBZSxDQUFDLElBQUk7Z0JBQ3JCLE1BQU0sU0FBUyxHQUFvQjtvQkFDL0IsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDL0MsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUN0QixDQUFDO2dCQUVGLE9BQU8sSUFBSSwrQkFBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUks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