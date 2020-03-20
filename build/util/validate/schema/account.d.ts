export declare const getAccountScheme: {
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
export declare const getAccountBalanceScheme: {
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
export declare const createAccountScheme: {
    id: string;
    type: string;
    properties: {
        secret: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
