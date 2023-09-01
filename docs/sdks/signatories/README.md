# signatories

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
import {
  DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
  DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "neque";
const signatoryUuid: string = "quo";

sdk.signatories.deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuid(companyUuid, signatoryUuid).then((res: DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import {
  GetV1CompaniesCompanyUuidSignatoriesRequest,
  GetV1CompaniesCompanyUuidSignatoriesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "deleniti";

sdk.signatories.getV1CompaniesCompanyUuidSignatories(companyUuid).then((res: GetV1CompaniesCompanyUuidSignatoriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
  PostV1CompaniesCompanyUuidSignatoriesInviteResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "quibusdam";
const requestBody: PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody = {
  email: "Brock.Wolf@yahoo.com",
  firstName: "Rory",
  lastName: "Block",
  title: "Dr.",
};

sdk.signatories.postV1CompaniesCompanyUuidSignatoriesInvite(companyUuid, requestBody).then((res: PostV1CompaniesCompanyUuidSignatoriesInviteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
  PostV1CompanySignatoriesRequest,
  PostV1CompanySignatoriesRequestBody,
  PostV1CompanySignatoriesRequestBodyHomeAddress,
  PostV1CompanySignatoriesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "libero";
const requestBody: PostV1CompanySignatoriesRequestBody = {
  birthday: "architecto",
  email: "Carli24@hotmail.com",
  firstName: "Arch",
  homeAddress: {
    city: "South Gwenland",
    state: "vero",
    street1: "excepturi",
    street2: "eum",
    zip: "velit",
  },
  lastName: "Graham",
  middleInitial: "perspiciatis",
  phone: "1-279-690-3926 x22400",
  ssn: "consequatur",
  title: "Miss",
};

sdk.signatories.postV1CompanySignatories(companyUuid, requestBody).then((res: PostV1CompanySignatoriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
  PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
  PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody,
  PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBodyHomeAddress,
  PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "recusandae";
const signatoryUuid: string = "ea";
const requestBody: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody = {
  birthday: "quidem",
  firstName: "Gavin",
  homeAddress: {
    city: "Schowalterstead",
    state: "expedita",
    street1: "deleniti",
    street2: "a",
    zip: "voluptate",
  },
  lastName: "Herman",
  middleInitial: "unde",
  phone: "1-773-466-4208 x21023",
  ssn: "qui",
  title: "Miss",
  version: "ex",
};

sdk.signatories.putV1CompaniesCompanyUuidSignatoriesSignatoryUuid(companyUuid, signatoryUuid, requestBody).then((res: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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

