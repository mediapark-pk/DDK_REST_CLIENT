import { Request, Response } from 'express';
export declare const validate: (_target: any, _propertyName: string, descriptor: PropertyDescriptor) => {
    value: (req: Request, res: Response) => any;
};
