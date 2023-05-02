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
import { GetV1EmployeeFormResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.employeeForms.getV1EmployeeForm({
  employeeId: "fugit",
  formId: "porro",
}).then((res: GetV1EmployeeFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1EmployeeFormPdf

Get the link to the form PDF

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeeFormPdfResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.employeeForms.getV1EmployeeFormPdf({
  employeeId: "maiores",
  formId: "doloribus",
}).then((res: GetV1EmployeeFormPdfResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1EmployeeForms

Get a list of all employee's forms

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeeFormsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.employeeForms.getV1EmployeeForms({
  employeeId: "iusto",
}).then((res: GetV1EmployeeFormsResponse) => {
  if (res.statusCode == 200) {
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
import { PostV1SandboxGenerateW2Response } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.employeeForms.postV1SandboxGenerateW2({
  employeeId: "eligendi",
  year: 497391,
}).then((res: PostV1SandboxGenerateW2Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putV1EmployeeFormSign

Sign a company form

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1EmployeeFormSignResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.employeeForms.putV1EmployeeFormSign({
  requestBody: {
    agree: false,
    signatureText: "alias",
    signedByIpAddress: "officia",
  },
  employeeId: "tempora",
  formId: "ipsam",
}).then((res: PutV1EmployeeFormSignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
