  import { PAGINATION_SCHEME } from "./pagination";

    export const getRounds={
        id: "POST /api/rounds/",
        type: 'object',
        properties: {
            ...PAGINATION_SCHEME
        },
        required: ['limit', 'offset']
    }

    export const getCurrentRoundDelegates={
        id: "POST /api/rounds/currentRoundDelegates",
        type: 'object',
        properties: {
            ...PAGINATION_SCHEME
        },
        required: ['limit', 'offset']
    }

    export const getRound={
        id: "POST /api/rounds/getRound",
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

    