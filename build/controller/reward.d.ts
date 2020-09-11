import { Request, Response } from "express";
export declare class RewardController {
    getStakeRewards(req: Request, res: Response): Promise<Response>;
    getReferredUsersRewards(req: Request, res: Response): Promise<Response>;
}
export declare const rewardController: RewardController;
