# PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody


## Fields

| Field                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                                                                                                                                             | *boolean*                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | Whether the employee benefit is active.                                                                                                                                                                                                                                                              |
| `catchUp`                                                                                                                                                                                                                                                                                            | *boolean*                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | Whether the employee should use a benefit’s "catch up" rate. Only Roth 401k and 401k benefits use this value for employees over 50.                                                                                                                                                                  |
| ~~`companyContribution`~~                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The amount to be paid, per pay period, by the company.                                                                                                              |
| `companyContributionAnnualMaximum`                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | The maximum company contribution amount per year. A null value signifies no limit.                                                                                                                                                                                                                   |
| ~~`contributeAsPercentage`~~                                                                                                                                                                                                                                                                         | *boolean*                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Whether the company contribution amount should be treated as a percentage to be deducted from each payroll.                                                         |
| `contribution`                                                                                                                                                                                                                                                                                       | [PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContribution](../../models/operations/putv1employeebenefitsemployeebenefitidrequestbodycontribution.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | An object representing the type and value of the company contribution.                                                                                                                                                                                                                               |
| `coverageAmount`                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | The amount that the employee is insured for. Note: company contribution cannot be present if coverage amount is set.                                                                                                                                                                                 |
| `coverageSalaryMultiplier`                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | The coverage amount as a multiple of the employee’s salary. Only applicable for Group Term Life benefits. Note: cannot be set if coverage amount is also set.                                                                                                                                        |
| `deductAsPercentage`                                                                                                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | Whether the employee deduction amount should be treated as a percentage to be deducted from each payroll.                                                                                                                                                                                            |
| `deductionReducesTaxableIncome`                                                                                                                                                                                                                                                                      | [PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyDeductionReducesTaxableIncome](../../models/operations/putv1employeebenefitsemployeebenefitidrequestbodydeductionreducestaxableincome.md)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.                                                                                              |
| `elective`                                                                                                                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | Whether the company contribution is elective (aka "matching"). For `tiered`, `elective_amount`, and `elective_percentage` contribution types this is ignored and assumed to be `true`.                                                                                                               |
| `employeeDeduction`                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | The amount to be deducted, per pay period, from the employee's pay.                                                                                                                                                                                                                                  |
| `employeeDeductionAnnualMaximum`                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | The maximum employee deduction amount per year. A null value signifies no limit.                                                                                                                                                                                                                     |
| `limitOption`                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | Some benefits require additional information to determine their limit. For example, for an HSA benefit, the limit option should be either "Family" or "Individual". For a Dependent Care FSA benefit, the limit option should be either "Joint Filing or Single" or "Married and Filing Separately". |
| `version`                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.                                                                                                                        |