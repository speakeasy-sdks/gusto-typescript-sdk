# Earnings

An array of earnings for the employee. Depends on your company selections, earnings includes wages, hours, bonuses, tips, commission and more.


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `amount`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | The amount of the earning.                                              |
| `earningId`                                                             | *number*                                                                | :heavy_minus_sign:                                                      | The ID of the earning.                                                  |
| `earningType`                                                           | [operations.EarningType](../../../sdk/models/operations/earningtype.md) | :heavy_minus_sign:                                                      | The earning type for the compensation.                                  |
| `hours`                                                                 | *string*                                                                | :heavy_minus_sign:                                                      | The hour of the compensation for the pay period.                        |