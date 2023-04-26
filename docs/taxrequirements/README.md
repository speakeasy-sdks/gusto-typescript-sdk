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
import {
  GetV1CompaniesCompanyUuidTaxRequirementsRequest,
  GetV1CompaniesCompanyUuidTaxRequirementsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompaniesCompanyUuidTaxRequirementsRequest = {
  companyUuid: "tempora",
};

sdk.taxRequirements.getV1CompaniesCompanyUuidTaxRequirements(req).then((res: GetV1CompaniesCompanyUuidTaxRequirementsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

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
import {
  TaxRequirementMetadataRateTypeEnum,
  TaxRequirementMetadataTypeEnum,
  TaxRequirementMetadataValidationTypeEnum,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompaniesCompanyUuidTaxRequirementsStateRequest = {
  companyUuid: "nihil",
  scheduling: false,
  state: "molestiae",
};

sdk.taxRequirements.getV1CompaniesCompanyUuidTaxRequirementsState(req).then((res: GetV1CompaniesCompanyUuidTaxRequirementsStateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1CompaniesCompanyUuidTaxRequirementsState

Update State Tax Requirements

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyUuidTaxRequirementsStateRequest,
  PutV1CompaniesCompanyUuidTaxRequirementsStateResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1CompaniesCompanyUuidTaxRequirementsStateRequest = {
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
};

sdk.taxRequirements.putV1CompaniesCompanyUuidTaxRequirementsState(req).then((res: PutV1CompaniesCompanyUuidTaxRequirementsStateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
