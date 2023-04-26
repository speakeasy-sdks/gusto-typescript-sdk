# industrySelection

### Available Operations

* [getV1CompanyIndustry](#getv1companyindustry) - Get a company industry selection
* [putV1CompanyIndustry](#putv1companyindustry) - Update a company industry selection

## getV1CompanyIndustry

Get industry selection for the company.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyIndustryRequest, GetV1CompanyIndustryResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompanyIndustryRequest = {
  companyId: "dignissimos",
};

sdk.industrySelection.getV1CompanyIndustry(req).then((res: GetV1CompanyIndustryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1CompanyIndustry

Update the company industry selection by passing in industry classification codes: [NAICS code](https://www.naics.com), [SICS code](https://siccode.com/) and industry title. Our UI is leveraging [Middesk API](https://docs.middesk.com/reference/introduction) to determine industry classification codes.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompanyIndustryRequest, PutV1CompanyIndustryResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1CompanyIndustryRequest = {
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
};

sdk.industrySelection.putV1CompanyIndustry(req).then((res: PutV1CompanyIndustryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
