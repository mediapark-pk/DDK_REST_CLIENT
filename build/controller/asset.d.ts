import { Request, Response } from "express";
export declare class AssetController {
    createStakeAsset(req: Request, res: Response): Promise<Response>;
    createVoteAsset(req: Request, res: Response): Promise<Response>;
}
export declare const assetController: AssetController;
