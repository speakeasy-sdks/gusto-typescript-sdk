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
import { DeleteV1ExternalPayrollResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.externalPayrolls.deleteV1ExternalPayroll({
  companyUuid: "officia",
  externalPayrollId: "maxime",
}).then((res: DeleteV1ExternalPayrollResponse) => {
  if (res.statusCode == 200) {
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
import { GetV1CompanyExternalPayrollsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.externalPayrolls.getV1CompanyExternalPayrolls({
  companyUuid: "dignissimos",
}).then((res: GetV1CompanyExternalPayrollsResponse) => {
  if (res.statusCode == 200) {
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
import { GetV1ExternalPayrollResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.externalPayrolls.getV1ExternalPayroll({
  companyUuid: "officia",
  externalPayrollId: "asperiores",
}).then((res: GetV1ExternalPayrollResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1ExternalPayrollCalculateTaxes

Get tax suggestions for an external payroll. Earnings and/or benefits data must be saved prior to the calculation in order to retrieve accurate tax calculation.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ExternalPayrollCalculateTaxesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.externalPayrolls.getV1ExternalPayrollCalculateTaxes({
  companyUuid: "nemo",
  externalPayrollId: "quae",
}).then((res: GetV1ExternalPayrollCalculateTaxesResponse) => {
  if (res.statusCode == 200) {
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
import { PostV1ExternalPayrollResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.externalPayrolls.postV1ExternalPayroll({
  requestBody: {
    checkDate: "quaerat",
    paymentPeriodEndDate: "porro",
    paymentPeriodStartDate: "quod",
  },
  companyUuid: "labore",
}).then((res: PostV1ExternalPayrollResponse) => {
  if (res.statusCode == 200) {
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
  PutV1ExternalPayrollRequestBodyExternalPayrollItemsEarningsEarningTypeEnum,
  PutV1ExternalPayrollResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.externalPayrolls.putV1ExternalPayroll({
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
}).then((res: PutV1ExternalPayrollResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
