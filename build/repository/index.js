"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_1 = require("src/repository/block");
const blockchain_1 = require("src/repository/blockchain");
const transaction_1 = require("src/repository/transaction");
const system_1 = require("src/repository/system");
exports.blockRepository = new block_1.BlockRepository();
exports.blockchainRepository = new blockchain_1.BlockchainRepository();
exports.systemRepository = new system_1.SystemRepository();
exports.transactionRepository = new transaction_1.TransactionRepository();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVwb3NpdG9yeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdEQUF1RDtBQUN2RCwwREFBaUU7QUFDakUsNERBQW1FO0FBQ25FLGtEQUF5RDtBQUU1QyxRQUFBLGVBQWUsR0FBRyxJQUFJLHVCQUFlLEVBQUUsQ0FBQztBQUN4QyxRQUFBLG9CQUFvQixHQUFHLElBQUksaUNBQW9CLEVBQUUsQ0FBQztBQUNsRCxRQUFBLGdCQUFnQixHQUFHLElBQUkseUJBQWdCLEVBQUUsQ0FBQztBQUMxQyxRQUFBLHFCQUFxQixHQUFHLElBQUksbUNBQXFCLEVBQUUsQ0FBQyJ9