"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const airdropHistory_1 = require("src/controller/airdropHistory");
exports.airdropRouter = express_1.default.Router();
exports.airdropRouter.get('/', airdropHistory_1.airdropHistoryController.getHistory);
exports.airdropRouter.get('/:referralAddress', airdropHistory_1.airdropHistoryController.getAirdropDailyHistory);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlyZHJvcEhpc3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL2FpcmRyb3BIaXN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBRTlCLGtFQUF5RTtBQUU1RCxRQUFBLGFBQWEsR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTlDLHFCQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSx5Q0FBd0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1RCxxQkFBYSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSx5Q0FBd0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDIn0=