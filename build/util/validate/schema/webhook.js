"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onConfirmTransaction = {
    id: 'POST /api/webhook/subscribe/confirm-transaction',
    type: 'object',
    properties: {
        transactionId: {
            type: 'string',
            format: 'id',
        },
        url: {
            type: 'string',
        },
    },
    required: ['url', 'transactionId'],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViaG9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlsL3ZhbGlkYXRlL3NjaGVtYS93ZWJob29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxvQkFBb0IsR0FBRztJQUNoQyxFQUFFLEVBQUUsaURBQWlEO0lBQ3JELElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1IsYUFBYSxFQUFFO1lBQ1gsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsSUFBSTtTQUNmO1FBQ0QsR0FBRyxFQUFFO1lBQ0QsSUFBSSxFQUFFLFFBQVE7U0FDakI7S0FDSjtJQUNELFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUM7Q0FDckMsQ0FBQyJ9