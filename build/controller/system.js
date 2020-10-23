"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseEntity_1 = require("ddk.registry/dist/model/common/responseEntity");
const repository_1 = require("src/repository");
const validate_1 = require("src/util/validate");
const service_1 = require("src/service");
class SystemController {
    getInfo(_req, res) {
        const data = repository_1.systemRepository.getInfo();
        return res.send(new responseEntity_1.ResponseEntity({ data }));
    }
    async getAccountHistory(req, res) {
        const response = await service_1.nodePool.send("GET_ACCOUNT_HISTORY" /* GET_ACCOUNT_HISTORY */, req.body);
        return res.send(response);
    }
    async getBlockHistory(req, res) {
        const response = await service_1.nodePool.send("GET_BLOCK_HISTORY" /* GET_BLOCK_HISTORY */, req.body);
        return res.send(response);
    }
    async getTransactionHistory(req, res) {
        const response = await service_1.nodePool.send("GET_TRANSACTION_HISTORY" /* GET_TRANSACTION_HISTORY */, req.body);
        return res.send(response);
    }
    async getAllUnconfirmedTransactions(req, res) {
        const response = await service_1.nodePool.send("GET_ALL_UNCONFIRMED_TRANSACTIONS" /* GET_ALL_UNCONFIRMED_TRANSACTIONS */, req.body);
        return res.send(response);
    }
}
__decorate([
    validate_1.validate
], SystemController.prototype, "getAccountHistory", null);
__decorate([
    validate_1.validate
], SystemController.prototype, "getBlockHistory", null);
__decorate([
    validate_1.validate
], SystemController.prototype, "getTransactionHistory", null);
__decorate([
    validate_1.validate
], SystemController.prototype, "getAllUnconfirmedTransactions", null);
exports.SystemController = SystemController;
exports.systemController = new SystemController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvc3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esa0ZBQStFO0FBRS9FLCtDQUFrRDtBQUNsRCxnREFBNkM7QUFDN0MseUNBQXVDO0FBR3ZDLE1BQWEsZ0JBQWdCO0lBQ3pCLE9BQU8sQ0FBQyxJQUFhLEVBQUUsR0FBYTtRQUNoQyxNQUFNLElBQUksR0FBRyw2QkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV4QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFHRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDakQsTUFBTSxRQUFRLEdBQUcsTUFBTSxrQkFBUSxDQUFDLElBQUksa0RBRWxDLEdBQUcsQ0FBQyxJQUFJLENBQ1QsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUMvQyxNQUFNLFFBQVEsR0FBRyxNQUFNLGtCQUFRLENBQUMsSUFBSSw4Q0FFbEMsR0FBRyxDQUFDLElBQUksQ0FDVCxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRCxLQUFLLENBQUMscUJBQXFCLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDbkQsTUFBTSxRQUFRLEdBQUcsTUFBTSxrQkFBUSxDQUFDLElBQUksMERBRWxDLEdBQUcsQ0FBQyxJQUFJLENBQ1QsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBR0QsS0FBSyxDQUFDLDZCQUE2QixDQUFDLEdBQVksRUFBRSxHQUFhO1FBQzNELE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQVEsQ0FBQyxJQUFJLDRFQUVsQyxHQUFHLENBQUMsSUFBSSxDQUNULENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUVSO0FBbENHO0lBREMsbUJBQVE7eURBT1I7QUFFRDtJQURDLG1CQUFRO3VEQU9SO0FBR0Q7SUFEQyxtQkFBUTs2REFPTjtBQUdEO0lBREMsbUJBQVE7cUVBT047QUF4Q1QsNENBMENDO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUMifQ==