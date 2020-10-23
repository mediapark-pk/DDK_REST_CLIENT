"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const delegates_1 = require("src/controller/delegates");
exports.delegatesRouter = express_1.default.Router();
exports.delegatesRouter.post('/', delegates_1.delegatesController.getDelegates);
exports.delegatesRouter.post('/activeDelegates', delegates_1.delegatesController.getActiveDelegates);
exports.delegatesRouter.post('/myDelegates', delegates_1.delegatesController.getMydelegates);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZWdhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlci9kZWxlZ2F0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsd0RBQStEO0FBR2xELFFBQUEsZUFBZSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEQsdUJBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLCtCQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzNELHVCQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLCtCQUFtQixDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDakYsdUJBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLCtCQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDIn0=