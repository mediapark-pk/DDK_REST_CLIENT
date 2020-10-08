import { Request, Response } from 'express';
export declare class BlockController {
    constructor();
    getById(req: Request, res: Response): Promise<Response>;
    getMany(req: Request, res: Response): Promise<import("express-serve-static-core").Response>;
    getLast(_req: Request, res: Response): Promise<Response>;
    getFees(_req: Request, res: Response): Promise<Response>;
}
export declare const blockController: BlockController;
