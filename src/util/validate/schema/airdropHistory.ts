export const getAirdropRewardHistory = {
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

export const getAirdropRewardDailyHistory = {
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
