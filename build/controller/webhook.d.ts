import { Request, Response } from 'express';
export declare class WebhookController {
    onConfirmTransaction(req: Request, res: Response): Promise<Response>;
}
export declare const webhookController: WebhookController;
