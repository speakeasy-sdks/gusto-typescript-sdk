# industrySelection

### Available Operations

* [getV1CompanyIndustry](#getv1companyindustry) - Get a company industry selection
* [putV1CompanyIndustry](#putv1companyindustry) - Update a company industry selection

## getV1CompanyIndustry

Get industry selection for the company.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyIndustryResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.industrySelection.getV1CompanyIndustry({
  companyId: "dignissimos",
}).then((res: GetV1CompanyIndustryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putV1CompanyIndustry

Update the company industry selection by passing in industry classification codes: [NAICS code](https://www.naics.com), [SICS code](https://siccode.com/) and industry title. Our UI is leveraging [Middesk API](https://docs.middesk.com/reference/introduction) to determine industry classification codes.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompanyIndustryResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.industrySelection.putV1CompanyIndustry({
  requestBody: {
    naicsCode: "a",
    sicCodes: [
      "consectetur",
      "corporis",
      "harum",
      "laboriosam",
    ],
    title: "Mr.",
  },
  companyId: "voluptates",
}).then((res: PutV1CompanyIndustryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
