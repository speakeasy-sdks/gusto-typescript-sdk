# PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContributionValue2

A single tier of a tiered matching scheme.


## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rate`                                                                                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                 | The percentage of employee deduction within this tier the company contribution will match.                                                                                                                                                                                                                                                                                         |
| `threshold`                                                                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                 | The percentage threshold at which this tier ends (inclusive).<br/><br/>For example, a value of "5" means the company contribution will match employee deductions from the previous tier's threshold up to and including 5% of payroll.<br/><br/>If this is the first tier, a value of "5" means the company contribution will match employee deductions from 0% up to and including 5% of payroll. |