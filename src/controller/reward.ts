import { API_ACTION_TYPES } from "ddk.registry/dist/model/transport/code";
import { Request, Response } from "express";
import { nodePool } from "src/service";
import { validate } from "src/util/validate";

export class RewardController {
  @validate
  async getStakeRewards(req: Request, res: Response): Promise<Response> {
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_STAKE_REWARDS,
      req.body
    );
    return res.send(response);
  }
  
  @validate
  async getReferredUsersRewards(req: Request, res: Response): Promise<Response> {
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_REFERRED_USERS_REWARDS,
      req.body
    );
    return res.send(response);
  }

  @validate
  async getAirDropRewards(req: Request, res: Response): Promise<Response> {
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_AIRDROP_REWARDS,
      req.body
    );
    return res.send(response);
  }
}




export const rewardController = new RewardController();
