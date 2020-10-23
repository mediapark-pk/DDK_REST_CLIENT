"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require("src/util/validate");
const service_1 = require("src/service");
const NodeCache = require("node-cache");
const myCache = new NodeCache();
const WebSocket = require("ws");
class BlockController {
    constructor() {
        this.getLast = this.getLast.bind(this);
    }
    async getById(req, res) {
        const response = await service_1.nodePool
            .send("GET_BLOCK" /* GET_BLOCK */, req.params);
        return res.send(response);
    }
    async getMany(req, res) {
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
        console.log(`Request at: GetMany Blocks with {{${limit}, ${offset}}}, time: ${date}`);
        // const response = await nodePool
        //      .send(API_ACTION_TYPES.GET_BLOCKS, req.body);
        if ((limit <= 100) && (offset <= 1000)) {
            let value = myCache.get(`blocks with limit ${limit} and offset ${offset}`);
            if (value == undefined) {
                let ws = new WebSocket('ws://185.244.248.16:4903/');
                ws.on('open', function open() {
                    if (sort != null) {
                        ws.send(`{"event":"message","data":{"code":"GET_BLOCKS","headers":{"id":"652f52d3-b2c1-43be-9307-1e28bb9c5c66","type":"request"},"body":{"paginator":{"limit":${limit},"offset":${offset}},"sort":[[${sort}]]}}}`);
                    }
                    else {
                        ws.send(`{"event":"message","data":{"code":"GET_BLOCKS","headers":{"id":"3c5ec5a2-993c-41c8-b082-882bb69d5a16","type":"request"},"body":{"paginator":{"limit":${limit},"offset":${offset}},"sort":[["createdAt","desc"]]}}}`);
                    }
                });
                ws.on('message', function incoming(event) {
                    response = JSON.parse(event.toString());
                    if (response.data.code == 'GET_BLOCKS') {
                        if (response.data.body.success != false) {
                            data2 = {
                                "success": true,
                                "data": {
                                    "blocks": response.data.body.data.data,
                                },
                                "count": response.data.body.data.totalCount
                            };
                            let success = myCache.set(`blocks with limit ${limit} and offset ${offset}`, data2, 3600);
                            console.log(success);
                        }
                        else {
                            data2 = {
                                "success": false,
                                "data": {
                                    "blocks": [],
                                },
                                "count": 0
                            };
                        }
                        ws.close();
                        return res.send(data2);
                    }
                });
            }
            else {
                return res.send(value);
            }
        }
        else if (limit > 100) {
            data2 = {
                "success": false,
                "errors": [
                    "Invalid arguments",
                    `Value of ${limit} is greater than maximum 50`
                ]
            };
            return res.send(data2);
        }
        else {
            data2 = {
                "success": false,
                "errors": [
                    "Invalid arguments",
                    `Value of ${offset} is greater than maximum 1000`
                ]
            };
            return res.send(data2);
        }
        // return res.send(response);
    }
    async getLast(_req, res) {
        const response = await service_1.nodePool
            .send("GET_LAST_BLOCK" /* GET_LAST_BLOCK */, {});
        return res.send(response);
    }
    async getFees(_req, res) {
        const response = await service_1.nodePool
            .send("GET_FEES" /* GET_FEES */, {});
        return res.send(response);
    }
}
__decorate([
    validate_1.validate
], BlockController.prototype, "getById", null);
__decorate([
    validate_1.validate
], BlockController.prototype, "getMany", null);
exports.BlockController = BlockController;
exports.blockController = new BlockController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9ibG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLGdEQUE2QztBQUM3Qyx5Q0FBdUM7QUFDdkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFFLFlBQVksQ0FBRSxDQUFDO0FBRTFDLE1BQU0sT0FBTyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFDaEMsZ0NBQWlDO0FBRWpDLE1BQWEsZUFBZTtJQUN4QjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDckMsTUFBTSxRQUFRLEdBQUcsTUFBTSxrQkFBUTthQUMxQixJQUFJLDhCQUFvRCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekUsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFHRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQVksRUFBRSxHQUFhO1FBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDMUIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFBO1FBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQztZQUNkLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtZQUNwQixJQUFJLEdBQUcs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