# taxLiabilities

### Available Operations

* [getV1TaxLiabilities](#getv1taxliabilities) - Get tax liabilities
* [putV1TaxLiabilities](#putv1taxliabilities) - Update tax liabilities
* [putV1TaxLiabilitiesFinish](#putv1taxliabilitiesfinish) - Finalize tax liabilities options and convert into processed payrolls

## getV1TaxLiabilities

Get tax liabilities from aggregate external payrolls for a company.
scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1TaxLiabilitiesRequest, GetV1TaxLiabilitiesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1TaxLiabilitiesRequest = {
  companyUuid: "necessitatibus",
};

sdk.taxLiabilities.getV1TaxLiabilities(req).then((res: GetV1TaxLiabilitiesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1TaxLiabilities

Update tax liabilities for a company.
  scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1TaxLiabilitiesRequest, PutV1TaxLiabilitiesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1TaxLiabilitiesRequest = {
  requestBody: {
    liabilitySelections: [
      {
        lastUnpaidExternalPayrollUuid: "consequatur",
        taxId: 97258,
        unpaidLiabilityAmount: 902.33,
      },
      {
        lastUnpaidExternalPayrollUuid: "ducimus",
        taxId: 619183,
        unpaidLiabilityAmount: 5810.82,
      },
      {
        lastUnpaidExternalPayrollUuid: "suscipit",
        taxId: 241557,
        unpaidLiabilityAmount: 965.62,
      },
      {
        lastUnpaidExternalPayrollUuid: "magni",
        taxId: 984934,
        unpaidLiabilityAmount: 8595.81,
      },
    ],
  },
  companyUuid: "necessitatibus",
};

sdk.taxLiabilities.putV1TaxLiabilities(req).then((res: PutV1TaxLiabilitiesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1TaxLiabilitiesFinish

Finalizes tax liabilities for a company. All external payrolls edit action will be disabled.
  scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1TaxLiabilitiesFinishRequest, PutV1TaxLiabilitiesFinishResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1TaxLiabilitiesFinishRequest = {
  companyUuid: "ipsa",
};

sdk.taxLiabilities.putV1TaxLiabilitiesFinish(req).then((res: PutV1TaxLiabilitiesFinishResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
