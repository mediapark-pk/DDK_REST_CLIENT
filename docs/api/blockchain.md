# BLOCKCHAIN

## GET INFO

Request for getting blockchain information.

Method URL: `/api/blockchain/info`

HTTP method: `GET`

Response

| Parameter | Type                                            | Description                      |
|-----------|-------------------------------------------------|----------------------------------|
| success   | boolean                                         | Operation status                 |
| data      | [Blockchain Info](../model.md#blockchain-info) | Blockchain information           |

### GET INFO EXAMPLES

Successful response

```json
{
    "success": true,
    "data": {
        "airdropBalance": 89547337500000,
        "totalSupply": 4500000000000000,
        "circulatingSupply": 928013305770000,
        "tokenHolders": 30,
        "totalStakeAmount": 4520900000000,
        "totalStakeHolders": 4,
        "transactionsCount": 965139
    }
}
```

## GET CirculatingSupply

Request for getting blockchain information.

Method URL: `/api/blockchain/circulatingSupply`

HTTP method: `GET`

Response

| Parameter | Type                                            | Description                      |
|-----------|-------------------------------------------------|----------------------------------|
| success   | boolean                                         | Operation status                 |
| data      | [Blockchain Info](../model.md#blockchain-info) | Blockchain information           |

### GET CirculatingSupply EXAMPLES

Successful response

```json
{
    "success": true,
    "data": {
       "circulatingSupply": 928013305770000,
       }
}
```
## GET TotalSupply

Request for getting blockchain information.

Method URL: `/api/blockchain/totalSupply`

HTTP method: `GET`

Response

| Parameter | Type                                            | Description                      |
|-----------|-------------------------------------------------|----------------------------------|
| success   | boolean                                         | Operation status                 |
| data      | [Blockchain Info](../model.md#blockchain-info) | Blockchain information           |

### GET CirculatingSupply EXAMPLES

Successful response

```json
{
    "success": true,
    "data": {
      "totalSupply": 4500000000000000
       }
}
```
