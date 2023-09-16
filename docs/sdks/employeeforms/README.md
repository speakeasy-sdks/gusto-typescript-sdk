# EmployeeForms

### Available Operations

* [getV1EmployeeForm](#getv1employeeform) - Get an employee form
* [getV1EmployeeFormPdf](#getv1employeeformpdf) - Get the employee form pdf
* [getV1EmployeeForms](#getv1employeeforms) - Get all employee forms
* [postV1SandboxGenerateW2](#postv1sandboxgeneratew2) - Generate a W2 form [SANDBOX]
* [putV1EmployeeFormSign](#putv1employeeformsign) - Sign an employee form

## getV1EmployeeForm

Get an employee form

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeeFormRequest, GetV1EmployeeFormResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "eius";
const formId: string = "aspernatur";

sdk.employeeForms.getV1EmployeeForm(employeeId, formId).then((res: GetV1EmployeeFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `formId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID or UUID of the form                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1EmployeeFormResponse](../../models/operations/getv1employeeformresponse.md)>**


## getV1EmployeeFormPdf

Get the link to the form PDF

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeeFormPdfRequest, GetV1EmployeeFormPdfResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "perferendis";
const formId: string = "amet";

sdk.employeeForms.getV1EmployeeFormPdf(employeeId, formId).then((res: GetV1EmployeeFormPdfResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `formId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID or UUID of the form                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1EmployeeFormPdfResponse](../../models/operations/getv1employeeformpdfresponse.md)>**


## getV1EmployeeForms

Get a list of all employee's forms

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeeFormsRequest, GetV1EmployeeFormsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "optio";

sdk.employeeForms.getV1EmployeeForms(employeeId).then((res: GetV1EmployeeFormsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1EmployeeFormsResponse](../../models/operations/getv1employeeformsresponse.md)>**


## postV1SandboxGenerateW2

Generates a W2 document for testing purposes.

> 📘
>
> This endpoint can only be used in the Sandbox environments.

`scope: employees:write`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1SandboxGenerateW2Response } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeeForms.postV1SandboxGenerateW2({
  employeeId: "accusamus",
  year: 320017,
}).then((res: PostV1SandboxGenerateW2Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PostV1SandboxGenerateW2RequestBody](../../models/operations/postv1sandboxgeneratew2requestbody.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PostV1SandboxGenerateW2Response](../../models/operations/postv1sandboxgeneratew2response.md)>**


## putV1EmployeeFormSign

Sign a company form

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1EmployeeFormSignRequest,
  PutV1EmployeeFormSignRequestBody,
  PutV1EmployeeFormSignResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "saepe";
const formId: string = "suscipit";
const requestBody: PutV1EmployeeFormSignRequestBody = {
  agree: false,
  signatureText: "deserunt",
  signedByIpAddress: "provident",
};

sdk.employeeForms.putV1EmployeeFormSign(employeeId, formId, requestBody).then((res: PutV1EmployeeFormSignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The UUID of the employee                                                                                   |
| `formId`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID or UUID of the form                                                                                 |
| `requestBody`                                                                                              | [operations.PutV1EmployeeFormSignRequestBody](../../models/operations/putv1employeeformsignrequestbody.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PutV1EmployeeFormSignResponse](../../models/operations/putv1employeeformsignresponse.md)>**

