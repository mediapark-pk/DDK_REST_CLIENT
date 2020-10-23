"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("ddk.registry/dist/model/common/transaction/type");
const filter_1 = require("ddk.registry/dist/util/validate/scheme/filter");
exports.getTransactionByIdScheme = {
    id: 'GET /api/transactions/:id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            format: 'id',
        },
    },
    required: ['id'],
};
exports.getTransactionsScheme = {
    id: 'POST /api/transactions/getMany',
    type: 'object',
    properties: {
        ...filter_1.PAGINATION_SCHEME,
    },
    required: ['limit', 'offset'],
};
exports.createTransactionScheme = {
    id: 'POST /api/transactions/',
    type: 'object',
    properties: {
        transaction: {
            type: 'object',
            properties: {
                type: {
                    type: 'integer',
                    enum: Object.values(type_1.TransactionType),
                },
                asset: {
                    type: 'object',
                },
            },
            required: ['type', 'asset'],
        },
        secret: {
            type: 'string',
            format: 'secret',
        },
        secondSecret: {
            type: 'string',
            format: 'secret',
        },
    },
    required: ['transaction', 'secret'],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbC92YWxpZGF0ZS9zY2hlbWEvdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwRUFBa0Y7QUFDbEYsMEVBQWtGO0FBRXJFLFFBQUEsd0JBQXdCLEdBQUc7SUFDcEMsRUFBRSxFQUFFLDJCQUEyQjtJQUMvQixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNSLEVBQUUsRUFBRTtZQUNBLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLElBQUk7U0FDZjtLQUNKO0lBQ0QsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO0NBQ25CLENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ2pDLEVBQUUsRUFBRSxnQ0FBZ0M7SUFDcEMsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFDUixHQUFHLDBCQUFpQjtLQUN2QjtJQUNELFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7Q0FDaEMsQ0FBQztBQUVXLFFBQUEsdUJBQXVCLEdBQUc7SUFDbkMsRUFBRSxFQUFFLHlCQUF5QjtJQUM3QixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNSLFdBQVcsRUFBRTtZQUNULElBQUksRUFBRSxRQUFRO1lBQ2QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRTtvQkFDRixJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxzQkFBZSxDQUFDO2lCQUN2QztnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsSUFBSSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0o7WUFDRCxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1NBQzlCO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsUUFBUTtTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLFFBQVE7U0FDbkI7S0FDSjtJQUNELFFBQVEsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7Q0FDdEMsQ0FBQyJ9