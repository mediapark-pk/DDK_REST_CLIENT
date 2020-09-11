export declare const getBlockHistory: {
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
export declare const getAllUnconfirmedTransactions: {
    id: string;
    type: string;
    properties: {
        offset: {
            maximum: number;
            type: string;
            minimum: number;
        };
        limit: {
            type: string;
            minimum: number;
            maximum: number;
        };
    };
    required: string[];
};
export declare const getTransactionHistory: {
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
export declare const getAccountHistory: {
    id: string;
    type: string;
    properties: {
        address: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
