# TaxRequirements

### Available Operations

* [getV1CompaniesCompanyUuidTaxRequirements](#getv1companiescompanyuuidtaxrequirements) - Get All Tax Requirement States
* [getV1CompaniesCompanyUuidTaxRequirementsState](#getv1companiescompanyuuidtaxrequirementsstate) - Get State Tax Requirements
* [putV1CompaniesCompanyUuidTaxRequirementsState](#putv1companiescompanyuuidtaxrequirementsstate) - Update State Tax Requirements

## getV1CompaniesCompanyUuidTaxRequirements

Returns objects describing the states that have tax requirements for the company

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1CompaniesCompanyUuidTaxRequirementsRequest,
  GetV1CompaniesCompanyUuidTaxRequirementsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "corporis";

sdk.taxRequirements.getV1CompaniesCompanyUuidTaxRequirements(companyUuid).then((res: GetV1CompaniesCompanyUuidTaxRequirementsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


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
import {
  GetV1CompaniesCompanyUuidTaxRequirementsStateRequest,
  GetV1CompaniesCompanyUuidTaxRequirementsStateResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "reiciendis";
const state: string = "assumenda";
const scheduling: boolean = false;

sdk.taxRequirements.getV1CompaniesCompanyUuidTaxRequirementsState(companyUuid, state, scheduling).then((res: GetV1CompaniesCompanyUuidTaxRequirementsStateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                         | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The UUID of the company                                                                                                           |
| `state`                                                                                                                           | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | 2-letter US state abbreviation                                                                                                    |
| `scheduling`                                                                                                                      | *boolean*                                                                                                                         | :heavy_minus_sign:                                                                                                                | When true, return "new" requirement sets with valid `effective_from` dates that are available to save new effective dated values. |
| `config`                                                                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                      | :heavy_minus_sign:                                                                                                                | Available config options for making requests.                                                                                     |


### Response

**Promise<[operations.GetV1CompaniesCompanyUuidTaxRequirementsStateResponse](../../models/operations/getv1companiescompanyuuidtaxrequirementsstateresponse.md)>**


## putV1CompaniesCompanyUuidTaxRequirementsState

Update State Tax Requirements

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyUuidTaxRequirementsStateRequest,
  PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody,
  PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyRequirementSets,
  PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyRequirementSetsRequirements,
  PutV1CompaniesCompanyUuidTaxRequirementsStateResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "nemo";
const state: string = "recusandae";
const requestBody: PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody = {
  requirementSets: [
    {
      effectiveFrom: "aliquid",
      key: "aperiam",
      requirements: [
        {
          key: "cum",
          value: "consectetur",
        },
      ],
      state: "in",
    },
  ],
};

sdk.taxRequirements.putV1CompaniesCompanyUuidTaxRequirementsState(companyUuid, state, requestBody).then((res: PutV1CompaniesCompanyUuidTaxRequirementsStateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The UUID of the company                                                                                                                                    |
| `state`                                                                                                                                                    | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | 2-letter US state abbreviation                                                                                                                             |
| `requestBody`                                                                                                                                              | [operations.PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody](../../models/operations/putv1companiescompanyuuidtaxrequirementsstaterequestbody.md) | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.PutV1CompaniesCompanyUuidTaxRequirementsStateResponse](../../models/operations/putv1companiescompanyuuidtaxrequirementsstateresponse.md)>**

