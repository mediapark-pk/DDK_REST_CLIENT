import { Request, Response } from 'express';
import { API_ACTION_TYPES } from 'ddk.registry/dist/model/transport/code';
import { Block } from 'ddk.registry/dist/model/common/block';
import { validate } from 'src/util/validate';
import { nodePool } from 'src/service';
import WebSocket = require('ws')

export class BlockController {
    constructor() {
        this.getLast = this.getLast.bind(this);
    }

    @validate
    async getById(req: Request, res: Response): Promise<Response> {
        const response = await nodePool
            .send<{ id: string }, Block>(API_ACTION_TYPES.GET_BLOCK, req.params);

        return res.send(response);
    }

    @validate
    getMany(req: Request, res: Response) {
        let limit = req.body.limit
        let offset = req.body.offset  
        let response = null
        let data2 = null;
        // const response = await nodePool
        //     .send(API_ACTION_TYPES.GET_BLOCKS, req.body);
        if (limit <= 100 && offset <= 100){
            let ws = new WebSocket('ws://185.244.248.16:4903/');
            ws.on('open', function open(){
                ws.send(`{"event":"message","data":{"code":"GET_BLOCKS","headers":{"id":"ef2aad70-3f84-4250-895b-bb32ce4c6c1b","type":"request"},"body":{"paginator":{"limit":${limit},"offset":${offset}},"sort":[["createdAt","desc"]]}}}`);
            });
            ws.on('message', function incoming(event) {                
                response = JSON.parse(event.toString());
                    data2 = {
                        "success": true,
                        "data": {
                            "blocks": response.data.body.data.data,
                        },
                        "count": response.data.body.data.totalCount
                    };
                ws.close();
                return res.send(data2);
            });
        }else{
            data2={
                "success": false,
                "errors": [
                    "Invalid arguments",
                    "Missing required property: offset",
                    "Missing required property: limit"
                ]
            }
        }
        // return res.send(data2);
    }

    async getLast(_req: Request, res: Response): Promise<Response> {
        const response = await nodePool
            .send(API_ACTION_TYPES.GET_LAST_BLOCK, {});

        return res.send(response);
    }
}

export const blockController = new BlockController();
