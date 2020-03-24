import { PAGINATION_SCHEME } from "./pagination"

export const getBlockHistory={
    
        id: 'GET /api/system/:id',
        type: 'object',
        properties: {
            id: {
                type: 'string',
                format: 'id'
            },
        },
        required: ['id']
    
}

export const getAllUnconfirmedTransactions= 
{
    id: "POST /api/system/getUnconfirmedTransactionHistory",
    type: 'object',
    properties: {
        ...PAGINATION_SCHEME,
        offset: {
            ...PAGINATION_SCHEME.offset,
            maximum: 100000,
        },
    },
    required: ['limit', 'offset']
}

export const getTransactionHistory= 
{
    id: "GET /api/system/getTransactionHistiory/:id",
    type: 'object',
    properties: {
        id: {
            type: 'string',
            format: 'id'
        },
    },
    required: ['id']
}

export const getAccountHistory=
{
    id: "GET /api/system/getAccountHistory/:address",
    type: 'object',
    properties: {
        address: {
            type: 'string',
            format: 'address',
        }
    },
    required: ['address'],
}

