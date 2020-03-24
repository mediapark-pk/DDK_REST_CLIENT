import { Request, Response } from 'express';
export declare class BlockController {
    constructor();
    getById(req: Request, res: Response): Promise<Response>;
    getByHeight(req: Request, res: Response): Promise<Response>;
    getMany(req: Request, res: Response): Promise<Response>;
    getLast(_req: Request, res: Response): Promise<Response>;
}
export declare const blockController: BlockController;
