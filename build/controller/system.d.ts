import { Request, Response } from 'express';
export declare class SystemController {
    getInfo(_req: Request, res: Response): Response;
    getAccountHistory(req: Request, res: Response): Promise<Response>;
    getBlockHistory(req: Request, res: Response): Promise<Response>;
    getTransactionHistory(req: Request, res: Response): Promise<Response>;
    GET_ALL_UNCONFIRMED_TRANSACTIONS: any;
    getAllUnconfirmedTransactions(req: Request, res: Response): Promise<Response>;
}
export declare const systemController: SystemController;
