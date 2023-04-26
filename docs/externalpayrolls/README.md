# externalPayrolls

### Available Operations

* [deleteV1ExternalPayroll](#deletev1externalpayroll) - Delete an external payroll
* [getV1CompanyExternalPayrolls](#getv1companyexternalpayrolls) - Get external payrolls for a company
* [getV1ExternalPayroll](#getv1externalpayroll) - Get an external payroll
* [getV1ExternalPayrollCalculateTaxes](#getv1externalpayrollcalculatetaxes) - Get tax suggestions for an external payroll
* [postV1ExternalPayroll](#postv1externalpayroll) - Create a new external payroll for a company
* [putV1ExternalPayroll](#putv1externalpayroll) - Update an external payroll

## deleteV1ExternalPayroll

Delete an external payroll.
scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1ExternalPayrollRequest, DeleteV1ExternalPayrollResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteV1ExternalPayrollRequest = {
  companyUuid: "officia",
  externalPayrollId: "maxime",
};

sdk.externalPayrolls.deleteV1ExternalPayroll(req).then((res: DeleteV1ExternalPayrollResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1CompanyExternalPayrolls

Get an external payroll for a given company.
scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyExternalPayrollsRequest, GetV1CompanyExternalPayrollsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompanyExternalPayrollsRequest = {
  companyUuid: "dignissimos",
};

sdk.externalPayrolls.getV1CompanyExternalPayrolls(req).then((res: GetV1CompanyExternalPayrollsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1ExternalPayroll

Get an external payroll for a given company.
scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ExternalPayrollRequest, GetV1ExternalPayrollResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1ExternalPayrollRequest = {
  companyUuid: "officia",
  externalPayrollId: "asperiores",
};

sdk.externalPayrolls.getV1ExternalPayroll(req).then((res: GetV1ExternalPayrollResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1ExternalPayrollCalculateTaxes

Get tax suggestions for an external payroll. Earnings and/or benefits data must be saved prior to the calculation in order to retrieve accurate tax calculation.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1ExternalPayrollCalculateTaxesRequest,
  GetV1ExternalPayrollCalculateTaxesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1ExternalPayrollCalculateTaxesRequest = {
  companyUuid: "nemo",
  externalPayrollId: "quae",
};

sdk.externalPayrolls.getV1ExternalPayrollCalculateTaxes(req).then((res: GetV1ExternalPayrollCalculateTaxesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postV1ExternalPayroll

Creates a new external payroll for the company.
scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1ExternalPayrollRequest, PostV1ExternalPayrollResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1ExternalPayrollRequest = {
  requestBody: {
    checkDate: "quaerat",
    paymentPeriodEndDate: "porro",
    paymentPeriodStartDate: "quod",
  },
  companyUuid: "labore",
};

sdk.externalPayrolls.postV1ExternalPayroll(req).then((res: PostV1ExternalPayrollResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1ExternalPayroll

Update an external payroll with a list of external payroll items
scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1ExternalPayrollRequest,
  PutV1ExternalPayrollRequestBodyExternalPayrollItemsEarningsEarningTypeEnum,
  PutV1ExternalPayrollResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1ExternalPayrollRequest = {
  requestBody: {
    externalPayrollItems: [
      {
        benefits: [
          {
            benefitId: 683573,
            companyContributionAmount: "id",
            employeeDeductionAmount: "suscipit",
          },
        ],
        earnings: [
          {
            amount: "culpa",
            earningId: 665859,
            earningType: PutV1ExternalPayrollRequestBodyExternalPayrollItemsEarningsEarningTypeEnum.CompanyEarningType,
            hours: "totam",
          },
        ],
        employeeUuid: "fugiat",
        taxes: [
          {
            amount: "ducimus",
            taxId: 554688,
          },
          {
            amount: "vel",
            taxId: 287051,
          },
        ],
      },
    ],
    replaceFields: false,
  },
  companyUuid: "possimus",
  externalPayrollId: "facilis",
};

sdk.externalPayrolls.putV1ExternalPayroll(req).then((res: PutV1ExternalPayrollResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
