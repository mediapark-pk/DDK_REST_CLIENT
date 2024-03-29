import { API_ACTION_TYPES } from "ddk.registry/dist/model/transport/code";
import { Request, Response } from "express";

import { nodePool } from "src/service";
import { validate } from "src/util/validate";
const NodeCache = require("node-cache");

const myCache = new NodeCache();

export class DelegatesController {
  @validate
  async getDelegates(req: Request, res: Response): Promise<Response> {
    var date = new Date();
    let value = myCache.get(`Request on GetDelegate with ${req.body}`);
    if (value == undefined) {
     
      console.log(`Request on GetDelegate with ${req.body} at time: ${date}`)
      const response = await nodePool.send(
        API_ACTION_TYPES.GET_DELEGATES,
        req.body
      );
      let success = myCache.set(`Request on GetDelegate with ${req.body}`, response, 3600)
      console.log(success);
      return res.send(response);
    }
    return res.send(value);
    }

    @validate
    async getActiveDelegates(req: Request, res: Response): Promise < Response > {
      var date = new Date();
      console.log(`Request on GetActiveDelegate with ${req.body} at time: ${date}`)
    const response = await nodePool.send(
        API_ACTION_TYPES.GET_ACTIVE_DELEGATES,
        req.body
      );
      return res.send(response);
    }

    @validate
    async getMydelegates(req: Request, res: Response): Promise < Response > {
      var date = new Date();
      console.log(`Request on GetMyDelegate with ${req.body} at time: ${date}`)
    const response = await nodePool.send(
        API_ACTION_TYPES.GET_MY_DELEGATES,
        req.body
      );
      return res.send(response);
    }

  }
  export const delegatesController = new DelegatesController();
