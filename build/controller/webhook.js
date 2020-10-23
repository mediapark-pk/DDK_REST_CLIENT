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
class WebhookController {
    async onConfirmTransaction(req, res) {
        service_1.transactionConfirmationService.subscribe(req.body);
        return res.send({ success: true });
    }
}
__decorate([
    validate_1.validate
], WebhookController.prototype, "onConfirmTransaction", null);
exports.WebhookController = WebhookController;
exports.webhookController = new WebhookController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViaG9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL3dlYmhvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSx5Q0FBNkQ7QUFDN0QsZ0RBQTZDO0FBRTdDLE1BQWEsaUJBQWlCO0lBRTFCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUNsRCx3Q0FBOEIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5ELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDSjtBQUxHO0lBREMsbUJBQVE7NkRBS1I7QUFOTCw4Q0FPQztBQUVZLFFBQUEsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDIn0=