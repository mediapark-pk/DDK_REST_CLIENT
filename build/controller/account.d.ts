import { Request, Response } from 'express';
export declare class AccountController {
    create(req: Request, res: Response): Promise<Response>;
    get(req: Request, res: Response): Promise<Response>;
    getBalance(req: Request, res: Response): Promise<Response>;
}
export declare const accountController: AccountController;
