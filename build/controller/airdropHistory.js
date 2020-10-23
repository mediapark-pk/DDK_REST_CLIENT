"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("src/service");
const validate_1 = require("src/util/validate");
class AirdropHistoryController {
    async getHistory(req, res) {
        const response = await service_1.nodePool.send("GET_AIRDROP_REWARD_HISTORY" /* GET_AIRDROP_REWARD_HISTORY */, req.body);
        return res.send(response);
    }
    async getAirdropDailyHistory(req, res) {
        console.log("data get", req.params);
        const response = await service_1.nodePool.send("GET_AIRDROP_REWARD_DAILY_HISTORY" /* GET_AIRDROP_REWARD_DAILY_HISTORY */, req.params);
        return res.send(response);
    }
}
__decorate([
    validate_1.validate
], AirdropHistoryController.prototype, "getHistory", null);
__decorate([
    validate_1.validate
], AirdropHistoryController.prototype, "getAirdropDailyHistory", null);
exports.AirdropHistoryController = AirdropHistoryController;
exports.airdropHistoryController = new AirdropHistoryController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlyZHJvcEhpc3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9haXJkcm9wSGlzdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLHlDQUF1QztBQUN2QyxnREFBNkM7QUFFN0MsTUFBYSx3QkFBd0I7SUFFbkMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUMxQyxNQUFNLFFBQVEsR0FBRyxNQUFNLGtCQUFRLENBQUMsSUFBSSxnRUFFbEMsR0FBRyxDQUFDLElBQUksQ0FDVCxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRCxLQUFLLENBQUMsc0JBQXNCLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5DLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQVEsQ0FBQyxJQUFJLDRFQUVsQyxHQUFHLENBQUMsTUFBTSxDQUNYLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBbEJDO0lBREMsbUJBQVE7MERBT1I7QUFHRDtJQURDLG1CQUFRO3NFQVNSO0FBbkJILDREQW9CQztBQUNZLFFBQUEsd0JBQXdCLEdBQUcsSUFBSSx3QkFBd0IsRUFBRSxDQUFDIn0=