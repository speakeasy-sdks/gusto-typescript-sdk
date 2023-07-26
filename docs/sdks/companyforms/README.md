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
import { GetV1CompanyFormResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companyForms.getV1CompanyForm("qui").then((res: GetV1CompanyFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `formId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID or UUID of the form                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompanyFormResponse](../../models/operations/getv1companyformresponse.md)>**


## getV1CompanyFormPdf

Get the link to the form PDF

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyFormPdfResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companyForms.getV1CompanyFormPdf("aliquid").then((res: GetV1CompanyFormPdfResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `formId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID or UUID of the form                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompanyFormPdfResponse](../../models/operations/getv1companyformpdfresponse.md)>**


## getV1CompanyForms

Get a list of all company's forms

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyFormsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companyForms.getV1CompanyForms("cupiditate").then((res: GetV1CompanyFormsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompanyFormsResponse](../../models/operations/getv1companyformsresponse.md)>**


## putV1CompanyFormSign

Sign a company form

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompanyFormSignResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companyForms.putV1CompanyFormSign("quos", {
  agree: false,
  signatureText: "perferendis",
  signedByIpAddress: "magni",
}).then((res: PutV1CompanyFormSignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `formId`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The ID or UUID of the form                                                                               |
| `requestBody`                                                                                            | [operations.PutV1CompanyFormSignRequestBody](../../models/operations/putv1companyformsignrequestbody.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutV1CompanyFormSignResponse](../../models/operations/putv1companyformsignresponse.md)>**

