"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountScheme = {
    id: 'GET /api/accounts/:address',
    type: 'object',
    properties: {
        address: {
            type: 'string',
            format: 'address',
        },
    },
    required: ['address'],
};
exports.getAccountBalanceScheme = {
    id: 'GET /api/accounts/:address/balance',
    type: 'object',
    properties: {
        address: {
            type: 'string',
            format: 'address',
        },
    },
    required: ['address'],
};
exports.createAccountScheme = {
    id: 'POST /api/accounts/',
    type: 'object',
    properties: {
        secret: {
            type: 'string',
            format: 'secret',
        },
    },
    required: ['secret'],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlsL3ZhbGlkYXRlL3NjaGVtYS9hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxnQkFBZ0IsR0FBRztJQUM1QixFQUFFLEVBQUUsNEJBQTRCO0lBQ2hDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1IsT0FBTyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsU0FBUztTQUNwQjtLQUNKO0lBQ0QsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDO0NBQ3hCLENBQUM7QUFFVyxRQUFBLHVCQUF1QixHQUFHO0lBQ25DLEVBQUUsRUFBRSxvQ0FBb0M7SUFDeEMsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFDUixPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsUUFBUTtZQUNkLE1BQU0sRUFBRSxTQUFTO1NBQ3BCO0tBQ0o7SUFDRCxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUM7Q0FDeEIsQ0FBQztBQUVXLFFBQUEsbUJBQW1CLEdBQUc7SUFDL0IsRUFBRSxFQUFFLHFCQUFxQjtJQUN6QixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNSLE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLFFBQVE7U0FDbkI7S0FDSjtJQUNELFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztDQUN2QixDQUFDIn0=