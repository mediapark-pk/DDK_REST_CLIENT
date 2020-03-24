import { Request, Response } from "express";
import { ResponseEntity } from "ddk.registry/dist/model/common/responseEntity";

import { systemRepository } from "src/repository";
import { validate } from "src/util/validate";
import { nodePool } from "src/service";
import { API_ACTION_TYPES } from "ddk.registry/dist/model/transport/code";

export class SystemController {
  getInfo(_req: Request, res: Response): Response {
    const data = systemRepository.getInfo();

    return res.send(new ResponseEntity({ data }));
  }

  @validate
  async getAccountHistory(req: Request, res: Response): Promise<Response> {
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_ACCOUNT_HISTORY,
      req.params
    );
    return res.send(response);
  }
  @validate
  async getBlockHistory(req: Request, res: Response): Promise<Response> {
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_BLOCK_HISTORY,
      req.params
    );
    return res.send(response);
  }

  // @validate
  async getTransactionHistory(req: Request, res: Response): Promise<Response> {
    console.log("tra his", req.params)
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_TRANSACTION_HISTORY,
      req.params
    );
    return res.send(response);
  }

  @validate
  async getAllUnconfirmedTransactions(
    req: Request,
    res: Response
  ): Promise<Response> {
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_ALL_UNCONFIRMED_TRANSACTIONS,
      req.body
    );
    return res.send(response);
  }
}

export const systemController = new SystemController();
