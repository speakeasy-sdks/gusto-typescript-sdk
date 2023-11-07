# PostV1PlaidProcessorTokenRequestBody


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ownerId`                                                    | *string*                                                     | :heavy_check_mark:                                           | The owner uuid of the bank account                           |
| `ownerType`                                                  | [operations.OwnerType](../../models/operations/ownertype.md) | :heavy_check_mark:                                           | The owner type of the bank account                           |
| `processorToken`                                             | *string*                                                     | :heavy_check_mark:                                           | The Plaid processor token                                    |