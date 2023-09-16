# Locations

### Available Operations

* [getV1CompaniesCompanyIdLocations](#getv1companiescompanyidlocations) - Get company locations
* [getV1LocationsLocationId](#getv1locationslocationid) - Get a location
* [getV1LocationsLocationUuidMinimumWages](#getv1locationslocationuuidminimumwages) - Get minimum wages for a location
* [postV1CompaniesCompanyIdLocationsJson](#postv1companiescompanyidlocationsjson) - Create a company location
* [postV1CompaniesCompanyIdLocationsRaw](#postv1companiescompanyidlocationsraw) - Create a company location
* [putV1LocationsLocationId](#putv1locationslocationid) - Update a location

## getV1CompaniesCompanyIdLocations

Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.

Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.

scope: `companies:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1CompaniesCompanyIdLocationsRequest,
  GetV1CompaniesCompanyIdLocationsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "eos";
const page: number = 3738.13;
const per: number = 698.59;

sdk.locations.getV1CompaniesCompanyIdLocations(companyId, page, per).then((res: GetV1CompaniesCompanyIdLocationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `companyId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The UUID of the company                                              |
| `page`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | The page that is requested. When unspecified, will load all objects. |
| `per`                                                                | *number*                                                             | :heavy_minus_sign:                                                   | Number of objects per page. When unspecified, will default to 25     |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdLocationsResponse](../../models/operations/getv1companiescompanyidlocationsresponse.md)>**


## getV1LocationsLocationId

Get a location.

scope: `companies:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1LocationsLocationIdRequest, GetV1LocationsLocationIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const locationId: string = "cupiditate";

sdk.locations.getV1LocationsLocationId(locationId).then((res: GetV1LocationsLocationIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `locationId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the location                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1LocationsLocationIdResponse](../../models/operations/getv1locationslocationidresponse.md)>**


## getV1LocationsLocationUuidMinimumWages

Get minimum wages for a location

scope: `companies:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1LocationsLocationUuidMinimumWagesRequest,
  GetV1LocationsLocationUuidMinimumWagesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const locationUuid: string = "consequatur";
const effectiveDate: string = "2020-01-31";

sdk.locations.getV1LocationsLocationUuidMinimumWages(locationUuid, effectiveDate).then((res: GetV1LocationsLocationUuidMinimumWagesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `locationUuid`                                               | *string*                                                     | :heavy_check_mark:                                           | The UUID of the location                                     |                                                              |
| `effectiveDate`                                              | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | 2020-01-31                                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetV1LocationsLocationUuidMinimumWagesResponse](../../models/operations/getv1locationslocationuuidminimumwagesresponse.md)>**


## postV1CompaniesCompanyIdLocationsJson

Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.

Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.

scope: `companies.write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdLocationsApplicationJSON,
  PostV1CompaniesCompanyIdLocationsJsonRequest,
  PostV1CompaniesCompanyIdLocationsJsonResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "tempora";
const requestBody: PostV1CompaniesCompanyIdLocationsApplicationJSON = {
  city: "Gulfport",
  country: "Bulgaria",
  filingAddress: false,
  mailingAddress: false,
  phoneNumber: "sequi",
  state: "quo",
  street1: "esse",
  street2: "recusandae",
  zip: "aperiam",
};

sdk.locations.postV1CompaniesCompanyIdLocationsJson(companyId, requestBody).then((res: PostV1CompaniesCompanyIdLocationsJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The UUID of the company                                                                                                                    |
| `requestBody`                                                                                                                              | [operations.PostV1CompaniesCompanyIdLocationsApplicationJSON](../../models/operations/postv1companiescompanyidlocationsapplicationjson.md) | :heavy_minus_sign:                                                                                                                         | Create a company location.                                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdLocationsJsonResponse](../../models/operations/postv1companiescompanyidlocationsjsonresponse.md)>**


## postV1CompaniesCompanyIdLocationsRaw

Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.

Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.

scope: `companies.write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdLocationsApplicationXML,
  PostV1CompaniesCompanyIdLocationsRawRequest,
  PostV1CompaniesCompanyIdLocationsRawResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "distinctio";
const requestBody: Uint8Array = "quod".encode();

sdk.locations.postV1CompaniesCompanyIdLocationsRaw(companyId, requestBody).then((res: PostV1CompaniesCompanyIdLocationsRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `requestBody`                                                | *Uint8Array*                                                 | :heavy_minus_sign:                                           | Create a company location.                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdLocationsRawResponse](../../models/operations/postv1companiescompanyidlocationsrawresponse.md)>**


## putV1LocationsLocationId

Update a location.

scope: `companies.write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1LocationsLocationIdRequest,
  PutV1LocationsLocationIdRequestBody,
  PutV1LocationsLocationIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const locationId: string = "dignissimos";
const requestBody: PutV1LocationsLocationIdRequestBody = {
  city: "South Josiahside",
  country: "French Southern Territories",
  filingAddress: false,
  mailingAddress: false,
  phoneNumber: "odio",
  state: "occaecati",
  street1: "commodi",
  street2: "sapiente",
  version: "dolores",
  zip: "deserunt",
};

sdk.locations.putV1LocationsLocationId(locationId, requestBody).then((res: PutV1LocationsLocationIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `locationId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The UUID of the location                                                                                         |
| `requestBody`                                                                                                    | [operations.PutV1LocationsLocationIdRequestBody](../../models/operations/putv1locationslocationidrequestbody.md) | :heavy_minus_sign:                                                                                               | Update a location                                                                                                |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PutV1LocationsLocationIdResponse](../../models/operations/putv1locationslocationidresponse.md)>**

