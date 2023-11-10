# CompanyCustomField

A custom field on a company


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `description`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Description of the company custom field                                 |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | Name of the company custom field                                        |
| `selectionOptions`                                                      | *string*[]                                                              | :heavy_minus_sign:                                                      | An array of options for fields of type radio. Otherwise, null.          |
| `type`                                                                  | [shared.CustomFieldType](../../../sdk/models/shared/customfieldtype.md) | :heavy_check_mark:                                                      | Input type for the custom field.                                        |
| `uuid`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | UUID of the company custom field                                        |