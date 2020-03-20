  import { PAGINATION_SCHEME } from "./pagination";

    export const getRounds={
        id: "/api/rounds/",
        type: 'object',
        properties: {
            ...PAGINATION_SCHEME
        },
        required: ['limit', 'offset']
    }

    export const getCurrentRoundDelegates={
        id: "/api/rounds/currentRoundDelegates",
        type: 'object',
        properties: {
            ...PAGINATION_SCHEME
        },
        required: ['limit', 'offset']
    }

    export const getRound={
        id: "/api/rounds/getRound",
        type: 'object',
        properties: {
            height: {
                type: 'integer',
                minimum: 1,
            },
            ...PAGINATION_SCHEME
        },
        required: ['height', 'limit', 'offset']
    }

    