import { API_ACTION_TYPES } from "ddk.registry/dist/model/transport/code";
import { Request, Response } from "express";
import { nodePool } from "src/service";
import { validate } from "src/util/validate";

export class RoundController {
  @validate
  async GetCurrentRound(req: Request, res: Response): Promise<Response> {
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_CURRENT_ROUND,
      req.body
    );
    return res.send(response);
  }
  
  @validate
  async getCurrentRoundDelegates(req: Request, res: Response): Promise<Response> {
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_CURRENT_ROUND_DELEGATES,
      req.body
    );
    return res.send(response);
  }

  @validate
  async getRounds(req: Request, res: Response): Promise<Response> {
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_ROUNDS,
      req.body
    );
    return res.send(response);
  }
  
  @validate
  async getRound(req: Request, res: Response): Promise<Response> {
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_ROUND,
      req.body
    );
    return res.send(response);
  }
}

export const roundController = new RoundController();
