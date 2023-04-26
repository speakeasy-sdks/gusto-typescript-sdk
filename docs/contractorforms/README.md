# contractorForms

### Available Operations

* [getV1ContractorForm](#getv1contractorform) - Get a contractor form
* [getV1ContractorFormPdf](#getv1contractorformpdf) - Get the contractor form pdf
* [getV1ContractorForms](#getv1contractorforms) - Get all contractor forms
* [postV1SandboxGenerate1099](#postv1sandboxgenerate1099) - Generate a 1099 form [SANDBOX]

## getV1ContractorForm

Get a contractor form

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorFormRequest, GetV1ContractorFormResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1ContractorFormRequest = {
  contractorUuid: "magni",
  formId: "assumenda",
};

sdk.contractorForms.getV1ContractorForm(req).then((res: GetV1ContractorFormResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1ContractorFormPdf

Get the link to the form PDF

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorFormPdfRequest, GetV1ContractorFormPdfResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1ContractorFormPdfRequest = {
  contractorUuid: "ipsam",
  formId: "alias",
};

sdk.contractorForms.getV1ContractorFormPdf(req).then((res: GetV1ContractorFormPdfResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1ContractorForms

Get a list of all contractor's forms

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorFormsRequest, GetV1ContractorFormsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1ContractorFormsRequest = {
  contractorUuid: "fugit",
};

sdk.contractorForms.getV1ContractorForms(req).then((res: GetV1ContractorFormsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postV1SandboxGenerate1099

Generates a 1099 document for testing purposes.

> 📘
>
> This endpoint can only be used in the Sandbox environments.

`scope: contractors:write`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1SandboxGenerate1099RequestBody, PostV1SandboxGenerate1099Response } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1SandboxGenerate1099RequestBody = {
  contractorId: "dolorum",
  year: 569618,
};

sdk.contractorForms.postV1SandboxGenerate1099(req).then((res: PostV1SandboxGenerate1099Response | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
