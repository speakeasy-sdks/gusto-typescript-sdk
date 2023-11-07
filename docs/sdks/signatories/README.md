# Signatories
(*.signatories*)

### Available Operations

* [deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuid](#deletev1companiescompanyuuidsignatoriessignatoryuuid) - Delete a signatory
* [getV1CompaniesCompanyUuidSignatories](#getv1companiescompanyuuidsignatories) - Get all company signatories
* [postV1CompaniesCompanyUuidSignatoriesInvite](#postv1companiescompanyuuidsignatoriesinvite) - Invite a signatory
* [postV1CompanySignatories](#postv1companysignatories) - Create a signatory
* [putV1CompaniesCompanyUuidSignatoriesSignatoryUuid](#putv1companiescompanyuuidsignatoriessignatoryuuid) - Update a signatory

## deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuid

Delete a company signatory.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const signatoryUuid: string = "string";

  const res = await sdk.signatories.deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuid(companyUuid, signatoryUuid);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `signatoryUuid`                                              | *string*                                                     | :heavy_check_mark:                                           | The UUID of the signatory                                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse](../../models/operations/deletev1companiescompanyuuidsignatoriessignatoryuuidresponse.md)>**


## getV1CompaniesCompanyUuidSignatories

Returns company signatories. Currently we only support a single signatory per company.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyUuidSignatoriesRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";

  const res = await sdk.signatories.getV1CompaniesCompanyUuidSignatories(companyUuid);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompaniesCompanyUuidSignatoriesResponse](../../models/operations/getv1companiescompanyuuidsignatoriesresponse.md)>**


## postV1CompaniesCompanyUuidSignatoriesInvite

Create a signatory with minimal information. This signatory can be invited to provide more information through the `PUT /v1/companies/{company_uuid}/signatories/{signatory_uuid}` endpoint. This will start the identity verification process and allow the signatory to be verified to sign documents.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyUuidSignatoriesInviteRequest,
  PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const requestBody: PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody = {
  email: "Ellis_Morissette@yahoo.com",
};

  const res = await sdk.signatories.postV1CompaniesCompanyUuidSignatoriesInvite(companyUuid, requestBody);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyUuid`                                                                                                                                          | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The UUID of the company                                                                                                                                |
| `requestBody`                                                                                                                                          | [operations.PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody](../../models/operations/postv1companiescompanyuuidsignatoriesinviterequestbody.md) | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.PostV1CompaniesCompanyUuidSignatoriesInviteResponse](../../models/operations/postv1companiescompanyuuidsignatoriesinviteresponse.md)>**


## postV1CompanySignatories

Create a company signatory with complete information. A signatory can legally sign forms once the identity verification process is successful.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  HomeAddress,
  PostV1CompanySignatoriesRequest,
  PostV1CompanySignatoriesRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const requestBody: PostV1CompanySignatoriesRequestBody = {
  birthday: "string",
  email: "Libby.Cole5@gmail.com",
  firstName: "Ian",
  homeAddress: {
    city: "South Maggieshire",
    state: "string",
    street1: "string",
    zip: "string",
  },
  lastName: "Quitzon",
  ssn: "string",
  title: "string",
};

  const res = await sdk.signatories.postV1CompanySignatories(companyUuid, requestBody);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The UUID of the company                                                                                          |
| `requestBody`                                                                                                    | [operations.PostV1CompanySignatoriesRequestBody](../../models/operations/postv1companysignatoriesrequestbody.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostV1CompanySignatoriesResponse](../../models/operations/postv1companysignatoriesresponse.md)>**


## putV1CompaniesCompanyUuidSignatoriesSignatoryUuid

Update a signatory that has been either invited or created. If the signatory has been created with minimal information through the `POST /v1/companies/{company_uuid}/signatories/invite` endpoint, then the first update must contain all attributes specified in the request body in order to start the identity verification process.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress,
  PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
  PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const signatoryUuid: string = "string";
const requestBody: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody = {
  homeAddress: {},
};

  const res = await sdk.signatories.putV1CompaniesCompanyUuidSignatoriesSignatoryUuid(companyUuid, signatoryUuid, requestBody);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyUuid`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The UUID of the company                                                                                                                                            |
| `signatoryUuid`                                                                                                                                                    | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The UUID of the signatory                                                                                                                                          |
| `requestBody`                                                                                                                                                      | [operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody](../../models/operations/putv1companiescompanyuuidsignatoriessignatoryuuidrequestbody.md) | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse](../../models/operations/putv1companiescompanyuuidsignatoriessignatoryuuidresponse.md)>**

