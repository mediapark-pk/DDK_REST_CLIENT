"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAirdropRewardHistory = {
    id: "GET /api/airdrop/",
    type: "object",
    properties: {
        referralAddress: {
            type: "string",
            format: "address"
        },
        startTime: {
            type: "number"
        },
        endTime: {
            type: "number"
        }
    },
    required: ["referralAddress", "startTime", "endTime"]
};
exports.getAirdropRewardDailyHistory = {
    id: "GET /api/airdrop/:referralAddress",
    type: "object",
    properties: {
        referralAddress: {
            type: "string",
            format: "address"
        }
    },
    required: ["referralAddress"]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlyZHJvcEhpc3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbC92YWxpZGF0ZS9zY2hlbWEvYWlyZHJvcEhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLHVCQUF1QixHQUFHO0lBQ3JDLEVBQUUsRUFBRSxtQkFBbUI7SUFDdkIsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFDVixlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsUUFBUTtZQUNkLE1BQU0sRUFBRSxTQUFTO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxRQUFRO1NBQ2Y7S0FDRjtJQUNELFFBQVEsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUM7Q0FDdEQsQ0FBQztBQUVXLFFBQUEsNEJBQTRCLEdBQUc7SUFDMUMsRUFBRSxFQUFFLG1DQUFtQztJQUN2QyxJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNWLGVBQWUsRUFBRTtZQUNmLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLFNBQVM7U0FDbEI7S0FDRjtJQUNELFFBQVEsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0NBQzlCLENBQUMifQ==