# taxRequirements

### Available Operations

* [getV1CompaniesCompanyUuidTaxRequirements](#getv1companiescompanyuuidtaxrequirements) - Get All Tax Requirement States
* [getV1CompaniesCompanyUuidTaxRequirementsState](#getv1companiescompanyuuidtaxrequirementsstate) - Get State Tax Requirements
* [putV1CompaniesCompanyUuidTaxRequirementsState](#putv1companiescompanyuuidtaxrequirementsstate) - Update State Tax Requirements

## getV1CompaniesCompanyUuidTaxRequirements

Returns objects describing the states that have tax requirements for the company

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyUuidTaxRequirementsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.taxRequirements.getV1CompaniesCompanyUuidTaxRequirements({
  companyUuid: "tempora",
}).then((res: GetV1CompaniesCompanyUuidTaxRequirementsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.GetV1CompaniesCompanyUuidTaxRequirementsRequest](../../models/operations/getv1companiescompanyuuidtaxrequirementsrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.GetV1CompaniesCompanyUuidTaxRequirementsResponse](../../models/operations/getv1companiescompanyuuidtaxrequirementsresponse.md)>**


## getV1CompaniesCompanyUuidTaxRequirementsState

Get all tax requirements for a given state.

### Metadata Examples

```json select
{
  "type": "select",
  "options": [
    { "label": "Semiweekly",  value: "Semi-weekly" },
    { "label": "Monthly",  value: "Monthly" },
    { "label": "Quarterly",  value: "Quarterly" },
  ]
}
```
```json radio
{
  "type": "radio",
  "options": [
    { "label": "No, we cannot reimburse",  value: false, short_label: "Not Reimbursable" },
    { "label": "Yes, we can reimburse",  value: true, short_label: "Reimbursable" },
  ]
}
```
```json account_number
{
  "type": "account_number",
  "mask": "######-##',
  "prefix": null
}
```
```json tax_rate
{
  "type": "tax_rate",
  "validation": {
    "type": "min_max",
    "min": "0.0004",
    "max": "0.081"
  }
}
```


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyUuidTaxRequirementsStateResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  TaxRequirementMetadataRateType,
  TaxRequirementMetadataType,
  TaxRequirementMetadataValidationType,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.taxRequirements.getV1CompaniesCompanyUuidTaxRequirementsState({
  companyUuid: "nihil",
  scheduling: false,
  state: "molestiae",
}).then((res: GetV1CompaniesCompanyUuidTaxRequirementsStateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest](../../models/operations/getv1companiescompanyuuidtaxrequirementsstaterequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetV1CompaniesCompanyUuidTaxRequirementsStateResponse](../../models/operations/getv1companiescompanyuuidtaxrequirementsstateresponse.md)>**


## putV1CompaniesCompanyUuidTaxRequirementsState

Update State Tax Requirements

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompaniesCompanyUuidTaxRequirementsStateResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.taxRequirements.putV1CompaniesCompanyUuidTaxRequirementsState({
  requestBody: {
    requirementSets: [
      {
        effectiveFrom: "iusto",
        key: "esse",
        requirements: [
          {
            key: "maiores",
            value: "reiciendis",
          },
          {
            key: "vel",
            value: "architecto",
          },
          {
            key: "fugiat",
            value: "doloremque",
          },
        ],
        state: "dicta",
      },
    ],
  },
  companyUuid: "odio",
  state: "tempora",
}).then((res: PutV1CompaniesCompanyUuidTaxRequirementsStateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.PutV1CompaniesCompanyUuidTaxRequirementsStateRequest](../../models/operations/putv1companiescompanyuuidtaxrequirementsstaterequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PutV1CompaniesCompanyUuidTaxRequirementsStateResponse](../../models/operations/putv1companiescompanyuuidtaxrequirementsstateresponse.md)>**
