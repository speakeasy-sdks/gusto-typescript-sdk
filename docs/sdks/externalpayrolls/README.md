# ExternalPayrolls
(*externalPayrolls*)

### Available Operations

* [deleteV1ExternalPayroll](#deletev1externalpayroll) - Delete an external payroll
* [getV1CompanyExternalPayrolls](#getv1companyexternalpayrolls) - Get external payrolls for a company
* [getV1ExternalPayroll](#getv1externalpayroll) - Get an external payroll
* [getV1ExternalPayrollCalculateTaxes](#getv1externalpayrollcalculatetaxes) - Get tax suggestions for an external payroll
* [postV1ExternalPayroll](#postv1externalpayroll) - Create a new external payroll for a company
* [putV1ExternalPayroll](#putv1externalpayroll) - Update an external payroll

## deleteV1ExternalPayroll

Delete an external payroll.
scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1ExternalPayrollRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const externalPayrollId: string = "string";

  const res = await sdk.externalPayrolls.deleteV1ExternalPayroll(companyUuid, externalPayrollId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `externalPayrollId`                                          | *string*                                                     | :heavy_check_mark:                                           | The UUID of the external payroll                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteV1ExternalPayrollResponse](../../sdk/models/operations/deletev1externalpayrollresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getV1CompanyExternalPayrolls

Get an external payroll for a given company.
scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyExternalPayrollsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";

  const res = await sdk.externalPayrolls.getV1CompanyExternalPayrolls(companyUuid);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompanyExternalPayrollsResponse](../../sdk/models/operations/getv1companyexternalpayrollsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getV1ExternalPayroll

Get an external payroll for a given company.
scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ExternalPayrollRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const externalPayrollId: string = "string";

  const res = await sdk.externalPayrolls.getV1ExternalPayroll(companyUuid, externalPayrollId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `externalPayrollId`                                          | *string*                                                     | :heavy_check_mark:                                           | The UUID of the external payroll                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ExternalPayrollResponse](../../sdk/models/operations/getv1externalpayrollresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getV1ExternalPayrollCalculateTaxes

Get tax suggestions for an external payroll. Earnings and/or benefits data must be saved prior to the calculation in order to retrieve accurate tax calculation.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ExternalPayrollCalculateTaxesRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const externalPayrollId: string = "string";

  const res = await sdk.externalPayrolls.getV1ExternalPayrollCalculateTaxes(companyUuid, externalPayrollId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `externalPayrollId`                                          | *string*                                                     | :heavy_check_mark:                                           | The UUID of the external payroll                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ExternalPayrollCalculateTaxesResponse](../../sdk/models/operations/getv1externalpayrollcalculatetaxesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postV1ExternalPayroll

Creates a new external payroll for the company.
scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1ExternalPayrollRequest, PostV1ExternalPayrollRequestBody } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const requestBody: PostV1ExternalPayrollRequestBody = {
  checkDate: "string",
  paymentPeriodEndDate: "string",
  paymentPeriodStartDate: "string",
};

  const res = await sdk.externalPayrolls.postV1ExternalPayroll(companyUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                         | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The UUID of the company                                                                                           |
| `requestBody`                                                                                                     | [operations.PostV1ExternalPayrollRequestBody](../../../sdk/models/operations/postv1externalpayrollrequestbody.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `config`                                                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                      | :heavy_minus_sign:                                                                                                | Available config options for making requests.                                                                     |


### Response

**Promise<[operations.PostV1ExternalPayrollResponse](../../sdk/models/operations/postv1externalpayrollresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putV1ExternalPayroll

Update an external payroll with a list of external payroll items
scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  Benefits,
  Earnings,
  EarningType,
  ExternalPayrollItems,
  PutV1ExternalPayrollRequest,
  PutV1ExternalPayrollRequestBody,
  Taxes,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const externalPayrollId: string = "string";
const requestBody: PutV1ExternalPayrollRequestBody = {
  externalPayrollItems: [
    {
      benefits: [
        {},
      ],
      earnings: [
        {},
      ],
      taxes: [
        {},
      ],
    },
  ],
};

  const res = await sdk.externalPayrolls.putV1ExternalPayroll(companyUuid, externalPayrollId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                       | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The UUID of the company                                                                                         |
| `externalPayrollId`                                                                                             | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The UUID of the external payroll                                                                                |
| `requestBody`                                                                                                   | [operations.PutV1ExternalPayrollRequestBody](../../../sdk/models/operations/putv1externalpayrollrequestbody.md) | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `config`                                                                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                    | :heavy_minus_sign:                                                                                              | Available config options for making requests.                                                                   |


### Response

**Promise<[operations.PutV1ExternalPayrollResponse](../../sdk/models/operations/putv1externalpayrollresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
