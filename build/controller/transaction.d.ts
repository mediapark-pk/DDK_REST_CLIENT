import { Request, Response } from 'express';
export declare class TransactionController {
    getById(req: Request, res: Response): Promise<Response>;
    getMany(req: Request, res: Response): void;
    create(req: Request, res: Response): Promise<Response>;
}
export declare const transactionController: TransactionController;
