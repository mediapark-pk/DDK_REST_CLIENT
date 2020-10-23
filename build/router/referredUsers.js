"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const referredUsers_1 = require("src/controller/referredUsers");
exports.referredUsersRouter = express_1.default.Router();
exports.referredUsersRouter.get('/', referredUsers_1.referredUsersController.getReferedUsers);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJyZWRVc2Vycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXIvcmVmZXJyZWRVc2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixnRUFBdUU7QUFHMUQsUUFBQSxtQkFBbUIsR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXBELDJCQUFtQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsdUNBQXVCLENBQUMsZUFBZSxDQUFDLENBQUMifQ==