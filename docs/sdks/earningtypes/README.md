# earningTypes

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
import { DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.earningTypes.deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuid({
  companyId: "nobis",
  earningTypeUuid: "quos",
}).then((res: DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                          | [operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest](../../models/operations/deletev1companiescompanyidearningtypesearningtypeuuidrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


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
import { GetV1CompaniesCompanyIdEarningTypesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.earningTypes.getV1CompaniesCompanyIdEarningTypes({
  companyId: "tempore",
}).then((res: GetV1CompaniesCompanyIdEarningTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetV1CompaniesCompanyIdEarningTypesRequest](../../models/operations/getv1companiescompanyidearningtypesrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdEarningTypesResponse](../../models/operations/getv1companiescompanyidearningtypesresponse.md)>**


## postV1CompaniesCompanyIdEarningTypes

Create a custom earning type.

If an inactive earning type exists with the same name, this will reactivate it instead of creating a new one.

scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1CompaniesCompanyIdEarningTypesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.earningTypes.postV1CompaniesCompanyIdEarningTypes({
  requestBody: {
    name: "Kevin Willms",
  },
  companyId: "labore",
}).then((res: PostV1CompaniesCompanyIdEarningTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PostV1CompaniesCompanyIdEarningTypesRequest](../../models/operations/postv1companiescompanyidearningtypesrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdEarningTypesResponse](../../models/operations/postv1companiescompanyidearningtypesresponse.md)>**


## putV1CompaniesCompanyIdEarningTypesEarningTypeUuid

Update an earning type.

scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.earningTypes.putV1CompaniesCompanyIdEarningTypesEarningTypeUuid({
  requestBody: {
    name: "Mr. Sonya Bradtke",
  },
  companyId: "itaque",
  earningTypeUuid: "consequatur",
}).then((res: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                    | [operations.PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest](../../models/operations/putv1companiescompanyidearningtypesearningtypeuuidrequest.md) | :heavy_check_mark:                                                                                                                                           | The request object to use for the request.                                                                                                                   |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse](../../models/operations/putv1companiescompanyidearningtypesearningtypeuuidresponse.md)>**
