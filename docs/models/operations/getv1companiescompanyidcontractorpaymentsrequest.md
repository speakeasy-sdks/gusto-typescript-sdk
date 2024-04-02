# GetV1CompaniesCompanyIdContractorPaymentsRequest


## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `companyId`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | The UUID of the company                                                                 |                                                                                         |
| `contractorUuid`                                                                        | *string*                                                                                | :heavy_minus_sign:                                                                      | The UUID of the contractor. When specified, will load all payments for that contractor. |                                                                                         |
| `endDate`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | The time period for which to retrieve contractor payments                               | 2020-12-31                                                                              |
| `groupByDate`                                                                           | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Display contractor payments results group by check date if set to true.                 |                                                                                         |
| `page`                                                                                  | *number*                                                                                | :heavy_minus_sign:                                                                      | The page that is requested. When unspecified, will load all objects.                    |                                                                                         |
| `per`                                                                                   | *number*                                                                                | :heavy_minus_sign:                                                                      | Number of objects per page. When unspecified, will default to 25                        |                                                                                         |
| `startDate`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | The time period for which to retrieve contractor payments                               | 2020-01-01                                                                              |