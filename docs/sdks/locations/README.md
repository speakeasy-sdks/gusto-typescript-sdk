# Locations
(*locations*)

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
import { GetV1CompaniesCompanyIdLocationsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "<value>";
const page: number = 4858.9;
const per: number = 6096.54;

  const res = await sdk.locations.getV1CompaniesCompanyIdLocations(companyId, page, per);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `companyId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The UUID of the company                                              |
| `page`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | The page that is requested. When unspecified, will load all objects. |
| `per`                                                                | *number*                                                             | :heavy_minus_sign:                                                   | Number of objects per page. When unspecified, will default to 25     |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdLocationsResponse](../../sdk/models/operations/getv1companiescompanyidlocationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getV1LocationsLocationId

Get a location.

scope: `companies:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1LocationsLocationIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const locationId: string = "<value>";

  const res = await sdk.locations.getV1LocationsLocationId(locationId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `locationId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the location                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1LocationsLocationIdResponse](../../sdk/models/operations/getv1locationslocationidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getV1LocationsLocationUuidMinimumWages

Get minimum wages for a location

scope: `companies:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1LocationsLocationUuidMinimumWagesRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const locationUuid: string = "<value>";
const effectiveDate: string = "2020-01-31";

  const res = await sdk.locations.getV1LocationsLocationUuidMinimumWages(locationUuid, effectiveDate);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `locationUuid`                                               | *string*                                                     | :heavy_check_mark:                                           | The UUID of the location                                     |                                                              |
| `effectiveDate`                                              | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | 2020-01-31                                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetV1LocationsLocationUuidMinimumWagesResponse](../../sdk/models/operations/getv1locationslocationuuidminimumwagesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postV1CompaniesCompanyIdLocationsJson

Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.

Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.

scope: `companies.write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdLocationsJsonRequest,
  PostV1CompaniesCompanyIdLocationsJsonRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "<value>";
const requestBody: PostV1CompaniesCompanyIdLocationsJsonRequestBody = {
  city: "New Svenberg",
  phoneNumber: "<value>",
  state: "South Dakota",
  street1: "<value>",
  zip: "45200-6236",
};

  const res = await sdk.locations.postV1CompaniesCompanyIdLocationsJson(companyId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The UUID of the company                                                                                                                        |
| `requestBody`                                                                                                                                  | [operations.PostV1CompaniesCompanyIdLocationsJsonRequestBody](../../sdk/models/operations/postv1companiescompanyidlocationsjsonrequestbody.md) | :heavy_minus_sign:                                                                                                                             | Create a company location.                                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdLocationsJsonResponse](../../sdk/models/operations/postv1companiescompanyidlocationsjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postV1CompaniesCompanyIdLocationsRaw

Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.

Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.

scope: `companies.write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdLocationsRawRequest,
  PostV1CompaniesCompanyIdLocationsRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "<value>";
const requestBody: Uint8Array = new TextEncoder().encode("0x3754FF0f8f");

  const res = await sdk.locations.postV1CompaniesCompanyIdLocationsRaw(companyId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `requestBody`                                                | *Uint8Array*                                                 | :heavy_minus_sign:                                           | Create a company location.                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdLocationsRawResponse](../../sdk/models/operations/postv1companiescompanyidlocationsrawresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putV1LocationsLocationId

Update a location.

scope: `companies.write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1LocationsLocationIdRequest, PutV1LocationsLocationIdRequestBody } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const locationId: string = "<value>";
const requestBody: PutV1LocationsLocationIdRequestBody = {
  version: "<value>",
};

  const res = await sdk.locations.putV1LocationsLocationId(locationId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `locationId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The UUID of the location                                                                                             |
| `requestBody`                                                                                                        | [operations.PutV1LocationsLocationIdRequestBody](../../sdk/models/operations/putv1locationslocationidrequestbody.md) | :heavy_minus_sign:                                                                                                   | Update a location                                                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PutV1LocationsLocationIdResponse](../../sdk/models/operations/putv1locationslocationidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
