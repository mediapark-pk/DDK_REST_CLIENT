import { API_ACTION_TYPES } from "ddk.registry/dist/model/transport/code";
import { Request, Response } from "express";
import { nodePool } from "src/service";
import { validate } from "src/util/validate";

export class ReferredUsersController {
  @validate
  async getReferedUsers(req: Request, res: Response): Promise<Response> {
    const response = await nodePool.send(
      API_ACTION_TYPES.GET_REFERRED_USERS,
      req.body
    );
    return res.send(response);
  }
}

export const referredUsersController = new ReferredUsersController();
