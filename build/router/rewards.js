"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reward_1 = require("src/controller/reward");
exports.rewardRouter = express_1.default.Router();
exports.rewardRouter.get('/getReferredUsersReward', reward_1.rewardController.getReferredUsersRewards);
exports.rewardRouter.get('/getStakeRewards', reward_1.rewardController.getStakeRewards);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV3YXJkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXIvcmV3YXJkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixrREFBeUQ7QUFFNUMsUUFBQSxZQUFZLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU3QyxvQkFBWSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBQyx5QkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3JGLG9CQUFZLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFDLHlCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDIn0=