# EmployeeBenefits


## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                  | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Whether the employee benefit is active.                                                                   |
| `companyBenefitUuid`                                                                                      | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The UUID of the company to which the benefit belongs.                                                     |
| `companyContribution`                                                                                     | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The value of the company contribution                                                                     |
| `contribution`                                                                                            | [shared.CompanyBenefitContribution](../../../sdk/models/shared/companybenefitcontribution.md)             | :heavy_minus_sign:                                                                                        | An object representing the type and value of the company contribution.                                    |
| `deductAsPercentage`                                                                                      | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Whether the employee deduction amount should be treated as a percentage to be deducted from each payroll. |
| `employeeDeduction`                                                                                       | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The amount to be deducted, per pay period, from the employee's pay.                                       |
| `employeeUuid`                                                                                            | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The UUID of the employee to which the benefit belongs.                                                    |
| `uuid`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |