import { API_ACTION_TYPES } from "ddk.registry/dist/model/transport/code";
import { Request, Response } from "express";

import { nodePool } from "src/service";
import { validate } from "src/util/validate";

export class DelegatesController {
  @validate
  async getDelegates(req: Request, res: Response): Promise<Response> {
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_DELEGATES,
      req.body
    );
    return res.send(response);
  }

  @validate
  async getActiveDelegates(req: Request, res: Response): Promise<Response> {
    console.log("data get",req.params);
      
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_ACTIVE_DELEGATES,
      req.params
    );
    return res.send(response);
  }

  @validate
async getMydelegates(req: Request, res: Response): Promise<Response> {
  console.log("data get",req.params);
    
  const response = await nodePool.send(
    API_ACTION_TYPES.GET_MY_DELEGATES,
    req.params
  );
  return res.send(response);
}

}



export const delegatesController = new DelegatesController();
