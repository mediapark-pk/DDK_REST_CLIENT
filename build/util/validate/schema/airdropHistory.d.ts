export declare const getAirdropRewardHistory: {
    id: string;
    type: string;
    properties: {
        referralAddress: {
            type: string;
            format: string;
        };
        startTime: {
            type: string;
        };
        endTime: {
            type: string;
        };
    };
    required: string[];
};
export declare const getAirdropRewardDailyHistory: {
    id: string;
    type: string;
    properties: {
        referralAddress: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
