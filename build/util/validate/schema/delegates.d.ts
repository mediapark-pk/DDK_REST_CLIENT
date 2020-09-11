export declare const getDelegates: {
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
        username: {
            type: string;
            minLength: number;
        };
        sort: {
            type: string;
            items: {
                type: string;
                items: {
                    type: string;
                    enum: string[];
                };
            };
        };
    };
    required: string[];
};
export declare const getActiveDelegates: {
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
export declare const getMyDelgates: {
    id: string;
    type: string;
    properties: {
        address: {
            type: string;
            format: string;
        };
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
