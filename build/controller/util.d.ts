import { Request, Response } from 'express';
export declare class UtilController {
    generatePassphrase(_req: Request, res: Response): Response;
    makeKeyPair(req: Request, res: Response): Response;
}
export declare const utilController: UtilController;
