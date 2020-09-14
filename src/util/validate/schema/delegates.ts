import { PAGINATION_SCHEME } from "./pagination"

export const getDelegates=
{
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
        ...PAGINATION_SCHEME
    },
    required: ['limit', 'offset'],
}

export const getActiveDelegates={
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
}

export const getMyDelgates={
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
    required: ['address','limit', 'offset' ]
}


