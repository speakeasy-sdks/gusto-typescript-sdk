# TaxLiabilities
(*taxLiabilities*)

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
import { GetV1TaxLiabilitiesRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyUuid: string = "<value>";

  const res = await sdk.taxLiabilities.getV1TaxLiabilities(companyUuid);

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

**Promise<[operations.GetV1TaxLiabilitiesResponse](../../sdk/models/operations/getv1taxliabilitiesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putV1TaxLiabilities

Update tax liabilities for a company.
  scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { LiabilitySelections, PutV1TaxLiabilitiesRequest, PutV1TaxLiabilitiesRequestBody } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyUuid: string = "<value>";
const requestBody: PutV1TaxLiabilitiesRequestBody = {
  liabilitySelections: [
    {},
  ],
};

  const res = await sdk.taxLiabilities.putV1TaxLiabilities(companyUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The UUID of the company                                                                                    |
| `requestBody`                                                                                              | [operations.PutV1TaxLiabilitiesRequestBody](../../sdk/models/operations/putv1taxliabilitiesrequestbody.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PutV1TaxLiabilitiesResponse](../../sdk/models/operations/putv1taxliabilitiesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putV1TaxLiabilitiesFinish

Finalizes tax liabilities for a company. All external payrolls edit action will be disabled.
  scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1TaxLiabilitiesFinishRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyUuid: string = "<value>";

  const res = await sdk.taxLiabilities.putV1TaxLiabilitiesFinish(companyUuid);

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

**Promise<[operations.PutV1TaxLiabilitiesFinishResponse](../../sdk/models/operations/putv1taxliabilitiesfinishresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
