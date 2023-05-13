# paymentConfigs

### Available Operations

* [getV1CompanyPaymentConfigs](#getv1companypaymentconfigs) - Get a company's payment configs
* [putV1CompanyPaymentConfigs](#putv1companypaymentconfigs) - Update a company's payment configs

## getV1CompanyPaymentConfigs

Get payment speed for the company and fast payment limit (only applicable for 2-day payroll).

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyPaymentConfigsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.paymentConfigs.getV1CompanyPaymentConfigs({
  companyUuid: "reiciendis",
}).then((res: GetV1CompanyPaymentConfigsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putV1CompanyPaymentConfigs

Update payment speed for the company and fast payment limit (only applicable for 2-day payroll)

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompanyPaymentConfigsRequestBodyPaymentSpeedEnum,
  PutV1CompanyPaymentConfigsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.paymentConfigs.putV1CompanyPaymentConfigs({
  requestBody: {
    fastPaymentLimit: "nulla",
    paymentSpeed: PutV1CompanyPaymentConfigsRequestBodyPaymentSpeedEnum.TwoDay,
  },
  companyUuid: "aperiam",
}).then((res: PutV1CompanyPaymentConfigsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
