"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filter_1 = require("ddk.registry/dist/util/validate/scheme/filter");
exports.geBlockByIdScheme = {
    id: 'GET /api/blocks/:id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            format: 'id',
        },
    },
    required: ['id'],
};
exports.getblocksScheme = {
    id: 'POST /api/blocks/getMany',
    type: 'object',
    properties: {
        ...filter_1.PAGINATION_SCHEME,
    },
    required: ['limit', 'offset'],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbC92YWxpZGF0ZS9zY2hlbWEvYmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwRUFBa0Y7QUFFckUsUUFBQSxpQkFBaUIsR0FBRztJQUM3QixFQUFFLEVBQUUscUJBQXFCO0lBQ3pCLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1IsRUFBRSxFQUFFO1lBQ0EsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsSUFBSTtTQUNmO0tBQ0o7SUFDRCxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FDbkIsQ0FBQztBQUVXLFFBQUEsZUFBZSxHQUFHO0lBQzNCLEVBQUUsRUFBRSwwQkFBMEI7SUFDOUIsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFDUixHQUFHLDBCQUFpQjtLQUN2QjtJQUNELFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7Q0FDaEMsQ0FBQyJ9