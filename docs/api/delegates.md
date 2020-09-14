# DELEGATES

## GET Delegates

Request for getting blockchain information.

Method URL: `/api/delegates`

HTTP method: `POST`

Body parameters

| Parameter | Is Required | Description             |
|-----------|-------------|-------------------------|
| offset    | +           | Integer                 |
| limit     | +           | Integer                 |

Response

| Parameter | Type                                            | Description                      |
|-----------|-------------------------------------------------|----------------------------------|
| success   | boolean                                         | Operation status                 |
| data      | [Delegates ](../models.md#delegate)             | Delegates information            |

### GET Delegates EXAMPLES

Successful response

```json
{
    "success": true,
    "data": {
        "delegates": [
            {
                "username": "sd_ddk_brunei17",
                "missedBlocks": 280,
                "forgedBlocks": 34085,
                "publicKey": "1b4946c967ee5c9803bc86f89a816cecab3002cea792634c1da01c6b51e717f0",
                "votes": 109183,
                "confirmedVoteCount": 109183,
                "approval": 99.19
            }
        ]
    }
}
```
## GET Active Delegates

Request for getting blockchain information.

Method URL: `/api/delegates/activeDelegates`

HTTP method: `POST`

Body parameters

| Parameter | Is Required | Description             |
|-----------|-------------|-------------------------|
| offset    | +           | Integer                 |
| limit     | +           | Integer                 |

Response

| Parameter | Type                                            | Description                      |
|-----------|-------------------------------------------------|----------------------------------|
| success   | boolean                                         | Operation status                 |
| data      | [Delegates ](../models.md#delegate)             | Delegates information            |

### GET Active Delegates EXAMPLES

Successful response

```json
{
    "success": true,
    "data": {
        "delegates": [
            {
                "username": "TDALLIANCE1",
                "missedBlocks": 2285,
                "forgedBlocks": 61396,
                "publicKey": "276f0d09e64b68566fb458b7c71aeb62411d0b633ad6c038e5a4a042ec588af9",
                "votes": 269021,
                "confirmedVoteCount": 269021,
                "approval": 96.41
            },
            {
                "username": "TDALLIANCE2",
                "missedBlocks": 2954,
                "forgedBlocks": 60728,
                "publicKey": "3f0348b6d3ecaeaeca0a05ee4c2d7b4b7895ef0a12d8023ba245b6b8022833e5",
                "votes": 258549,
                "confirmedVoteCount": 258549,
                "approval": 95.36
            },
            {
                "username": "TDALLIANCE3",
                "missedBlocks": 2467,
                "forgedBlocks": 61215,
                "publicKey": "3f1ecf6de517a6bf2f5c7a8226a478dc571ed0100d53ee104842f4d443e49806",
                "votes": 254802,
                "confirmedVoteCount": 254802,
                "approval": 96.13
            }
        ]
    }
}
```
## GET My Delegates

Request for getting blockchain information.

Method URL: `/api/delegates/myDelegates`

HTTP method: `POST`

Body parameters

| Parameter | Is Required | Description             |
|-----------|-------------|-------------------------|
| offset    | +           | Integer                 |
| limit     | +           | Integer                 |
| address   | +           | String                  |

Response

| Parameter | Type                                            | Description                      |
|-----------|-------------------------------------------------|----------------------------------|
| success   | boolean                                         | Operation status                 |
| data      | [Delegates ](../models.md#delegate)             | Delegates information            |

### GET Active Delegates EXAMPLES

Successful response

```json
{
    "success": true,
    "data": {
        "delegates": [
            {
                "username": "TDALLIANCE1",
                "missedBlocks": 2285,
                "forgedBlocks": 61397,
                "publicKey": "276f0d09e64b68566fb458b7c71aeb62411d0b633ad6c038e5a4a042ec588af9",
                "votes": 269024,
                "confirmedVoteCount": 269024,
                "approval": 96.41
            },
            {
                "username": "TDALLIANCE2",
                "missedBlocks": 2954,
                "forgedBlocks": 60729,
                "publicKey": "3f0348b6d3ecaeaeca0a05ee4c2d7b4b7895ef0a12d8023ba245b6b8022833e5",
                "votes": 258551,
                "confirmedVoteCount": 258551,
                "approval": 95.36
            }
        ]
    }
}
```