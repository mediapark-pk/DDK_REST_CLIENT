"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("ddk.registry/dist/util/crypto");
const account_1 = require("ddk.registry/dist/util/account");
const responseEntity_1 = require("ddk.registry/dist/model/common/responseEntity");
const validate_1 = require("src/util/validate");
const service_1 = require("src/service");
class AccountController {
    async create(req, res) {
        const { secret } = req.body;
        const keyPair = crypto_1.createKeyPairBySecret(secret);
        const publicKey = keyPair.publicKey.toString('hex');
        const address = account_1.getAddressByPublicKey(publicKey);
        return res.send(new responseEntity_1.ResponseEntity({
            data: {
                publicKey,
                address,
            },
        }));
    }
    async get(req, res) {
        const response = await service_1.nodePool.send("GET_ACCOUNT" /* GET_ACCOUNT */, req.params);
        return res.send(response);
    }
    async getBalance(req, res) {
        const response = await service_1.nodePool.send("GET_ACCOUNT_BALANCE" /* GET_ACCOUNT_BALANCE */, req.params);
        return res.send(response);
    }
}
__decorate([
    validate_1.validate
], AccountController.prototype, "create", null);
__decorate([
    validate_1.validate
], AccountController.prototype, "get", null);
__decorate([
    validate_1.validate
], AccountController.prototype, "getBalance", null);
exports.AccountController = AccountController;
exports.accountController = new AccountController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL2FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSwwREFBc0U7QUFDdEUsNERBQXVFO0FBQ3ZFLGtGQUErRTtBQUUvRSxnREFBNkM7QUFDN0MseUNBQXVDO0FBRXZDLE1BQWEsaUJBQWlCO0lBRTFCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDcEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFNUIsTUFBTSxPQUFPLEdBQUcsOEJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsTUFBTSxPQUFPLEdBQUcsK0JBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWMsQ0FBQztZQUMvQixJQUFJLEVBQUU7Z0JBQ0YsU0FBUztnQkFDVCxPQUFPO2FBQ1Y7U0FDSixDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFHRCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQVEsQ0FBQyxJQUFJLGtDQUVoQyxHQUFHLENBQUMsTUFBTSxDQUNiLENBQUM7UUFFRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUdELEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDeEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxrQkFBUSxDQUFDLElBQUksa0RBRWhDLEdBQUcsQ0FBQyxNQUFNLENBQ2IsQ0FBQztRQUVGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7QUFsQ0c7SUFEQyxtQkFBUTsrQ0FjUjtBQUdEO0lBREMsbUJBQVE7NENBUVI7QUFHRDtJQURDLG1CQUFRO21EQVFSO0FBbkNMLDhDQW9DQztBQUVZLFFBQUEsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDIn0=