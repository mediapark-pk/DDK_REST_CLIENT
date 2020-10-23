"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const account_1 = require("src/controller/account");
exports.accountRouter = express_1.default.Router();
exports.accountRouter.get('/:address', account_1.accountController.get);
exports.accountRouter.get('/:address/balance', account_1.accountController.getBalance);
exports.accountRouter.post('/', account_1.accountController.create);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXIvYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUU5QixvREFBMkQ7QUFFOUMsUUFBQSxhQUFhLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU5QyxxQkFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsMkJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEQscUJBQWEsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsMkJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckUscUJBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLDJCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDIn0=