# employeeForms

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
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1EmployeeFormRequest = {
  employeeId: "fugit",
  formId: "porro",
};

sdk.employeeForms.getV1EmployeeForm(req).then((res: GetV1EmployeeFormResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1EmployeeFormPdf

Get the link to the form PDF

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeeFormPdfRequest, GetV1EmployeeFormPdfResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1EmployeeFormPdfRequest = {
  employeeId: "maiores",
  formId: "doloribus",
};

sdk.employeeForms.getV1EmployeeFormPdf(req).then((res: GetV1EmployeeFormPdfResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1EmployeeForms

Get a list of all employee's forms

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeeFormsRequest, GetV1EmployeeFormsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1EmployeeFormsRequest = {
  employeeId: "iusto",
};

sdk.employeeForms.getV1EmployeeForms(req).then((res: GetV1EmployeeFormsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postV1SandboxGenerateW2

Generates a W2 document for testing purposes.

> 📘
>
> This endpoint can only be used in the Sandbox environments.

`scope: employees:write`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1SandboxGenerateW2RequestBody, PostV1SandboxGenerateW2Response } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1SandboxGenerateW2RequestBody = {
  employeeId: "eligendi",
  year: 497391,
};

sdk.employeeForms.postV1SandboxGenerateW2(req).then((res: PostV1SandboxGenerateW2Response | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1EmployeeFormSign

Sign a company form

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1EmployeeFormSignRequest, PutV1EmployeeFormSignResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1EmployeeFormSignRequest = {
  requestBody: {
    agree: false,
    signatureText: "alias",
    signedByIpAddress: "officia",
  },
  employeeId: "tempora",
  formId: "ipsam",
};

sdk.employeeForms.putV1EmployeeFormSign(req).then((res: PutV1EmployeeFormSignResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
