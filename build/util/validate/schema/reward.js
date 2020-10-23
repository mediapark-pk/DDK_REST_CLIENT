"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagination_1 = require("./pagination");
exports.getStakeRewards = {
    id: "/api/reward/getStakeRewards",
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
                enum: { AIRDROP: "airdrop",
                    ARP: "arp" }
            }
        },
        ...pagination_1.PAGINATION_SCHEME
    },
    required: ['senderPublicKey', 'limit', 'offset']
};
exports.getReferredUsersRewards = {
    id: "/api/reward/getReferredUsersReward",
    type: 'object',
    properties: {
        address: {
            type: 'string',
            format: 'address'
        },
        ...pagination_1.PAGINATION_SCHEME
    },
    required: ['address', 'limit', 'offset']
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV3YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWwvdmFsaWRhdGUvc2NoZW1hL3Jld2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFpRDtBQUVwQyxRQUFBLGVBQWUsR0FBQztJQUN6QixFQUFFLEVBQUUsNkJBQTZCO0lBQ2pDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1IsZUFBZSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsV0FBVztTQUN0QjtRQUNELFlBQVksRUFBRTtZQUNWLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFO2dCQUNILElBQUksRUFBRSxRQUFRO2dCQUNkLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRyxTQUFTO29CQUMxQixHQUFHLEVBQUcsS0FBSyxFQUFDO2FBQ2Y7U0FDSjtRQUNELEdBQUcsOEJBQWlCO0tBQ3ZCO0lBQ0QsUUFBUSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztDQUNuRCxDQUFBO0FBRVksUUFBQSx1QkFBdUIsR0FBQztJQUNqQyxFQUFFLEVBQUUsb0NBQW9DO0lBQ3hDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1IsT0FBTyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsU0FBUztTQUNwQjtRQUNELEdBQUcsOEJBQWlCO0tBQ3ZCO0lBQ0QsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7Q0FDM0MsQ0FBQSJ9