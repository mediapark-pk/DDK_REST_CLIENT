"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("ddk.registry/dist/util/crypto");
const account_1 = require("ddk.registry/dist/util/account");
const account_2 = require("ddk.registry/dist/model/common/account");
const responseEntity_1 = require("ddk.registry/dist/model/common/responseEntity");
const service_1 = require("src/service");
class AccountService {
    async fetchByAddress(address) {
        const accountResponse = await service_1.nodePool.send("GET_ACCOUNT" /* GET_ACCOUNT */, { address });
        if (!accountResponse) {
            return new responseEntity_1.ResponseEntity({ errors: accountResponse.errors });
        }
        const sender = new account_2.Account({
            address: BigInt(accountResponse.data.address),
            publicKey: accountResponse.data.publicKey,
            secondPublicKey: accountResponse.data.secondPublicKey,
            referrals: accountResponse.data.referrals.map(referral => new account_2.Account({
                publicKey: '',
                address: BigInt(referral),
            })),
            stakes: accountResponse.data.stakes,
            actualBalance: accountResponse.data.actualBalance,
        });
        return new responseEntity_1.ResponseEntity({ data: sender });
    }
    async fetchByPublicKey(publicKey) {
        const address = account_1.getAddressByPublicKey(publicKey);
        return this.fetchByAddress(address);
    }
    async fetchBySecret(secret) {
        const publicKey = crypto_1.createKeyPairBySecret(secret).publicKey.toString('hex');
        return this.fetchByPublicKey(publicKey);
    }
}
exports.AccountService = AccountService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL2FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBc0U7QUFDdEUsNERBQXVFO0FBRXZFLG9FQUFpRTtBQUNqRSxrRkFBK0U7QUFHL0UseUNBQXVDO0FBRXZDLE1BQWEsY0FBYztJQUN2QixLQUFLLENBQUMsY0FBYyxDQUFDLE9BQWdCO1FBQ2pDLE1BQU0sZUFBZSxHQUFHLE1BQU0sa0JBQVEsQ0FBQyxJQUFJLGtDQUV2QyxFQUFFLE9BQU8sRUFBRSxDQUNkLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2xCLE9BQU8sSUFBSSwrQkFBYyxDQUFDLEVBQUUsTUFBTSxFQUFFLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxpQkFBTyxDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MsU0FBUyxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUN6QyxlQUFlLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlO1lBQ3JELFNBQVMsRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUM7Z0JBQ2xFLFNBQVMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQzVCLENBQUMsQ0FBQztZQUNILE1BQU0sRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDbkMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYTtTQUNwRCxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksK0JBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBb0I7UUFDdkMsTUFBTSxPQUFPLEdBQUcsK0JBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQWM7UUFDOUIsTUFBTSxTQUFTLEdBQUcsOEJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0o7QUFwQ0Qsd0NBb0NDIn0=