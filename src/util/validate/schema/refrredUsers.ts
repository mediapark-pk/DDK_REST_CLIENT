export const getReferredUsers={
    
        id: "POST /api/referredUsers/",
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
    
}