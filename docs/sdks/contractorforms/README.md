# ContractorForms
(*contractorForms*)

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
import { GetV1ContractorFormRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const contractorUuid: string = "<value>";
const formId: string = "<value>";

  const res = await sdk.contractorForms.getV1ContractorForm(contractorUuid, formId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor                                   |
| `formId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID or UUID of the form                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorFormResponse](../../sdk/models/operations/getv1contractorformresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getV1ContractorFormPdf

Get the link to the form PDF

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorFormPdfRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const contractorUuid: string = "<value>";
const formId: string = "<value>";

  const res = await sdk.contractorForms.getV1ContractorFormPdf(contractorUuid, formId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor                                   |
| `formId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID or UUID of the form                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorFormPdfResponse](../../sdk/models/operations/getv1contractorformpdfresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getV1ContractorForms

Get a list of all contractor's forms

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorFormsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const contractorUuid: string = "<value>";

  const res = await sdk.contractorForms.getV1ContractorForms(contractorUuid);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorFormsResponse](../../sdk/models/operations/getv1contractorformsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postV1SandboxGenerate1099

Generates a 1099 document for testing purposes.

> 📘
>
> This endpoint can only be used in the Sandbox environments.

`scope: contractors:write`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.contractorForms.postV1SandboxGenerate1099({
    contractorId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PostV1SandboxGenerate1099RequestBody](../../sdk/models/operations/postv1sandboxgenerate1099requestbody.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PostV1SandboxGenerate1099Response](../../sdk/models/operations/postv1sandboxgenerate1099response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
