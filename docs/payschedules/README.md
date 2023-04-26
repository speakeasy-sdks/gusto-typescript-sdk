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
import {
  GetV1CompaniesCompanyIdPayPeriodsRequest,
  GetV1CompaniesCompanyIdPayPeriodsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompaniesCompanyIdPayPeriodsRequest = {
  companyId: "praesentium",
  endDate: "2020-01-31",
  startDate: "2020-01-01",
};

sdk.paySchedules.getV1CompaniesCompanyIdPayPeriods(req).then((res: GetV1CompaniesCompanyIdPayPeriodsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import {
  GetV1CompaniesCompanyIdPaySchedulesRequest,
  GetV1CompaniesCompanyIdPaySchedulesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { PayScheduleFrequencyEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompaniesCompanyIdPaySchedulesRequest = {
  companyId: "facilis",
  page: 3103.81,
  per: 2777.73,
};

sdk.paySchedules.getV1CompaniesCompanyIdPaySchedules(req).then((res: GetV1CompaniesCompanyIdPaySchedulesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import {
  GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest,
  GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { PayScheduleFrequencyEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest = {
  companyId: "ipsam",
  payScheduleId: "debitis",
};

sdk.paySchedules.getV1CompaniesCompanyIdPaySchedulesPayScheduleId(req).then((res: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
  PostV1CompaniesCompanyIdPaySchedulesRequest,
  PostV1CompaniesCompanyIdPaySchedulesRequestBodyFrequencyEnum,
  PostV1CompaniesCompanyIdPaySchedulesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { PayScheduleFrequencyEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1CompaniesCompanyIdPaySchedulesRequest = {
  requestBody: {
    anchorEndOfPayPeriod: "2020-05-08",
    anchorPayDate: "2020-05-15",
    day1: 524970,
    day2: 26522,
    frequency: PostV1CompaniesCompanyIdPaySchedulesRequestBodyFrequencyEnum.Monthly,
  },
  companyId: "error",
};

sdk.paySchedules.postV1CompaniesCompanyIdPaySchedules(req).then((res: PostV1CompaniesCompanyIdPaySchedulesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1CompaniesCompanyIdPaySchedulesPayScheduleId

Updates a pay schedule.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest,
  PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { PayScheduleFrequencyEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest = {
  requestBody: {
    autoPilot: false,
    version: "veniam",
  },
  companyId: "minima",
  payScheduleId: "recusandae",
};

sdk.paySchedules.putV1CompaniesCompanyIdPaySchedulesPayScheduleId(req).then((res: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
