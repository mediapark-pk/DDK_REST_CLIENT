import { Request, Response } from "express";
export declare class RoundController {
    GetCurrentRound(req: Request, res: Response): Promise<Response>;
    getCurrentRoundDelegates(req: Request, res: Response): Promise<Response>;
    getRounds(req: Request, res: Response): Promise<Response>;
    getRound(req: Request, res: Response): Promise<Response>;
}
export declare const roundController: RoundController;
