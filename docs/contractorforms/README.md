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
import { GetV1ContractorFormResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.contractorForms.getV1ContractorForm({
  contractorUuid: "magni",
  formId: "assumenda",
}).then((res: GetV1ContractorFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1ContractorFormPdf

Get the link to the form PDF

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorFormPdfResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.contractorForms.getV1ContractorFormPdf({
  contractorUuid: "ipsam",
  formId: "alias",
}).then((res: GetV1ContractorFormPdfResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1ContractorForms

Get a list of all contractor's forms

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorFormsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.contractorForms.getV1ContractorForms({
  contractorUuid: "fugit",
}).then((res: GetV1ContractorFormsResponse) => {
  if (res.statusCode == 200) {
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
import { PostV1SandboxGenerate1099Response } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.contractorForms.postV1SandboxGenerate1099({
  contractorId: "dolorum",
  year: 569618,
}).then((res: PostV1SandboxGenerate1099Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
