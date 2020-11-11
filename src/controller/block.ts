import { Request, Response } from 'express';
import { API_ACTION_TYPES } from 'ddk.registry/dist/model/transport/code';
import { Block } from 'ddk.registry/dist/model/common/block';
import { validate } from 'src/util/validate';
import { nodePool } from 'src/service';
const NodeCache = require( "node-cache" );

const myCache = new NodeCache();
import WebSocket = require('ws');

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
    async getMany(req: Request, res: Response){
        var date = new Date();
        let limit = req.body.limit
        let offset = req.body.offset  
        let response = null
        let data2 = null;
        let sort = null;
        if (req.body.sort){
            sort = req.body.sort
            sort = `"${sort[0][0]}","${sort[0][1]}"`
        }
        console.log(`Request at: GetMany Blocks with {{${limit}, ${offset}}}, time: ${date}`);

        // const response = await nodePool
        //      .send(API_ACTION_TYPES.GET_BLOCKS, req.body);
        
        
        if ((limit <= 100) && (offset <= 1000)){
            let value = myCache.get(`blocks with limit ${limit} and offset ${offset}`);
            if(value == undefined){
            let ws = new WebSocket('ws://185.244.248.16:4903/');
            ws.on('open', function open(){
                if(sort != null){
                ws.send(`{"event":"message","data":{"code":"GET_BLOCKS","headers":{"id":"652f52d3-b2c1-43be-9307-1e28bb9c5c66","type":"request"},"body":{"paginator":{"limit":${limit},"offset":${offset}},"sort":[[${sort}]]}}}`);
                }else{
                ws.send(`{"event":"message","data":{"code":"GET_BLOCKS","headers":{"id":"3c5ec5a2-993c-41c8-b082-882bb69d5a16","type":"request"},"body":{"paginator":{"limit":${limit},"offset":${offset}},"sort":[["createdAt","desc"]]}}}`);
                }
            });
            ws.on('message', function incoming(event) {                
                response = JSON.parse(event.toString());
                if(response.data.code == 'GET_BLOCKS'){
                    if(response.data.body.success != false){
                        data2 = {
                            "success": true,
                            "data": {
                                "blocks": response.data.body.data.data,
                            },
                            "count": response.data.body.data.totalCount
                        };
                        let success=myCache.set(`blocks with limit ${limit} and offset ${offset}`,data2, 3600)
                            console.log(success);
                    }else{
                        data2={
                            "success": false,
                            "data": {
                                "blocks": [],
                            },
                            "count": 0
                        }
                    }
                    ws.close();
                    return res.send(data2);
                }
            });
        }else{
            return res.send(value);
        }
    }
        else if (limit > 100){
            data2={
                "success": false,
                "errors": [
                    "Invalid arguments",
                    `Value of ${limit} is greater than maximum 50`
                ]
            }
            return res.send(data2)
        }
        else{
            data2={
                "success": false,
                "errors": [
                    "Invalid arguments",
                    `Value of ${offset} is greater than maximum 1000`
                ]
            }
            return res.send(data2)
        }
   
        // return res.send(response);
    }

    async getLast(_req: Request, res: Response): Promise<Response> {
        const response = await nodePool
            .send(API_ACTION_TYPES.GET_LAST_BLOCK, {});

        return res.send(response);
    }
    async getFees(_req: Request, res: Response): Promise<Response> {
        console.log('Request At Blocks Get Fees')
        let value = myCache.get(`Request At Blocks Get Fees`);
        if(value == undefined){
        const response = await nodePool
            .send(API_ACTION_TYPES.GET_FEES, {});
        let success=myCache.set(`Request At Blocks Get Fees`,response, 43200)
        console.log(success);
        return res.send(response);
        }else{
            return res.send(value)
        }
    }
    
}

export const blockController = new BlockController();
