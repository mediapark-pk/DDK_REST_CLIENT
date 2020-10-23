"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagination_1 = require("./pagination");
exports.getBlockHistory = {
    id: 'GET /api/system/blockHistory:/id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            format: 'id'
        },
    },
    required: ['id']
};
exports.getAllUnconfirmedTransactions = {
    id: "GET /api/system/getUnconfirmedTransactionHistory",
    type: 'object',
    properties: {
        ...pagination_1.PAGINATION_SCHEME,
        offset: {
            ...pagination_1.PAGINATION_SCHEME.offset,
            maximum: 100000,
        },
    },
    required: ['limit', 'offset']
};
exports.getTransactionHistory = {
    id: "GET /api/system/getTransactionHistiory",
    type: 'object',
    properties: {
        id: {
            type: 'string',
            format: 'id'
        },
    },
    required: ['id']
};
exports.getAccountHistory = {
    id: "GET /api/system/getAccountHistory",
    type: 'object',
    properties: {
        address: {
            type: 'string',
            format: 'address',
        }
    },
    required: ['address'],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWwvdmFsaWRhdGUvc2NoZW1hL3N5c3RlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFnRDtBQUVuQyxRQUFBLGVBQWUsR0FBQztJQUVyQixFQUFFLEVBQUUsa0NBQWtDO0lBQ3RDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1IsRUFBRSxFQUFFO1lBQ0EsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsSUFBSTtTQUNmO0tBQ0o7SUFDRCxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FFdkIsQ0FBQTtBQUVZLFFBQUEsNkJBQTZCLEdBQzFDO0lBQ0ksRUFBRSxFQUFFLGtEQUFrRDtJQUN0RCxJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNSLEdBQUcsOEJBQWlCO1FBQ3BCLE1BQU0sRUFBRTtZQUNKLEdBQUcsOEJBQWlCLENBQUMsTUFBTTtZQUMzQixPQUFPLEVBQUUsTUFBTTtTQUNsQjtLQUNKO0lBQ0QsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztDQUNoQyxDQUFBO0FBRVksUUFBQSxxQkFBcUIsR0FDbEM7SUFDSSxFQUFFLEVBQUUsd0NBQXdDO0lBQzVDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1IsRUFBRSxFQUFFO1lBQ0EsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsSUFBSTtTQUNmO0tBQ0o7SUFDRCxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FDbkIsQ0FBQTtBQUVZLFFBQUEsaUJBQWlCLEdBQzlCO0lBQ0ksRUFBRSxFQUFFLG1DQUFtQztJQUN2QyxJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLFNBQVM7U0FDcEI7S0FDSjtJQUNELFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQztDQUN4QixDQUFBIn0=