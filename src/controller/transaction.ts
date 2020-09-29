import { Request, Response } from 'express';
import { API_ACTION_TYPES } from 'ddk.registry/dist/model/transport/code';
import { TransactionData } from 'ddk.registry/dist/model/common/type';
import { Transaction } from 'ddk.registry/dist/model/common/transaction';
import { transactionSerializer } from 'ddk.registry/dist/util/serialize/transaction';

import { nodePool } from 'src/service';
import { validate } from 'src/util/validate';
import { transactionService } from 'src/service';
import { transactionRepository } from 'src/repository';
import { HTTP_STATUS } from 'src/util/http';
import WebSocket = require('ws')


export class TransactionController {
    @validate
    async getById(req: Request, res: Response): Promise<Response> {
        const response = await nodePool.send<{ id: string }, Transaction<any>>(
            API_ACTION_TYPES.GET_TRANSACTION,
            req.params,
        );

        if (!response.success) {
            return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(response);
        }

        if (!response.data) {
            return res.status(HTTP_STATUS.NOT_FOUND).send(response);
        }

        return res.send(response);
    }

    @validate
    async getMany(req: Request, res: Response) {
        // const response = await nodePool.send(
        //     API_ACTION_TYPES.GET_TRANSACTIONS,
        //     req.body,
        // );

        // return res.send(response);
        let limit = req.body.limit
        let offset = req.body.offset  
        let response = null
        let data2 = null;
        let sort = null;
        if (req.body.sort){
            sort = req.body.sort
            sort = `"${sort[0][0]}","${sort[0][1]}"`
        }        
        if (limit <= 100){
            let ws = new WebSocket('ws://185.244.248.16:4903/');
            ws.on('open', function open(){
                if(sort != null){
                    ws.send(`{"event":"message","data":{"code":"GET_TRANSACTIONS","headers":{"id":"652f52d3-b2c1-43be-9307-1e28bb9c5c66","type":"request"},"body":{"paginator":{"limit":${limit},"offset":${offset}},"sort":[[${sort}]]}}}`);
                }else{
                ws.send(`{"event":"message","data":{"code":"GET_TRANSACTIONS","headers":{"id":"652f52d3-b2c1-43be-9307-1e28bb9c5c66","type":"request"},"body":{"paginator":{"limit":${limit},"offset":${offset}}}}}`);
                }
            });
            ws.on('message', function incoming(event) {                
                response = JSON.parse(event.toString());
                if(response.data.body.success != false){
                        data2 = {
                        "success": true,
                        "data": {
                            "transactions": response.data.body.data.data,
                        },
                        "count": response.data.body.data.totalCount
                    };
                }else{
                    ws.close();
                    return res.send(response.data.body);
                }
                ws.close();
                return res.send(data2);
            });
        }else{
            data2={
                "success": false,
                "errors": [
                    "Invalid arguments",
                    "Value 101 is greater than maximum 100"
                ]
            }
            return res.send(data2);
        }
        //  return res.send(response);
    }

    @validate
    async create(req: Request, res: Response): Promise<Response> {
        const transactionData: TransactionData = {
            ...req.body.transaction,
            asset: req.body.transaction.asset,
        };

        const transactionResponse = await transactionService.create(
            transactionData,
            req.body.secret,
            req.body.secondSecret,
        );

        if (!transactionResponse.success) {
            return transactionResponse;
        }

        const serializedTransaction = transactionSerializer.serialize(
            transactionResponse.data,
        );
        const response = await nodePool.send(
            API_ACTION_TYPES.CREATE_PREPARED_TRANSACTION,
            serializedTransaction,
        );

        if (response.success) {
            transactionRepository.add(transactionResponse.data);
        }

        return res.send(response);
    }
}

export const transactionController = new TransactionController();
