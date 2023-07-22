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
import { GetV1TaxLiabilitiesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.taxLiabilities.getV1TaxLiabilities("nemo").then((res: GetV1TaxLiabilitiesResponse) => {
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

**Promise<[operations.GetV1TaxLiabilitiesResponse](../../models/operations/getv1taxliabilitiesresponse.md)>**


## putV1TaxLiabilities

Update tax liabilities for a company.
  scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1TaxLiabilitiesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.taxLiabilities.putV1TaxLiabilities("soluta", {
  liabilitySelections: [
    {
      lastUnpaidExternalPayrollUuid: "rem",
      taxId: 678060,
      unpaidLiabilityAmount: 4876.76,
    },
    {
      lastUnpaidExternalPayrollUuid: "fugit",
      taxId: 545,
      unpaidLiabilityAmount: 1680.42,
    },
    {
      lastUnpaidExternalPayrollUuid: "vel",
      taxId: 64435,
      unpaidLiabilityAmount: 635.53,
    },
  ],
}).then((res: PutV1TaxLiabilitiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `companyUuid`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The UUID of the company                                                                                |
| `requestBody`                                                                                          | [operations.PutV1TaxLiabilitiesRequestBody](../../models/operations/putv1taxliabilitiesrequestbody.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PutV1TaxLiabilitiesResponse](../../models/operations/putv1taxliabilitiesresponse.md)>**


## putV1TaxLiabilitiesFinish

Finalizes tax liabilities for a company. All external payrolls edit action will be disabled.
  scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1TaxLiabilitiesFinishResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.taxLiabilities.putV1TaxLiabilitiesFinish("modi").then((res: PutV1TaxLiabilitiesFinishResponse) => {
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

**Promise<[operations.PutV1TaxLiabilitiesFinishResponse](../../models/operations/putv1taxliabilitiesfinishresponse.md)>**

