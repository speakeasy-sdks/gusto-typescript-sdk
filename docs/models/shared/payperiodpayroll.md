# PayPeriodPayroll

Information about the payroll for the pay period.


## Fields

| Field                                                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payrollDeadline`                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | The date by which payroll should be run for employees to be paid on time. Payroll data, such as time and attendance data, should be submitted on or before this date.                                                                                                                                                        |
| `processed`                                                                                                                                                                                                                                                                                                                  | *boolean*                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. Additionally, a payroll is not guaranteed to be processed just because the payroll deadline has passed. Late payrolls are not uncommon. Conversely, users may choose to run payroll before the payroll deadline. |