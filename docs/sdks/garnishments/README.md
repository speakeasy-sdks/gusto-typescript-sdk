# garnishments

### Available Operations

* [getV1EmployeesEmployeeIdGarnishments](#getv1employeesemployeeidgarnishments) - Get garnishments for an employee
* [getV1GarnishmentsGarnishmentId](#getv1garnishmentsgarnishmentid) - Get a garnishment
* [postV1EmployeesEmployeeIdGarnishments](#postv1employeesemployeeidgarnishments) - Create a garnishment
* [putV1GarnishmentsGarnishmentId](#putv1garnishmentsgarnishmentid) - Update a garnishment

## getV1EmployeesEmployeeIdGarnishments

Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1EmployeesEmployeeIdGarnishmentsRequest,
  GetV1EmployeesEmployeeIdGarnishmentsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "sunt";
const page: number = 9920.12;
const per: number = 2415.45;

sdk.garnishments.getV1EmployeesEmployeeIdGarnishments(employeeId, page, per).then((res: GetV1EmployeesEmployeeIdGarnishmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `employeeId`                                                         | *string*                                                             | :heavy_check_mark:                                                   | The UUID of the employee                                             |
| `page`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | The page that is requested. When unspecified, will load all objects. |
| `per`                                                                | *number*                                                             | :heavy_minus_sign:                                                   | Number of objects per page. When unspecified, will default to 25     |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdGarnishmentsResponse](../../models/operations/getv1employeesemployeeidgarnishmentsresponse.md)>**


## getV1GarnishmentsGarnishmentId

Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1GarnishmentsGarnishmentIdRequest, GetV1GarnishmentsGarnishmentIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const garnishmentId: string = "non";

sdk.garnishments.getV1GarnishmentsGarnishmentId(garnishmentId).then((res: GetV1GarnishmentsGarnishmentIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `garnishmentId`                                              | *string*                                                     | :heavy_check_mark:                                           | The UUID of the garnishment                                  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1GarnishmentsGarnishmentIdResponse](../../models/operations/getv1garnishmentsgarnishmentidresponse.md)>**


## postV1EmployeesEmployeeIdGarnishments

Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1EmployeesEmployeeIdGarnishmentsRequest,
  PostV1EmployeesEmployeeIdGarnishmentsRequestBody,
  PostV1EmployeesEmployeeIdGarnishmentsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "amet";
const requestBody: PostV1EmployeesEmployeeIdGarnishmentsRequestBody = {
  active: false,
  amount: "beatae",
  annualMaximum: "dignissimos",
  courtOrdered: false,
  deductAsPercentage: false,
  description: "a",
  payPeriodMaximum: "debitis",
  recurring: false,
  times: 233420,
};

sdk.garnishments.postV1EmployeesEmployeeIdGarnishments(employeeId, requestBody).then((res: PostV1EmployeesEmployeeIdGarnishmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `employeeId`                                                                                                                               | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The UUID of the employee                                                                                                                   |
| `requestBody`                                                                                                                              | [operations.PostV1EmployeesEmployeeIdGarnishmentsRequestBody](../../models/operations/postv1employeesemployeeidgarnishmentsrequestbody.md) | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PostV1EmployeesEmployeeIdGarnishmentsResponse](../../models/operations/postv1employeesemployeeidgarnishmentsresponse.md)>**


## putV1GarnishmentsGarnishmentId

Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1GarnishmentsGarnishmentIdRequest,
  PutV1GarnishmentsGarnishmentIdRequestBody,
  PutV1GarnishmentsGarnishmentIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const garnishmentId: string = "corporis";
const requestBody: PutV1GarnishmentsGarnishmentIdRequestBody = {
  active: false,
  amount: "harum",
  annualMaximum: "laboriosam",
  courtOrdered: false,
  deductAsPercentage: false,
  description: "ipsa",
  payPeriodMaximum: "voluptates",
  recurring: false,
  times: 730709,
  version: "vitae",
};

sdk.garnishments.putV1GarnishmentsGarnishmentId(garnishmentId, requestBody).then((res: PutV1GarnishmentsGarnishmentIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `garnishmentId`                                                                                                              | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The UUID of the garnishment                                                                                                  |
| `requestBody`                                                                                                                | [operations.PutV1GarnishmentsGarnishmentIdRequestBody](../../models/operations/putv1garnishmentsgarnishmentidrequestbody.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PutV1GarnishmentsGarnishmentIdResponse](../../models/operations/putv1garnishmentsgarnishmentidresponse.md)>**

