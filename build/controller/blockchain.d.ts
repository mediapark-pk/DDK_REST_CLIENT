import { Request, Response } from 'express';
export declare class BlockchainController {
    getInfo(_req: Request, res: Response): Response;
    getCirulatingSupply(_req: Request, res: Response): Response;
    getTotalSupply(_req: Request, res: Response): Response;
}
export declare const blockchainController: BlockchainController;
