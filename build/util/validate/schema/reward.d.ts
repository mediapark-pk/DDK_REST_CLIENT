export declare const getStakeRewards: {
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
        senderPublicKey: {
            type: string;
            format: string;
        };
        airdropTypes: {
            type: string;
            items: {
                type: string;
                enum: {
                    AIRDROP: string;
                    ARP: string;
                };
            };
        };
    };
    required: string[];
};
export declare const getReferredUsersRewards: {
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
        address: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
