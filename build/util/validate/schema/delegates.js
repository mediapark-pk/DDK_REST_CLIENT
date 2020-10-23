"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagination_1 = require("./pagination");
exports.getDelegates = {
    id: 'POST /api/delegates/',
    type: 'object',
    properties: {
        username: {
            type: 'string',
            minLength: 3,
        },
        sort: {
            type: 'array',
            items: {
                type: 'array',
                items: {
                    type: 'string',
                    enum: ['ASC', 'DESC', 'approval', 'publicKey', 'votes', 'username'],
                },
            },
        },
        ...pagination_1.PAGINATION_SCHEME
    },
    required: ['limit', 'offset'],
};
exports.getActiveDelegates = {
    id: 'POST /api/delegates/activeDelegates',
    type: 'object',
    properties: {
        limit: {
            type: 'integer',
            minimum: 1,
            maximum: 100
        },
        offset: {
            type: 'integer',
            minimum: 0,
            maximum: 1000,
        }
    },
    required: ['limit', 'offset']
};
exports.getMyDelgates = {
    id: 'POST /api/delegates/myDelegates',
    type: 'object',
    properties: {
        address: {
            type: 'string',
            format: 'address'
        },
        limit: {
            type: 'integer',
            minimum: 1,
            maximum: 100
        },
        offset: {
            type: 'integer',
            minimum: 0,
            maximum: 1000,
        }
    },
    required: ['address', 'limit', 'offset']
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZWdhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWwvdmFsaWRhdGUvc2NoZW1hL2RlbGVnYXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFnRDtBQUVuQyxRQUFBLFlBQVksR0FDekI7SUFDSSxFQUFFLEVBQUUsc0JBQXNCO0lBQzFCLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1IsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLFFBQVE7WUFDZCxTQUFTLEVBQUUsQ0FBQztTQUNmO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFO29CQUNILElBQUksRUFBRSxRQUFRO29CQUNkLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO2lCQUN0RTthQUNKO1NBQ0o7UUFDRCxHQUFHLDhCQUFpQjtLQUN2QjtJQUNELFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7Q0FDaEMsQ0FBQTtBQUVZLFFBQUEsa0JBQWtCLEdBQUM7SUFDNUIsRUFBRSxFQUFFLHFDQUFxQztJQUN6QyxJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsR0FBRztTQUNmO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxJQUFJO1NBQ2hCO0tBQ0o7SUFDRCxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0NBQ2hDLENBQUE7QUFFWSxRQUFBLGFBQWEsR0FBQztJQUN2QixFQUFFLEVBQUUsaUNBQWlDO0lBQ3JDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBRVIsT0FBTyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsU0FBUztTQUNwQjtRQUNELEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsR0FBRztTQUNmO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxJQUFJO1NBQ2hCO0tBQ0o7SUFDRCxRQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBRTtDQUMzQyxDQUFBIn0=