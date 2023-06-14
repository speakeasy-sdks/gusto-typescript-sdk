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

sdk.taxLiabilities.getV1TaxLiabilities({
  companyUuid: "necessitatibus",
}).then((res: GetV1TaxLiabilitiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetV1TaxLiabilitiesRequest](../../models/operations/getv1taxliabilitiesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


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

sdk.taxLiabilities.putV1TaxLiabilities({
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
}).then((res: PutV1TaxLiabilitiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PutV1TaxLiabilitiesRequest](../../models/operations/putv1taxliabilitiesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


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

sdk.taxLiabilities.putV1TaxLiabilitiesFinish({
  companyUuid: "ipsa",
}).then((res: PutV1TaxLiabilitiesFinishResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PutV1TaxLiabilitiesFinishRequest](../../models/operations/putv1taxliabilitiesfinishrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PutV1TaxLiabilitiesFinishResponse](../../models/operations/putv1taxliabilitiesfinishresponse.md)>**
