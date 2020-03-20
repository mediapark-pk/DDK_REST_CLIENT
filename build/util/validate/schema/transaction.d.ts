export declare const getTransactionByIdScheme: {
    id: string;
    type: string;
    properties: {
        id: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
export declare const getTransactionsScheme: {
    id: string;
    type: string;
    properties: {
        limit: {
            type: string;
            format: string;
        };
        offset: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
export declare const createTransactionScheme: {
    id: string;
    type: string;
    properties: {
        transaction: {
            type: string;
            properties: {
                type: {
                    type: string;
                    enum: any[];
                };
                asset: {
                    type: string;
                };
            };
            required: string[];
        };
        secret: {
            type: string;
            format: string;
        };
        secondSecret: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
