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
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.locations.getV1CompaniesCompanyIdLocations({
  companyId: "architecto",
  page: 3828.08,
  per: 9602.57,
}).then((res: GetV1CompaniesCompanyIdLocationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1LocationsLocationId

Get a location.

scope: `companies:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1LocationsLocationIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.locations.getV1LocationsLocationId({
  locationId: "debitis",
}).then((res: GetV1LocationsLocationIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.locations.getV1LocationsLocationUuidMinimumWages({
  effectiveDate: "2020-01-31",
  locationUuid: "illo",
}).then((res: GetV1LocationsLocationUuidMinimumWagesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.locations.postV1CompaniesCompanyIdLocationsJson({
  requestBody: {
    city: "Ames",
    country: "Malta",
    filingAddress: false,
    mailingAddress: false,
    phoneNumber: "maiores",
    state: "incidunt",
    street1: "sed",
    street2: "provident",
    zip: "eius",
  },
  companyId: "necessitatibus",
}).then((res: PostV1CompaniesCompanyIdLocationsJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.locations.postV1CompaniesCompanyIdLocationsRaw({
  requestBody: "ipsum".encode(),
  companyId: "ea",
}).then((res: PostV1CompaniesCompanyIdLocationsRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putV1LocationsLocationId

Update a location.

scope: `companies.write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1LocationsLocationIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.locations.putV1LocationsLocationId({
  requestBody: {
    city: "Katrinaworth",
    country: "Ethiopia",
    filingAddress: false,
    mailingAddress: false,
    phoneNumber: "tempora",
    state: "voluptate",
    street1: "reiciendis",
    street2: "ex",
    version: "sit",
    zip: "non",
  },
  locationId: "officiis",
}).then((res: PutV1LocationsLocationIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
