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

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorUuid: string = "assumenda";
const formId: string = "ipsam";

sdk.contractorForms.getV1ContractorForm(contractorUuid, formId).then((res: GetV1ContractorFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor                                   |
| `formId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID or UUID of the form                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorFormResponse](../../models/operations/getv1contractorformresponse.md)>**


## getV1ContractorFormPdf

Get the link to the form PDF

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorFormPdfRequest, GetV1ContractorFormPdfResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorUuid: string = "alias";
const formId: string = "fugit";

sdk.contractorForms.getV1ContractorFormPdf(contractorUuid, formId).then((res: GetV1ContractorFormPdfResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor                                   |
| `formId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID or UUID of the form                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorFormPdfResponse](../../models/operations/getv1contractorformpdfresponse.md)>**


## getV1ContractorForms

Get a list of all contractor's forms

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorFormsRequest, GetV1ContractorFormsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorUuid: string = "dolorum";

sdk.contractorForms.getV1ContractorForms(contractorUuid).then((res: GetV1ContractorFormsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorFormsResponse](../../models/operations/getv1contractorformsresponse.md)>**


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
    authorization: "",
  },
});

sdk.contractorForms.postV1SandboxGenerate1099({
  contractorId: "excepturi",
  year: 270008,
}).then((res: PostV1SandboxGenerate1099Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PostV1SandboxGenerate1099RequestBody](../../models/operations/postv1sandboxgenerate1099requestbody.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PostV1SandboxGenerate1099Response](../../models/operations/postv1sandboxgenerate1099response.md)>**

