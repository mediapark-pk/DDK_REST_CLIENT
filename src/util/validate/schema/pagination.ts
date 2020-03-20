export const PAGINATION_SCHEME = {
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
};