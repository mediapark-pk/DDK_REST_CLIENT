"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const webhook_1 = require("src/controller/webhook");
exports.webhookRouter = express_1.default.Router();
exports.webhookRouter.post('/subscribe/confirm-transaction', webhook_1.webhookController.onConfirmTransaction);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViaG9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXIvd2ViaG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUU5QixvREFBMkQ7QUFFOUMsUUFBQSxhQUFhLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU5QyxxQkFBYSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSwyQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDIn0=