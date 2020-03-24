import { PAGINATION_SCHEME } from "./pagination";

export const getStakeRewards={
    id: "POST /api/reward/getStakeRewards",
    type: 'object',
    properties: {
        senderPublicKey: {
            type: 'string',
            format: 'publicKey'
        },
        airdropTypes: {
            type: 'array',
            items: {
                type: 'string',
                enum: ["airdrop","arp"]
            }
        },
        ...PAGINATION_SCHEME
    },
    required: ['senderPublicKey', 'limit', 'offset']
};

export const getReferredUsersRewards={
    id: "POST /api/reward/getReferredUsersReward",
    type: 'object',
    properties: {
        address: {
            type: 'string',
            format: 'address'
        },
        ...PAGINATION_SCHEME
    },
    required: ['address', 'limit', 'offset']
}

export const getAirDropRewards={
    id: "POST /api/reward/getAirdropRewards",
    type: 'object',
    properties: {
        address: {
            type: 'string',
            format: 'address'
        },
        ...PAGINATION_SCHEME
    },
    required: ['address', 'limit', 'offset']
}