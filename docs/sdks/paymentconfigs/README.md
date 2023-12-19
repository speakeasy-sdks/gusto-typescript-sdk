# PaymentConfigs
(*paymentConfigs*)

### Available Operations

* [getV1CompanyPaymentConfigs](#getv1companypaymentconfigs) - Get a company's payment configs
* [putV1CompanyPaymentConfigs](#putv1companypaymentconfigs) - Update a company's payment configs

## getV1CompanyPaymentConfigs

Get payment speed for the company and fast payment limit (only applicable for 2-day payroll).

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyPaymentConfigsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyUuid: string = "string";

  const res = await sdk.paymentConfigs.getV1CompanyPaymentConfigs(companyUuid);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompanyPaymentConfigsResponse](../../sdk/models/operations/getv1companypaymentconfigsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putV1CompanyPaymentConfigs

Update payment speed for the company and fast payment limit (only applicable for 2-day payroll)

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PaymentSpeed,
  PutV1CompanyPaymentConfigsRequest,
  PutV1CompanyPaymentConfigsRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyUuid: string = "string";
const requestBody: PutV1CompanyPaymentConfigsRequestBody = {
  fastPaymentLimit: "string",
  paymentSpeed: PaymentSpeed.TwoDay,
};

  const res = await sdk.paymentConfigs.putV1CompanyPaymentConfigs(companyUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `companyUuid`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The UUID of the company                                                                                                  |
| `requestBody`                                                                                                            | [operations.PutV1CompanyPaymentConfigsRequestBody](../../sdk/models/operations/putv1companypaymentconfigsrequestbody.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PutV1CompanyPaymentConfigsResponse](../../sdk/models/operations/putv1companypaymentconfigsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
