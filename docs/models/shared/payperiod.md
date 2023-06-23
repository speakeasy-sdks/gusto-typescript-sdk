# PayPeriod

The representation of a pay period.


## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `eligibleEmployees`                                                               | [PayPeriodEligibleEmployees](../../models/shared/payperiodeligibleemployees.md)[] | :heavy_minus_sign:                                                                | The employees who are (or were) eligible during the pay period.                   |
| `endDate`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | The end date, inclusive, of the pay period.                                       |
| `payScheduleUuid`                                                                 | *string*                                                                          | :heavy_minus_sign:                                                                | A unique identifier of the pay schedule to which the pay period belongs.          |
| `payroll`                                                                         | [PayPeriodPayroll](../../models/shared/payperiodpayroll.md)                       | :heavy_minus_sign:                                                                | Information about the payroll for the pay period.                                 |
| `startDate`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | The start date, inclusive, of the pay period.                                     |