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
class DelegatesController {
    async getDelegates(req, res) {
        var date = new Date();
        console.log(`Request on GetDelegate with ${req.body} at time: ${date}`);
        const response = await service_1.nodePool.send("GET_DELEGATES" /* GET_DELEGATES */, req.body);
        return res.send(response);
    }
    async getActiveDelegates(req, res) {
        var date = new Date();
        console.log(`Request on GetActiveDelegate with ${req.body} at time: ${date}`);
        const response = await service_1.nodePool.send("GET_ACTIVE_DELEGATES" /* GET_ACTIVE_DELEGATES */, req.body);
        return res.send(response);
    }
    async getMydelegates(req, res) {
        var date = new Date();
        console.log(`Request on GetMyDelegate with ${req.body} at time: ${date}`);
        const response = await service_1.nodePool.send("GET_MY_DELEGATES" /* GET_MY_DELEGATES */, req.body);
        return res.send(response);
    }
}
__decorate([
    validate_1.validate
], DelegatesController.prototype, "getDelegates", null);
__decorate([
    validate_1.validate
], DelegatesController.prototype, "getActiveDelegates", null);
__decorate([
    validate_1.validate
], DelegatesController.prototype, "getMydelegates", null);
exports.DelegatesController = DelegatesController;
exports.delegatesController = new DelegatesController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZWdhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvZGVsZWdhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EseUNBQXVDO0FBQ3ZDLGdEQUE2QztBQUU3QyxNQUFhLG1CQUFtQjtJQUU5QixLQUFLLENBQUMsWUFBWSxDQUFDLEdBQVksRUFBRSxHQUFhO1FBQzVDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsR0FBRyxDQUFDLElBQUksYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZFLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQVEsQ0FBQyxJQUFJLHNDQUVsQyxHQUFHLENBQUMsSUFBSSxDQUNULENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUNsRCxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsQ0FBQyxJQUFJLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUM3RSxNQUFNLFFBQVEsR0FBRyxNQUFNLGtCQUFRLENBQUMsSUFBSSxvREFFbEMsR0FBRyxDQUFDLElBQUksQ0FDVCxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHSCxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQVksRUFBRSxHQUFhO1FBQzlDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsR0FBRyxDQUFDLElBQUksYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQ3pFLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQVEsQ0FBQyxJQUFJLDRDQUVsQyxHQUFHLENBQUMsSUFBSSxDQUNULENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUVBO0FBaENDO0lBREMsbUJBQVE7dURBU1I7QUFHRDtJQURDLG1CQUFROzZEQVNSO0FBR0g7SUFERyxtQkFBUTt5REFTVjtBQWhDRCxrREFrQ0M7QUFDWSxRQUFBLG1CQUFtQixHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQyJ9