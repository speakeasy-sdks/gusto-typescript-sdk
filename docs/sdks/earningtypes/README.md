# EarningTypes
(*earningTypes*)

### Available Operations

* [deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuid](#deletev1companiescompanyidearningtypesearningtypeuuid) - Deactivate an earning type
* [getV1CompaniesCompanyIdEarningTypes](#getv1companiescompanyidearningtypes) - Get all earning types for a company
* [postV1CompaniesCompanyIdEarningTypes](#postv1companiescompanyidearningtypes) - Create a custom earning type
* [putV1CompaniesCompanyIdEarningTypesEarningTypeUuid](#putv1companiescompanyidearningtypesearningtypeuuid) - Update an earning type

## deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuid

Deactivate an earning type.

scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const earningTypeUuid: string = "string";

  const res = await sdk.earningTypes.deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuid(companyId, earningTypeUuid);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `earningTypeUuid`                                            | *string*                                                     | :heavy_check_mark:                                           | The UUID of the earning type                                 |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse](../../models/operations/deletev1companiescompanyidearningtypesearningtypeuuidresponse.md)>**


## getV1CompaniesCompanyIdEarningTypes

A payroll item in Gusto is associated to an earning type to name the type of earning described by the payroll item.

#### Default Earning Type
Certain earning types are special because they have tax considerations. Those earning types are mostly the same for every company depending on its legal structure (LLC, Corporation, etc.)

#### Custom Earning Type
Custom earning types are all the other earning types added specifically for a company.

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdEarningTypesRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";

  const res = await sdk.earningTypes.getV1CompaniesCompanyIdEarningTypes(companyId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdEarningTypesResponse](../../models/operations/getv1companiescompanyidearningtypesresponse.md)>**


## postV1CompaniesCompanyIdEarningTypes

Create a custom earning type.

If an inactive earning type exists with the same name, this will reactivate it instead of creating a new one.

scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdEarningTypesRequest,
  PostV1CompaniesCompanyIdEarningTypesRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const requestBody: PostV1CompaniesCompanyIdEarningTypesRequestBody = {
  name: "string",
};

  const res = await sdk.earningTypes.postV1CompaniesCompanyIdEarningTypes(companyId, requestBody);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The UUID of the company                                                                                                                  |
| `requestBody`                                                                                                                            | [operations.PostV1CompaniesCompanyIdEarningTypesRequestBody](../../models/operations/postv1companiescompanyidearningtypesrequestbody.md) | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdEarningTypesResponse](../../models/operations/postv1companiescompanyidearningtypesresponse.md)>**


## putV1CompaniesCompanyIdEarningTypesEarningTypeUuid

Update an earning type.

scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest,
  PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const earningTypeUuid: string = "string";
const requestBody: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody = {};

  const res = await sdk.earningTypes.putV1CompaniesCompanyIdEarningTypesEarningTypeUuid(companyId, earningTypeUuid, requestBody);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                            | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                                          | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | The UUID of the company                                                                                                                                              |
| `earningTypeUuid`                                                                                                                                                    | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | The UUID of the earning type                                                                                                                                         |
| `requestBody`                                                                                                                                                        | [operations.PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody](../../models/operations/putv1companiescompanyidearningtypesearningtypeuuidrequestbody.md) | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `config`                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                         | :heavy_minus_sign:                                                                                                                                                   | Available config options for making requests.                                                                                                                        |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse](../../models/operations/putv1companiescompanyidearningtypesearningtypeuuidresponse.md)>**

