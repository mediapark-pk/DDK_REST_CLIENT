"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { nodePool } from "src/service";
const validate_1 = require("src/util/validate");
class TracingController {
    async GetTracing(req, res) {
        const response = 'hello' + req;
        // await nodePool.send(
        //   API_ACTION_TYPES.GET_TRACING,
        //   req.body
        // );
        return res.send(response);
    }
}
__decorate([
    validate_1.validate
], TracingController.prototype, "GetTracing", null);
exports.TracingController = TracingController;
exports.tracingController = new TracingController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL3RyYWNpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSwwQ0FBMEM7QUFDMUMsZ0RBQTZDO0FBRTdDLE1BQWEsaUJBQWlCO0lBRTVCLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDMUMsTUFBTSxRQUFRLEdBQUcsT0FBTyxHQUFDLEdBQUcsQ0FBQTtRQUM1Qix1QkFBdUI7UUFDdkIsa0NBQWtDO1FBQ2xDLGFBQWE7UUFDYixLQUFLO1FBQ0wsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FFRjtBQVRDO0lBREMsbUJBQVE7bURBUVI7QUFUSCw4Q0FXQztBQUVZLFFBQUEsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDIn0=