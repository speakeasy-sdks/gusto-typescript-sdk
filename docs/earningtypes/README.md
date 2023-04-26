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
import {
  DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest,
  DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest = {
  companyId: "nobis",
  earningTypeUuid: "quos",
};

sdk.earningTypes.deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuid(req).then((res: DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

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
import {
  GetV1CompaniesCompanyIdEarningTypesRequest,
  GetV1CompaniesCompanyIdEarningTypesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompaniesCompanyIdEarningTypesRequest = {
  companyId: "tempore",
};

sdk.earningTypes.getV1CompaniesCompanyIdEarningTypes(req).then((res: GetV1CompaniesCompanyIdEarningTypesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postV1CompaniesCompanyIdEarningTypes

Create a custom earning type.

If an inactive earning type exists with the same name, this will reactivate it instead of creating a new one.

scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdEarningTypesRequest,
  PostV1CompaniesCompanyIdEarningTypesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1CompaniesCompanyIdEarningTypesRequest = {
  requestBody: {
    name: "Kevin Willms",
  },
  companyId: "labore",
};

sdk.earningTypes.postV1CompaniesCompanyIdEarningTypes(req).then((res: PostV1CompaniesCompanyIdEarningTypesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1CompaniesCompanyIdEarningTypesEarningTypeUuid

Update an earning type.

scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest,
  PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest = {
  requestBody: {
    name: "Mr. Sonya Bradtke",
  },
  companyId: "itaque",
  earningTypeUuid: "consequatur",
};

sdk.earningTypes.putV1CompaniesCompanyIdEarningTypesEarningTypeUuid(req).then((res: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
