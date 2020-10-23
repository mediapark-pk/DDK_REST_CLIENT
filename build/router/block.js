"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const block_1 = require("src/controller/block");
exports.blockRouter = express_1.default.Router();
exports.blockRouter.post('/getMany', block_1.blockController.getMany);
exports.blockRouter.get('/fees', block_1.blockController.getFees);
exports.blockRouter.get('/last', block_1.blockController.getLast);
exports.blockRouter.get('/:id', block_1.blockController.getById);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL2Jsb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBRTlCLGdEQUF1RDtBQUUxQyxRQUFBLFdBQVcsR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVDLG1CQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSx1QkFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELG1CQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSx1QkFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ2pELG1CQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSx1QkFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELG1CQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSx1QkFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDIn0=