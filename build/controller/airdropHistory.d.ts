import { Request, Response } from "express";
export declare class AirdropHistoryController {
    getHistory(req: Request, res: Response): Promise<Response>;
    getAirdropDailyHistory(req: Request, res: Response): Promise<Response>;
}
export declare const airdropHistoryController: AirdropHistoryController;
