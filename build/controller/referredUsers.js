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
class ReferredUsersController {
    async getReferedUsers(req, res) {
        const response = await service_1.nodePool.send("GET_REFERRED_USERS" /* GET_REFERRED_USERS */, req.body);
        return res.send(response);
    }
}
__decorate([
    validate_1.validate
], ReferredUsersController.prototype, "getReferedUsers", null);
exports.ReferredUsersController = ReferredUsersController;
exports.referredUsersController = new ReferredUsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJyZWRVc2Vycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL3JlZmVycmVkVXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSx5Q0FBdUM7QUFDdkMsZ0RBQTZDO0FBRTdDLE1BQWEsdUJBQXVCO0lBRWxDLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDL0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxrQkFBUSxDQUFDLElBQUksZ0RBRWxDLEdBQUcsQ0FBQyxJQUFJLENBQ1QsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFQQztJQURDLG1CQUFROzhEQU9SO0FBUkgsMERBU0M7QUFFWSxRQUFBLHVCQUF1QixHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQyJ9