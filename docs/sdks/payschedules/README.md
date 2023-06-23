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
    authorization: "",
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

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.GetV1CompaniesCompanyIdPayPeriodsRequest](../../models/operations/getv1companiescompanyidpayperiodsrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdPayPeriodsResponse](../../models/operations/getv1companiescompanyidpayperiodsresponse.md)>**


## getV1CompaniesCompanyIdPaySchedules

The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdPaySchedulesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { PayScheduleFrequency } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
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

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetV1CompaniesCompanyIdPaySchedulesRequest](../../models/operations/getv1companiescompanyidpayschedulesrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdPaySchedulesResponse](../../models/operations/getv1companiescompanyidpayschedulesresponse.md)>**


## getV1CompaniesCompanyIdPaySchedulesPayScheduleId

The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { PayScheduleFrequency } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
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

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest](../../models/operations/getv1companiescompanyidpayschedulespayscheduleidrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse](../../models/operations/getv1companiescompanyidpayschedulespayscheduleidresponse.md)>**


## postV1CompaniesCompanyIdPaySchedules

Creates a new single default pay schedule for the company.

This creates one pay schedule during company onboarding and cannot be used if the company has processed a payroll. Creating multiple pay schedules at this time is not supported. To change a pay schedule, the end user will need to login to Gusto to edit their pay schedule.

Be sure to **[check state laws](https://www.dol.gov/agencies/whd/state/payday)** to know what schedule is right for your customers.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdPaySchedulesRequestBodyFrequency,
  PostV1CompaniesCompanyIdPaySchedulesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { PayScheduleFrequency } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.paySchedules.postV1CompaniesCompanyIdPaySchedules({
  requestBody: {
    anchorEndOfPayPeriod: "2020-05-08",
    anchorPayDate: "2020-05-15",
    day1: 524970,
    day2: 26522,
    frequency: PostV1CompaniesCompanyIdPaySchedulesRequestBodyFrequency.Monthly,
  },
  companyId: "error",
}).then((res: PostV1CompaniesCompanyIdPaySchedulesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PostV1CompaniesCompanyIdPaySchedulesRequest](../../models/operations/postv1companiescompanyidpayschedulesrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdPaySchedulesResponse](../../models/operations/postv1companiescompanyidpayschedulesresponse.md)>**


## putV1CompaniesCompanyIdPaySchedulesPayScheduleId

Updates a pay schedule.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { PayScheduleFrequency } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
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

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest](../../models/operations/putv1companiescompanyidpayschedulespayscheduleidrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse](../../models/operations/putv1companiescompanyidpayschedulespayscheduleidresponse.md)>**

