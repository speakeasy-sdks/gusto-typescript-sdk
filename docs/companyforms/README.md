# companyForms

### Available Operations

* [getV1CompanyForm](#getv1companyform) - Get a company form
* [getV1CompanyFormPdf](#getv1companyformpdf) - Get a company form pdf
* [getV1CompanyForms](#getv1companyforms) - Get all company forms
* [putV1CompanyFormSign](#putv1companyformsign) - Sign a company form

## getV1CompanyForm

Get a company form

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyFormRequest, GetV1CompanyFormResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompanyFormRequest = {
  formId: "modi",
};

sdk.companyForms.getV1CompanyForm(req).then((res: GetV1CompanyFormResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1CompanyFormPdf

Get the link to the form PDF

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyFormPdfRequest, GetV1CompanyFormPdfResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompanyFormPdfRequest = {
  formId: "qui",
};

sdk.companyForms.getV1CompanyFormPdf(req).then((res: GetV1CompanyFormPdfResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1CompanyForms

Get a list of all company's forms

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyFormsRequest, GetV1CompanyFormsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompanyFormsRequest = {
  companyId: "aliquid",
};

sdk.companyForms.getV1CompanyForms(req).then((res: GetV1CompanyFormsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1CompanyFormSign

Sign a company form

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompanyFormSignRequest, PutV1CompanyFormSignResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1CompanyFormSignRequest = {
  requestBody: {
    agree: false,
    signatureText: "cupiditate",
    signedByIpAddress: "quos",
  },
  formId: "perferendis",
};

sdk.companyForms.putV1CompanyFormSign(req).then((res: PutV1CompanyFormSignResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
