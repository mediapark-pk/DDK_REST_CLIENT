import { Request, Response } from "express";
export declare class DelegatesController {
    getDelegates(req: Request, res: Response): Promise<Response>;
    getActiveDelegates(req: Request, res: Response): Promise<Response>;
    getMydelegates(req: Request, res: Response): Promise<Response>;
}
export declare const delegatesController: DelegatesController;
