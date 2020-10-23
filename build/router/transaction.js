"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transaction_1 = require("src/controller/transaction");
exports.transactionRouter = express_1.default.Router();
exports.transactionRouter.post('/getMany', transaction_1.transactionController.getMany);
exports.transactionRouter.get('/:id', transaction_1.transactionController.getById);
exports.transactionRouter.post('/', transaction_1.transactionController.create);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL3RyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBRTlCLDREQUFtRTtBQUV0RCxRQUFBLGlCQUFpQixHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFbEQseUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxtQ0FBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsRSx5QkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLG1DQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdELHlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsbUNBQXFCLENBQUMsTUFBTSxDQUFDLENBQUMifQ==