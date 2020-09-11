export declare const getRounds: {
    id: string;
    type: string;
    properties: {
        limit: {
            type: string;
            minimum: number;
            maximum: number;
        };
        offset: {
            type: string;
            minimum: number;
            maximum: number;
        };
    };
    required: string[];
};
export declare const getCurrentRoundDelegates: {
    id: string;
    type: string;
    properties: {
        limit: {
            type: string;
            minimum: number;
            maximum: number;
        };
        offset: {
            type: string;
            minimum: number;
            maximum: number;
        };
    };
    required: string[];
};
export declare const getRound: {
    id: string;
    type: string;
    properties: {
        limit: {
            type: string;
            minimum: number;
            maximum: number;
        };
        offset: {
            type: string;
            minimum: number;
            maximum: number;
        };
        height: {
            type: string;
            minimum: number;
        };
    };
    required: string[];
};
