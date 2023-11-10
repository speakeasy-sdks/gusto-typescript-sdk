# EmployeeForms
(*employeeForms*)

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
import { GetV1EmployeeFormRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";
const formId: string = "string";

  const res = await sdk.employeeForms.getV1EmployeeForm(employeeId, formId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `formId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID or UUID of the form                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1EmployeeFormResponse](../../sdk/models/operations/getv1employeeformresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getV1EmployeeFormPdf

Get the link to the form PDF

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeeFormPdfRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";
const formId: string = "string";

  const res = await sdk.employeeForms.getV1EmployeeFormPdf(employeeId, formId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `formId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID or UUID of the form                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1EmployeeFormPdfResponse](../../sdk/models/operations/getv1employeeformpdfresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getV1EmployeeForms

Get a list of all employee's forms

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeeFormsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";

  const res = await sdk.employeeForms.getV1EmployeeForms(employeeId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1EmployeeFormsResponse](../../sdk/models/operations/getv1employeeformsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postV1SandboxGenerateW2

Generates a W2 document for testing purposes.

> 📘
>
> This endpoint can only be used in the Sandbox environments.

`scope: employees:write`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.employeeForms.postV1SandboxGenerateW2({
    employeeId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PostV1SandboxGenerateW2RequestBody](../../sdk/models/operations/postv1sandboxgeneratew2requestbody.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PostV1SandboxGenerateW2Response](../../sdk/models/operations/postv1sandboxgeneratew2response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putV1EmployeeFormSign

Sign a company form

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1EmployeeFormSignRequest, PutV1EmployeeFormSignRequestBody } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";
const formId: string = "string";
const requestBody: PutV1EmployeeFormSignRequestBody = {
  agree: false,
  signatureText: "string",
  signedByIpAddress: "string",
};

  const res = await sdk.employeeForms.putV1EmployeeFormSign(employeeId, formId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                         | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                                      | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The UUID of the employee                                                                                          |
| `formId`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The ID or UUID of the form                                                                                        |
| `requestBody`                                                                                                     | [operations.PutV1EmployeeFormSignRequestBody](../../../sdk/models/operations/putv1employeeformsignrequestbody.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `config`                                                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                      | :heavy_minus_sign:                                                                                                | Available config options for making requests.                                                                     |


### Response

**Promise<[operations.PutV1EmployeeFormSignResponse](../../sdk/models/operations/putv1employeeformsignresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
