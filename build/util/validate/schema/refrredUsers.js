"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferredUsers = {
    id: "/api/referredusers/",
    type: 'object',
    properties: {
        address: {
            type: 'string',
            format: 'address'
        },
        level: {
            type: 'number',
            minimum: 0,
            maximum: 15
        }
    },
    required: ['address', 'level']
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmcnJlZFVzZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWwvdmFsaWRhdGUvc2NoZW1hL3JlZnJyZWRVc2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsZ0JBQWdCLEdBQUM7SUFFdEIsRUFBRSxFQUFFLHFCQUFxQjtJQUN6QixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLFNBQVM7U0FDcEI7UUFDRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLEVBQUU7U0FDZDtLQUNKO0lBQ0QsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQztDQUVyQyxDQUFBIn0=