# externalPayrolls

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
import { DeleteV1ExternalPayrollResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.externalPayrolls.deleteV1ExternalPayroll("repellendus", "officia").then((res: DeleteV1ExternalPayrollResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `externalPayrollId`                                          | *string*                                                     | :heavy_check_mark:                                           | The UUID of the external payroll                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteV1ExternalPayrollResponse](../../models/operations/deletev1externalpayrollresponse.md)>**


## getV1CompanyExternalPayrolls

Get an external payroll for a given company.
scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyExternalPayrollsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.externalPayrolls.getV1CompanyExternalPayrolls("maxime").then((res: GetV1CompanyExternalPayrollsResponse) => {
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

**Promise<[operations.GetV1CompanyExternalPayrollsResponse](../../models/operations/getv1companyexternalpayrollsresponse.md)>**


## getV1ExternalPayroll

Get an external payroll for a given company.
scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ExternalPayrollResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.externalPayrolls.getV1ExternalPayroll("dignissimos", "officia").then((res: GetV1ExternalPayrollResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `externalPayrollId`                                          | *string*                                                     | :heavy_check_mark:                                           | The UUID of the external payroll                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ExternalPayrollResponse](../../models/operations/getv1externalpayrollresponse.md)>**


## getV1ExternalPayrollCalculateTaxes

Get tax suggestions for an external payroll. Earnings and/or benefits data must be saved prior to the calculation in order to retrieve accurate tax calculation.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ExternalPayrollCalculateTaxesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.externalPayrolls.getV1ExternalPayrollCalculateTaxes("asperiores", "nemo").then((res: GetV1ExternalPayrollCalculateTaxesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `externalPayrollId`                                          | *string*                                                     | :heavy_check_mark:                                           | The UUID of the external payroll                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ExternalPayrollCalculateTaxesResponse](../../models/operations/getv1externalpayrollcalculatetaxesresponse.md)>**


## postV1ExternalPayroll

Creates a new external payroll for the company.
scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1ExternalPayrollResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.externalPayrolls.postV1ExternalPayroll("quae", {
  checkDate: "quaerat",
  paymentPeriodEndDate: "porro",
  paymentPeriodStartDate: "quod",
}).then((res: PostV1ExternalPayrollResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The UUID of the company                                                                                    |
| `requestBody`                                                                                              | [operations.PostV1ExternalPayrollRequestBody](../../models/operations/postv1externalpayrollrequestbody.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PostV1ExternalPayrollResponse](../../models/operations/postv1externalpayrollresponse.md)>**


## putV1ExternalPayroll

Update an external payroll with a list of external payroll items
scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1ExternalPayrollRequestBodyExternalPayrollItemsEarningsEarningType,
  PutV1ExternalPayrollResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.externalPayrolls.putV1ExternalPayroll("labore", "ab", {
  externalPayrollItems: [
    {
      benefits: [
        {
          benefitId: 662505,
          companyContributionAmount: "suscipit",
          employeeDeductionAmount: "velit",
        },
        {
          benefitId: 633931,
          companyContributionAmount: "est",
          employeeDeductionAmount: "recusandae",
        },
        {
          benefitId: 517309,
          companyContributionAmount: "fugiat",
          employeeDeductionAmount: "vel",
        },
      ],
      earnings: [
        {
          amount: "quos",
          earningId: 427834,
          earningType: PutV1ExternalPayrollRequestBodyExternalPayrollItemsEarningsEarningType.CompanyPayType,
          hours: "possimus",
        },
        {
          amount: "facilis",
          earningId: 738227,
          earningType: PutV1ExternalPayrollRequestBodyExternalPayrollItemsEarningsEarningType.CompanyPayType,
          hours: "in",
        },
      ],
      employeeUuid: "corporis",
      taxes: [
        {
          amount: "assumenda",
          taxId: 363161,
        },
        {
          amount: "recusandae",
          taxId: 397533,
        },
        {
          amount: "aperiam",
          taxId: 738683,
        },
        {
          amount: "consectetur",
          taxId: 449083,
        },
      ],
    },
  ],
  replaceFields: false,
}).then((res: PutV1ExternalPayrollResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The UUID of the company                                                                                  |
| `externalPayrollId`                                                                                      | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The UUID of the external payroll                                                                         |
| `requestBody`                                                                                            | [operations.PutV1ExternalPayrollRequestBody](../../models/operations/putv1externalpayrollrequestbody.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutV1ExternalPayrollResponse](../../models/operations/putv1externalpayrollresponse.md)>**

