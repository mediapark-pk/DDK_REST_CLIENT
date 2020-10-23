"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blockchain_1 = require("src/controller/blockchain");
exports.blockchainRouter = express_1.default.Router();
exports.blockchainRouter.get('/info', blockchain_1.blockchainController.getInfo);
exports.blockchainRouter.get('/circulatingSupply', blockchain_1.blockchainController.getCirulatingSupply);
exports.blockchainRouter.get('/totalSupply', blockchain_1.blockchainController.getTotalSupply);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tjaGFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXIvYmxvY2tjaGFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUU5QiwwREFBaUU7QUFFcEQsUUFBQSxnQkFBZ0IsR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWpELHdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsaUNBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUQsd0JBQWdCLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLGlDQUFvQixDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDckYsd0JBQWdCLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxpQ0FBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyJ9