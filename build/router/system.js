"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const system_1 = require("src/controller/system");
exports.systemRouter = express_1.default.Router();
exports.systemRouter.get('/info', system_1.systemController.getInfo);
exports.systemRouter.get('/getAccountHistory', system_1.systemController.getAccountHistory);
exports.systemRouter.get('/:id', system_1.systemController.getBlockHistory);
exports.systemRouter.get('/getUnconfirmedTransactionHistory', system_1.systemController.getAllUnconfirmedTransactions);
exports.systemRouter.get('/getTransactionHistiory', system_1.systemController.getTransactionHistory);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlci9zeXN0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFFOUIsa0RBQXlEO0FBRTVDLFFBQUEsWUFBWSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFN0Msb0JBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLHlCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELG9CQUFZLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFDLHlCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUE7QUFDekUsb0JBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLHlCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3pELG9CQUFZLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFDLHlCQUFnQixDQUFDLDZCQUE2QixDQUFDLENBQUE7QUFDcEcsb0JBQVksQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUMseUJBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQSJ9