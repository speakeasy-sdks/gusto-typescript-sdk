# CurrentUserRolesPayrollAdminCompanies


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `isPartnerManaged`                                            | *boolean*                                                     | :heavy_minus_sign:                                            | Whether the company is fully managed by a partner via the API |
| `locations`                                                   | [CompanyAddress](../../models/shared/companyaddress.md)[]     | :heavy_minus_sign:                                            | A list of the company locations.                              |
| `name`                                                        | *string*                                                      | :heavy_minus_sign:                                            | The name of the company.                                      |
| `tier`                                                        | *string*                                                      | :heavy_minus_sign:                                            | The tier of the company.                                      |
| `tradeName`                                                   | *string*                                                      | :heavy_minus_sign:                                            | The trade name of the company.                                |
| `uuid`                                                        | *string*                                                      | :heavy_minus_sign:                                            | The UUID of the company.                                      |