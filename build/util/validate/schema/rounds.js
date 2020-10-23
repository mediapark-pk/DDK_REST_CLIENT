"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagination_1 = require("./pagination");
exports.getRounds = {
    id: "/api/rounds/",
    type: 'object',
    properties: {
        ...pagination_1.PAGINATION_SCHEME
    },
    required: ['limit', 'offset']
};
exports.getCurrentRoundDelegates = {
    id: "/api/rounds/currentRoundDelegates",
    type: 'object',
    properties: {
        ...pagination_1.PAGINATION_SCHEME
    },
    required: ['limit', 'offset']
};
exports.getRound = {
    id: "/api/rounds/getRound",
    type: 'object',
    properties: {
        height: {
            type: 'integer',
            minimum: 1,
        },
        ...pagination_1.PAGINATION_SCHEME
    },
    required: ['height', 'limit', 'offset']
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWwvdmFsaWRhdGUvc2NoZW1hL3JvdW5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFFLDZDQUFpRDtBQUVsQyxRQUFBLFNBQVMsR0FBQztJQUNuQixFQUFFLEVBQUUsY0FBYztJQUNsQixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNSLEdBQUcsOEJBQWlCO0tBQ3ZCO0lBQ0QsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztDQUNoQyxDQUFBO0FBRVksUUFBQSx3QkFBd0IsR0FBQztJQUNsQyxFQUFFLEVBQUUsbUNBQW1DO0lBQ3ZDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1IsR0FBRyw4QkFBaUI7S0FDdkI7SUFDRCxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0NBQ2hDLENBQUE7QUFFWSxRQUFBLFFBQVEsR0FBQztJQUNsQixFQUFFLEVBQUUsc0JBQXNCO0lBQzFCLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsR0FBRyw4QkFBaUI7S0FDdkI7SUFDRCxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztDQUMxQyxDQUFBIn0=