"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require("src/config");
require("src/service");
const transaction_1 = require("src/router/transaction");
const account_1 = require("src/router/account");
const util_1 = require("src/router/util");
const webhook_1 = require("src/router/webhook");
const block_1 = require("src/router/block");
const system_1 = require("src/router/system");
const blockchain_1 = require("src/router/blockchain");
const airdropHistory_1 = require("./router/airdropHistory");
const asset_1 = require("./router/asset");
const delegates_1 = require("./router/delegates");
const rateLimit = require("express-rate-limit");
const app = express_1.default();
const limiter = rateLimit({
    windowMs: 10 * 1000,
    max: 3,
    message: {
        "success": false,
        "message": "Too many request, Please try again in 10 seconds"
    }
});
app.use(limiter);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/api/transactions', transaction_1.transactionRouter);
app.use('/api/blocks', block_1.blockRouter);
app.use('/api/accounts', account_1.accountRouter);
app.use('/api/delegates', delegates_1.delegatesRouter);
app.use('/api/utils', util_1.utilRouter);
app.use('/api/webhook', webhook_1.webhookRouter);
app.use('/api/blockchain', blockchain_1.blockchainRouter);
app.use('/api/system', system_1.systemRouter);
app.use('/api/airdrop', airdropHistory_1.airdropRouter);
app.use('/api/asset', asset_1.assetRouter);
app.listen(7000, () => {
    console.log(`[DDK][RestAPI] Listening on port 7000!`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsOERBQXFDO0FBQ3JDLHNCQUFvQjtBQUNwQix1QkFBcUI7QUFFckIsd0RBQTJEO0FBQzNELGdEQUFtRDtBQUNuRCwwQ0FBNkM7QUFDN0MsZ0RBQW1EO0FBQ25ELDRDQUErQztBQUMvQyw4Q0FBaUQ7QUFDakQsc0RBQXlEO0FBQ3pELDREQUF3RDtBQUN4RCwwQ0FBNkM7QUFDN0Msa0RBQXFEO0FBQ3JELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0QixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDdEIsUUFBUSxFQUFFLEVBQUUsR0FBRyxJQUFJO0lBQ25CLEdBQUcsRUFBRSxDQUFDO0lBQ04sT0FBTyxFQUFDO1FBQ04sU0FBUyxFQUFFLEtBQUs7UUFDTixTQUFTLEVBQUUsa0RBQWtEO0tBQ3hFO0NBQ0YsQ0FBQyxDQUFDO0FBQ0wsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqQixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVwRCxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLCtCQUFpQixDQUFDLENBQUM7QUFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsbUJBQVcsQ0FBQyxDQUFDO0FBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLHVCQUFhLENBQUMsQ0FBQztBQUN4QyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLDJCQUFlLENBQUMsQ0FBQztBQUMzQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxpQkFBVSxDQUFDLENBQUM7QUFDbEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsdUJBQWEsQ0FBQyxDQUFDO0FBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsNkJBQWdCLENBQUMsQ0FBQztBQUM3QyxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxxQkFBWSxDQUFDLENBQUM7QUFDckMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsOEJBQWEsQ0FBQyxDQUFDO0FBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLG1CQUFXLENBQUMsQ0FBQztBQUVsQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQyxDQUFDIn0=