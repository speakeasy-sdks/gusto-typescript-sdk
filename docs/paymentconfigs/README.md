# paymentConfigs

### Available Operations

* [getV1CompanyPaymentConfigs](#getv1companypaymentconfigs) - Get a company's payment configs
* [putV1CompanyPaymentConfigs](#putv1companypaymentconfigs) - Update a company's payment configs

## getV1CompanyPaymentConfigs

Get payment speed for the company and fast payment limit (only applicable for 2-day payroll).

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyPaymentConfigsRequest, GetV1CompanyPaymentConfigsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompanyPaymentConfigsRequest = {
  companyUuid: "reiciendis",
};

sdk.paymentConfigs.getV1CompanyPaymentConfigs(req).then((res: GetV1CompanyPaymentConfigsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
  PutV1CompanyPaymentConfigsRequest,
  PutV1CompanyPaymentConfigsRequestBodyPaymentSpeedEnum,
  PutV1CompanyPaymentConfigsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1CompanyPaymentConfigsRequest = {
  requestBody: {
    fastPaymentLimit: "nulla",
    paymentSpeed: PutV1CompanyPaymentConfigsRequestBodyPaymentSpeedEnum.TwoDay,
  },
  companyUuid: "aperiam",
};

sdk.paymentConfigs.putV1CompanyPaymentConfigs(req).then((res: PutV1CompanyPaymentConfigsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
