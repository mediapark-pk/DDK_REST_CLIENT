import { Request, Response } from 'express';
export declare class BlockController {
    constructor();
    getById(req: Request, res: Response): Promise<Response>;
    getMany(req: Request, res: Response): void;
    getLast(_req: Request, res: Response): Promise<Response>;
}
export declare const blockController: BlockController;
