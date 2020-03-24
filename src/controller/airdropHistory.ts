import { API_ACTION_TYPES } from "ddk.registry/dist/model/transport/code";
import { Request, Response } from "express";

import { nodePool } from "src/service";
import { validate } from "src/util/validate";

export class AirdropHistoryController {
  @validate
  async getHistory(req: Request, res: Response): Promise<Response> {
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_AIRDROP_REWARD_HISTORY,
      req.body
    );
    return res.send(response);
  }

  @validate
  async getAirdropDailyHistory(req: Request, res: Response): Promise<Response> {      
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_AIRDROP_REWARD_DAILY_HISTORY,
      req.params
    );
    return res.send(response);
  }
}
export const airdropHistoryController = new AirdropHistoryController();
