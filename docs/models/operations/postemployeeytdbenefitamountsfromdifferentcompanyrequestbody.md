# PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequestBody


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `benefitType`                                                           | *number*                                                                | :heavy_minus_sign:                                                      | The benefit type supported by Gusto.                                    |
| `taxYear`                                                               | *number*                                                                | :heavy_check_mark:                                                      | The tax year for which this amount applies.                             |
| `ytdCompanyContributionAmount`                                          | *string*                                                                | :heavy_check_mark:                                                      | The year-to-date company contribution made outside the current company. |
| `ytdEmployeeDeductionAmount`                                            | *string*                                                                | :heavy_check_mark:                                                      | The year-to-date employee deduction made outside the current company.   |