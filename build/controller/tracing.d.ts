import { Request, Response } from "express";
export declare class TracingController {
    GetTracing(req: Request, res: Response): Promise<Response>;
}
export declare const tracingController: TracingController;
