export declare const geBlockByIdScheme: {
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
export declare const getblocksScheme: {
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
export declare const getblockByHeight: {
    id: string;
    type: string;
    properties: {
        height: {
            type: string;
            minimum: number;
        };
    };
    required: string[];
};
