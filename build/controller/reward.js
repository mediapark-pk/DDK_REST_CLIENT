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
class RewardController {
    async getStakeRewards(req, res) {
        const response = await service_1.nodePool.send("GET_STAKE_REWARDS" /* GET_STAKE_REWARDS */, req.body);
        return res.send(response);
    }
    async getReferredUsersRewards(req, res) {
        const response = await service_1.nodePool.send("GET_REFERRED_USERS_REWARDS" /* GET_REFERRED_USERS_REWARDS */, req.body);
        return res.send(response);
    }
}
__decorate([
    validate_1.validate
], RewardController.prototype, "getStakeRewards", null);
__decorate([
    validate_1.validate
], RewardController.prototype, "getReferredUsersRewards", null);
exports.RewardController = RewardController;
exports.rewardController = new RewardController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV3YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvcmV3YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEseUNBQXVDO0FBQ3ZDLGdEQUE2QztBQUU3QyxNQUFhLGdCQUFnQjtJQUUzQixLQUFLLENBQUMsZUFBZSxDQUFDLEdBQVksRUFBRSxHQUFhO1FBQy9DLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQVEsQ0FBQyxJQUFJLDhDQUVsQyxHQUFHLENBQUMsSUFBSSxDQUNULENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUN2RCxNQUFNLFFBQVEsR0FBRyxNQUFNLGtCQUFRLENBQUMsSUFBSSxnRUFFbEMsR0FBRyxDQUFDLElBQUksQ0FDVCxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQWhCQztJQURDLG1CQUFRO3VEQU9SO0FBR0Q7SUFEQyxtQkFBUTsrREFPUjtBQWpCSCw0Q0FrQkM7QUFFWSxRQUFBLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyJ9