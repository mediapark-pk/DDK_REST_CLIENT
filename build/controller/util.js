"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const passphrase_1 = require("ddk.registry/dist/util/passphrase");
const responseEntity_1 = require("ddk.registry/dist/model/common/responseEntity");
const crypto_1 = require("ddk.registry/dist/util/crypto");
const validate_1 = require("src/util/validate");
class UtilController {
    generatePassphrase(_req, res) {
        const passphrase = passphrase_1.generatePassphrase();
        const response = new responseEntity_1.ResponseEntity({ data: passphrase });
        return res.send(response);
    }
    makeKeyPair(req, res) {
        const { secret } = req.body;
        const keyPair = crypto_1.createKeyPairBySecret(secret);
        return res.send({
            success: true,
            data: {
                publicKey: keyPair.publicKey.toString('hex'),
                privateKey: keyPair.privateKey.toString('hex'),
            },
        });
    }
}
__decorate([
    validate_1.validate
], UtilController.prototype, "makeKeyPair", null);
exports.UtilController = UtilController;
exports.utilController = new UtilController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxrRUFBdUU7QUFDdkUsa0ZBQStFO0FBQy9FLDBEQUFzRTtBQUV0RSxnREFBNkM7QUFFN0MsTUFBYSxjQUFjO0lBQ3ZCLGtCQUFrQixDQUFDLElBQWEsRUFBRSxHQUFhO1FBQzNDLE1BQU0sVUFBVSxHQUFHLCtCQUFrQixFQUFFLENBQUM7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSwrQkFBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFMUQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFHRCxXQUFXLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDbkMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDNUIsTUFBTSxPQUFPLEdBQUcsOEJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUU7Z0JBQ0YsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDNUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNqRDtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQVpHO0lBREMsbUJBQVE7aURBWVI7QUFwQkwsd0NBcUJDO0FBRVksUUFBQSxjQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQyJ9