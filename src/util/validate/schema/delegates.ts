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
        ...PAGINATION_SCHEME
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
        ...PAGINATION_SCHEME
    },
    required: ['address','limit', 'offset' ]
}


