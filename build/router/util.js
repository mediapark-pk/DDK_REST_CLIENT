"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const util_1 = require("src/controller/util");
exports.utilRouter = express_1.default.Router();
exports.utilRouter.get('/generate-passphrase', util_1.utilController.generatePassphrase);
exports.utilRouter.post('/make-key-pair', util_1.utilController.makeKeyPair);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUU5Qiw4Q0FBcUQ7QUFFeEMsUUFBQSxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUUzQyxrQkFBVSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxxQkFBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDMUUsa0JBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUscUJBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyJ9