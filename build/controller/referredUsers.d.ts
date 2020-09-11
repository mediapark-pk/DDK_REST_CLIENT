import { Request, Response } from "express";
export declare class ReferredUsersController {
    getReferedUsers(req: Request, res: Response): Promise<Response>;
}
export declare const referredUsersController: ReferredUsersController;
