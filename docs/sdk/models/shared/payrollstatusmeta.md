# PayrollStatusMeta

Information about the payroll's status and expected dates


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `cancellable`                                                                   | *boolean*                                                                       | :heavy_minus_sign:                                                              | true if the payroll may be cancelled                                            |
| `expectedCheckDate`                                                             | *string*                                                                        | :heavy_minus_sign:                                                              | The date an employee will be paid if the payroll is submitted now               |
| `expectedDebitTime`                                                             | *string*                                                                        | :heavy_minus_sign:                                                              | The time the employer's account will be debited if the payroll is submitted now |
| `initialCheckDate`                                                              | *string*                                                                        | :heavy_minus_sign:                                                              | The normal check date for the associated pay period                             |
| `initialDebitCutoffTime`                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | Payroll must be submitted at or before this time to avoid late payroll          |
| `payrollLate`                                                                   | *boolean*                                                                       | :heavy_minus_sign:                                                              | expected_check_date > initial_check_date                                        |