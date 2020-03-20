import { API_ACTION_TYPES } from "ddk.registry/dist/model/transport/code";
import { Request, Response } from "express";

import { nodePool } from "src/service";
import { validate } from "src/util/validate";

export class AssetController {
  @validate
  async createStakeAsset(req: Request, res: Response): Promise<Response> {
    console.log("asset body",req.body)
    console.log("asset params",req.params)
    const response = await nodePool.send(
      API_ACTION_TYPES.CREATE_STAKE_ASSET,
      req.body
    );
    return res.send(response);
  }

  // @validate
  async createVoteAsset(req: Request, res: Response): Promise<Response> {
    console.log("data get",req.body);
      
    const response = await nodePool.send(
      API_ACTION_TYPES.CREATE_VOTE_ASSET,
      req.body
    );
    return res.send(response);
  }
}
export const assetController = new AssetController();
