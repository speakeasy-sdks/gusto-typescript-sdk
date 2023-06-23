# locations

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
import { GetV1CompaniesCompanyIdLocationsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.locations.getV1CompaniesCompanyIdLocations("atque", 6719.57, 7241.48).then((res: GetV1CompaniesCompanyIdLocationsResponse) => {
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
import { GetV1LocationsLocationIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.locations.getV1LocationsLocationId("tenetur").then((res: GetV1LocationsLocationIdResponse) => {
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
import { GetV1LocationsLocationUuidMinimumWagesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { RFCDate } from "@speakeasy-sdks/gusto/dist/sdk/types";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.locations.getV1LocationsLocationUuidMinimumWages("laboriosam", "2020-01-31").then((res: GetV1LocationsLocationUuidMinimumWagesResponse) => {
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
import { PostV1CompaniesCompanyIdLocationsJsonResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.locations.postV1CompaniesCompanyIdLocationsJson("alias", {
  city: "Lake Jackeline",
  country: "Morocco",
  filingAddress: false,
  mailingAddress: false,
  phoneNumber: "reiciendis",
  state: "provident",
  street1: "repellendus",
  street2: "delectus",
  zip: "voluptates",
}).then((res: PostV1CompaniesCompanyIdLocationsJsonResponse) => {
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
import { PostV1CompaniesCompanyIdLocationsRawResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.locations.postV1CompaniesCompanyIdLocationsRaw("perferendis", "est".encode()).then((res: PostV1CompaniesCompanyIdLocationsRawResponse) => {
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
import { PutV1LocationsLocationIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.locations.putV1LocationsLocationId("quidem", {
  city: "Raquelchester",
  country: "Lithuania",
  filingAddress: false,
  mailingAddress: false,
  phoneNumber: "mollitia",
  state: "veniam",
  street1: "voluptatem",
  street2: "quisquam",
  version: "repudiandae",
  zip: "quasi",
}).then((res: PutV1LocationsLocationIdResponse) => {
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

