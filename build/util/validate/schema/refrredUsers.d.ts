export declare const getReferredUsers: {
    id: string;
    type: string;
    properties: {
        address: {
            type: string;
            format: string;
        };
        level: {
            type: string;
            minimum: number;
            maximum: number;
        };
    };
    required: string[];
};
