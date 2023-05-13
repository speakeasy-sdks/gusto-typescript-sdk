# paySchedules

### Available Operations

* [getV1CompaniesCompanyIdPayPeriods](#getv1companiescompanyidpayperiods) - Get pay periods for a company
* [getV1CompaniesCompanyIdPaySchedules](#getv1companiescompanyidpayschedules) - Get the pay schedules for a company
* [getV1CompaniesCompanyIdPaySchedulesPayScheduleId](#getv1companiescompanyidpayschedulespayscheduleid) - Get a pay schedule
* [postV1CompaniesCompanyIdPaySchedules](#postv1companiescompanyidpayschedules) - Create a new single pay schedule
* [putV1CompaniesCompanyIdPaySchedulesPayScheduleId](#putv1companiescompanyidpayschedulespayscheduleid) - Update a pay schedule

## getV1CompaniesCompanyIdPayPeriods

Pay periods are the foundation of payroll. Compensation, time & attendance, taxes, and expense reports all rely on when they happened. To begin submitting information for a given payroll, we need to agree on the time period.

By default, this endpoint returns every current and past pay period for a company. Since companies can process payroll as often as every week, there can be up to 53 pay periods a year. If a company has been running payroll with Gusto for five years, this endpoint could return up to 265 pay periods. Use the `start_date` and `end_date` parameters to reduce the scope of the response.

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdPayPeriodsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.paySchedules.getV1CompaniesCompanyIdPayPeriods({
  companyId: "praesentium",
  endDate: "2020-01-31",
  startDate: "2020-01-01",
}).then((res: GetV1CompaniesCompanyIdPayPeriodsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1CompaniesCompanyIdPaySchedules

The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdPaySchedulesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { PayScheduleFrequencyEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.paySchedules.getV1CompaniesCompanyIdPaySchedules({
  companyId: "facilis",
  page: 3103.81,
  per: 2777.73,
}).then((res: GetV1CompaniesCompanyIdPaySchedulesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1CompaniesCompanyIdPaySchedulesPayScheduleId

The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { PayScheduleFrequencyEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.paySchedules.getV1CompaniesCompanyIdPaySchedulesPayScheduleId({
  companyId: "ipsam",
  payScheduleId: "debitis",
}).then((res: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postV1CompaniesCompanyIdPaySchedules

Creates a new single default pay schedule for the company.

This creates one pay schedule during company onboarding and cannot be used if the company has processed a payroll. Creating multiple pay schedules at this time is not supported. To change a pay schedule, the end user will need to login to Gusto to edit their pay schedule.

Be sure to **[check state laws](https://www.dol.gov/agencies/whd/state/payday)** to know what schedule is right for your customers.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdPaySchedulesRequestBodyFrequencyEnum,
  PostV1CompaniesCompanyIdPaySchedulesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { PayScheduleFrequencyEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.paySchedules.postV1CompaniesCompanyIdPaySchedules({
  requestBody: {
    anchorEndOfPayPeriod: "2020-05-08",
    anchorPayDate: "2020-05-15",
    day1: 524970,
    day2: 26522,
    frequency: PostV1CompaniesCompanyIdPaySchedulesRequestBodyFrequencyEnum.Monthly,
  },
  companyId: "error",
}).then((res: PostV1CompaniesCompanyIdPaySchedulesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putV1CompaniesCompanyIdPaySchedulesPayScheduleId

Updates a pay schedule.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { PayScheduleFrequencyEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.paySchedules.putV1CompaniesCompanyIdPaySchedulesPayScheduleId({
  requestBody: {
    autoPilot: false,
    version: "veniam",
  },
  companyId: "minima",
  payScheduleId: "recusandae",
}).then((res: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
