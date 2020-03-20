export const createStakeAsset = {
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

export const createVoteAsset = {
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
