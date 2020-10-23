"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_1 = require("ddk.registry/dist/util/serialize/transaction");
const service_1 = require("src/service");
const validate_1 = require("src/util/validate");
const service_2 = require("src/service");
const repository_1 = require("src/repository");
const http_1 = require("src/util/http");
const WebSocket = require("ws");
const NodeCache = require("node-cache");
const myCache = new NodeCache();
class TransactionController {
    async getById(req, res) {
        const response = await service_1.nodePool.send("GET_TRANSACTION" /* GET_TRANSACTION */, req.params);
        if (!response.success) {
            return res.status(http_1.HTTP_STATUS.INTERNAL_SERVER_ERROR).send(response);
        }
        if (!response.data) {
            return res.status(http_1.HTTP_STATUS.NOT_FOUND).send(response);
        }
        return res.send(response);
    }
    async getMany(req, res) {
        // const response = await nodePool.send(
        //     API_ACTION_TYPES.GET_TRANSACTIONS,
        //     req.body,
        // );
        // return res.send(response);
        var date = new Date();
        let limit = req.body.limit;
        let offset = req.body.offset;
        let response = null;
        let data2 = null;
        let sort = null;
        if (req.body.sort) {
            sort = req.body.sort;
            sort = `"${sort[0][0]}","${sort[0][1]}"`;
        }
        console.log(`Request at: Get Many Transactions with {{${limit}, ${offset}}}, time: ${date}`);
        if (limit <= 100) {
            let value = myCache.get(`transactions with limit ${limit} and offset ${offset}`);
            if (value == undefined) {
                let ws = new WebSocket('ws://185.244.248.16:4903/');
                ws.on('open', function open() {
                    if (sort != null) {
                        ws.send(`{"event":"message","data":{"code":"GET_TRANSACTIONS","headers":{"id":"652f52d3-b2c1-43be-9307-1e28bb9c5c66","type":"request"},"body":{"paginator":{"limit":${limit},"offset":${offset}},"sort":[[${sort}]]}}}`);
                    }
                    else {
                        ws.send(`{"event":"message","data":{"code":"GET_TRANSACTIONS","headers":{"id":"652f52d3-b2c1-43be-9307-1e28bb9c5c66","type":"request"},"body":{"paginator":{"limit":${limit},"offset":${offset}}}}}`);
                    }
                });
                ws.on('message', function incoming(event) {
                    response = JSON.parse(event.toString());
                    if (response.data.body.success != false) {
                        data2 = {
                            "success": true,
                            "data": {
                                "transactions": response.data.body.data.data,
                            },
                            "count": response.data.body.data.totalCount
                        };
                    }
                    else {
                        ws.close();
                        return res.send(response.data.body);
                    }
                    let success = myCache.set(`transactions with limit ${limit} and offset ${offset}`, data2, 3600);
                    console.log(success);
                    ws.close();
                    return res.send(data2);
                });
            }
            else {
                return res.send(value);
            }
        }
        else {
            data2 = {
                "success": false,
                "errors": [
                    "Invalid arguments",
                    `Value ${limit} is greater than maximum 50`
                ]
            };
            return res.send(data2);
        }
        //  return res.send(response);
    }
    async create(req, res) {
        const transactionData = {
            ...req.body.transaction,
            asset: req.body.transaction.asset,
        };
        const transactionResponse = await service_2.transactionService.create(transactionData, req.body.secret, req.body.secondSecret);
        if (!transactionResponse.success) {
            return transactionResponse;
        }
        const serializedTransaction = transaction_1.transactionSerializer.serialize(transactionResponse.data);
        const response = await service_1.nodePool.send("CREATE_PREPARED_TRANSACTION" /* CREATE_PREPARED_TRANSACTION */, serializedTransaction);
        if (response.success) {
            repository_1.transactionRepository.add(transactionResponse.data);
        }
        return res.send(response);
    }
}
__decorate([
    validate_1.validate
], TransactionController.prototype, "getById", null);
__decorate([
    validate_1.validate
], TransactionController.prototype, "getMany", null);
__decorate([
    validate_1.validate
], TransactionController.prototype, "create", null);
exports.TransactionController = TransactionController;
exports.transactionController = new TransactionController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci90cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLDhFQUFxRjtBQUVyRix5Q0FBdUM7QUFDdkMsZ0RBQTZDO0FBQzdDLHlDQUFpRDtBQUNqRCwrQ0FBdUQ7QUFDdkQsd0NBQTRDO0FBQzVDLGdDQUFpQztBQUNqQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUUsWUFBWSxDQUFFLENBQUM7QUFFMUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUdoQyxNQUFhLHFCQUFxQjtJQUU5QixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQVksRUFBRSxHQUFhO1FBQ3JDLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQVEsQ0FBQyxJQUFJLDBDQUVoQyxHQUFHLENBQUMsTUFBTSxDQUNiLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNuQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2RTtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ2hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzRDtRQUVELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBR0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUNyQyx3Q0FBd0M7UUFDeEMseUNBQXlDO1FBQ3pDLGdCQUFnQjtRQUNoQixLQUFLO1FBRUwsNkJBQTZCO1FBQzdCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFB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