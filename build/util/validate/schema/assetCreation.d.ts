export declare const createStakeAsset: {
    id: string;
    type: string;
    properties: {
        address: {
            type: string;
            format: string;
        };
        amount: {
            type: string;
            minimum: number;
            maximum: number;
        };
    };
    required: string[];
};
export declare const createVoteAsset: {
    id: string;
    type: string;
    properties: {
        address: {
            type: string;
            format: string;
        };
        votes: {
            type: string;
            items: {
                type: string;
                format: string;
            };
            maxItems: number;
        };
        type: {
            type: string;
            enum: string[];
        };
        createdAt: {
            type: string;
        };
    };
    required: string[];
};
