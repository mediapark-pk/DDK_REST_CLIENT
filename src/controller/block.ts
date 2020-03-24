import { Request, Response } from 'express';
import { API_ACTION_TYPES } from 'ddk.registry/dist/model/transport/code';
import { Block } from 'ddk.registry/dist/model/common/block';

import { validate } from 'src/util/validate';
import { nodePool } from 'src/service';

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

    async getByHeight(req: Request, res: Response): Promise<Response> {
        req.params.height=parseInt(req.params.height)
        const response = await nodePool
            .send<{ height: number }, Block>(API_ACTION_TYPES.GET_BLOCK_BY_HEIGHT, req.params);

        return res.send(response);
    }

    @validate
    async getMany(req: Request, res: Response): Promise<Response> {
        const response = await nodePool
            .send(API_ACTION_TYPES.GET_BLOCKS, req.body);

        return res.send(response);
    }

    async getLast(_req: Request, res: Response): Promise<Response> {
        const response = await nodePool
            .send(API_ACTION_TYPES.GET_LAST_BLOCK, {});

        return res.send(response);
    }
}

export const blockController = new BlockController();
