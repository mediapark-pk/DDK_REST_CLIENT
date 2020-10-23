"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStakeAsset = {
    id: "POST /api/asset/createStakeAsset",
    type: "object",
    properties: {
        address: {
            type: "string",
            format: "address"
        },
        amount: {
            type: "integer",
            minimum: 100000000,
            maximum: 4500000000000000
        }
    },
    required: ["address", "amount"]
};
exports.createVoteAsset = {
    id: "POST /api/asset/createVoteAsset",
    type: "object",
    properties: {
        address: {
            type: "string",
            format: "address"
        },
        votes: {
            type: "array",
            items: {
                type: "string",
                format: "publicKey"
            },
            maxItems: 3
        },
        type: {
            type: "string",
            enum: ["+", "-"]
        },
        createdAt: {
            type: "integer"
        }
    },
    required: ["address", "votes", "type", "createdAt"]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRDcmVhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlsL3ZhbGlkYXRlL3NjaGVtYS9hc3NldENyZWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxnQkFBZ0IsR0FBRztJQUM5QixFQUFFLEVBQUUsa0NBQWtDO0lBQ3RDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsU0FBUztTQUNsQjtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQjtLQUNGO0lBQ0QsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztDQUNoQyxDQUFDO0FBRVcsUUFBQSxlQUFlLEdBQUc7SUFDN0IsRUFBRSxFQUFFLGlDQUFpQztJQUNyQyxJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLFNBQVM7U0FDbEI7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxNQUFNLEVBQUUsV0FBVzthQUNwQjtZQUNELFFBQVEsRUFBRSxDQUFDO1NBQ1o7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUztTQUNoQjtLQUNGO0lBQ0QsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDO0NBQ3BELENBQUMifQ==