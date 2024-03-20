# PaymentSpeedChanged

Only applicable when a payroll is moved to four day processing instead of fast ach.


## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `currentCheckDate`                               | *string*                                         | :heavy_minus_sign:                               | Current check date.                              |
| `currentDebitDate`                               | *string*                                         | :heavy_minus_sign:                               | Current check date.                              |
| `originalCheckDate`                              | *string*                                         | :heavy_minus_sign:                               | Original check date when fast ach applies.       |
| `originalDebitDate`                              | *number*                                         | :heavy_minus_sign:                               | Original debit date when fast ach applies.       |
| `reason`                                         | *string*                                         | :heavy_minus_sign:                               | The reason why the payroll is moved to four day. |