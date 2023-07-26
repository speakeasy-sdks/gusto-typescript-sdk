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
    authorization: "",
  },
});

sdk.paymentConfigs.getV1CompanyPaymentConfigs("error").then((res: GetV1CompanyPaymentConfigsResponse) => {
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

**Promise<[operations.GetV1CompanyPaymentConfigsResponse](../../models/operations/getv1companypaymentconfigsresponse.md)>**


## putV1CompanyPaymentConfigs

Update payment speed for the company and fast payment limit (only applicable for 2-day payroll)

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompanyPaymentConfigsRequestBodyPaymentSpeed,
  PutV1CompanyPaymentConfigsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.paymentConfigs.putV1CompanyPaymentConfigs("officiis", {
  fastPaymentLimit: "officiis",
  paymentSpeed: PutV1CompanyPaymentConfigsRequestBodyPaymentSpeed.FourDay,
}).then((res: PutV1CompanyPaymentConfigsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The UUID of the company                                                                                              |
| `requestBody`                                                                                                        | [operations.PutV1CompanyPaymentConfigsRequestBody](../../models/operations/putv1companypaymentconfigsrequestbody.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PutV1CompanyPaymentConfigsResponse](../../models/operations/putv1companypaymentconfigsresponse.md)>**

