# GetV1BenefitsCompanyBenefitIdSummaryRequest


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyBenefitId`                                           | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company benefit                              |                                                              |
| `detailed`                                                   | *boolean*                                                    | :heavy_minus_sign:                                           | Display employee payroll item summary                        |                                                              |
| `endDate`                                                    | *string*                                                     | :heavy_minus_sign:                                           | The end date for which to retrieve company benefit summary   | 2022-12-31                                                   |
| `startDate`                                                  | *string*                                                     | :heavy_minus_sign:                                           | The start date for which to retrieve company benefit summary | 2022-01-01                                                   |