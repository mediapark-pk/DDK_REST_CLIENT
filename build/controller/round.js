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
class RoundController {
    async GetCurrentRound(req, res) {
        const response = 'hello' + req;
        // const response = await nodePool.send(
        //   API_ACTION_TYPES.GET_CURRENT_ROUND,
        //   req.body
        // );
        return res.send(response);
    }
    async getCurrentRoundDelegates(req, res) {
        const response = 'hello' + req;
        // const response = await nodePool.send(
        //   API_ACTION_TYPES.GET_CURRENT_ROUND_DELEGATES,
        //   req.body
        // );
        return res.send(response);
    }
    async getRounds(req, res) {
        const response = await service_1.nodePool.send("GET_ROUNDS" /* GET_ROUNDS */, req.body);
        return res.send(response);
    }
    async getRound(req, res) {
        const response = await service_1.nodePool.send("GET_ROUND" /* GET_ROUND */, req.body);
        return res.send(response);
    }
}
__decorate([
    validate_1.validate
], RoundController.prototype, "GetCurrentRound", null);
__decorate([
    validate_1.validate
], RoundController.prototype, "getCurrentRoundDelegates", null);
__decorate([
    validate_1.validate
], RoundController.prototype, "getRounds", null);
__decorate([
    validate_1.validate
], RoundController.prototype, "getRound", null);
exports.RoundController = RoundController;
exports.roundController = new RoundController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9yb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLHlDQUF1QztBQUN2QyxnREFBNkM7QUFFN0MsTUFBYSxlQUFlO0lBRTFCLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDL0MsTUFBTSxRQUFRLEdBQUcsT0FBTyxHQUFDLEdBQUcsQ0FBQTtRQUM1Qix3Q0FBd0M7UUFDeEMsd0NBQXdDO1FBQ3hDLGFBQWE7UUFDYixLQUFLO1FBQ0wsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRCxLQUFLLENBQUMsd0JBQXdCLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDeEQsTUFBTSxRQUFRLEdBQUcsT0FBTyxHQUFDLEdBQUcsQ0FBQTtRQUM1Qix3Q0FBd0M7UUFDeEMsa0RBQWtEO1FBQ2xELGFBQWE7UUFDYixLQUFLO1FBQ0wsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRCxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQVksRUFBRSxHQUFhO1FBQ3pDLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQVEsQ0FBQyxJQUFJLGdDQUVsQyxHQUFHLENBQUMsSUFBSSxDQUNULENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDeEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxrQkFBUSxDQUFDLElBQUksOEJBRWxDLEdBQUcsQ0FBQyxJQUFJLENBQ1QsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFwQ0M7SUFEQyxtQkFBUTtzREFRUjtBQUdEO0lBREMsbUJBQVE7K0RBUVI7QUFHRDtJQURDLG1CQUFRO2dEQU9SO0FBR0Q7SUFEQyxtQkFBUTsrQ0FPUjtBQXJDSCwwQ0FzQ0M7QUFFWSxRQUFBLGVBQWUsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDIn0=