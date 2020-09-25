import { Request, Response } from 'express';
export declare class TransactionController {
    getById(req: Request, res: Response): Promise<Response>;
    getMany(req: Request, res: Response): import("express-serve-static-core").Response;
    create(req: Request, res: Response): Promise<Response>;
}
export declare const transactionController: TransactionController;
