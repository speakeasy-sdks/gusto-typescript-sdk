# PaySchedules
(*paySchedules*)

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

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "molestiae";
const endDate: string = "2020-01-31";
const startDate: string = "2020-01-01";

sdk.paySchedules.getV1CompaniesCompanyIdPayPeriods(companyId, endDate, startDate).then((res: GetV1CompaniesCompanyIdPayPeriodsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |                                                              |
| `endDate`                                                    | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | 2020-01-31                                                   |
| `startDate`                                                  | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | 2020-01-01                                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdPayPeriodsResponse](../../models/operations/getv1companiescompanyidpayperiodsresponse.md)>**


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

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "accusantium";
const page: number = 7836.48;
const per: number = 4304.02;

sdk.paySchedules.getV1CompaniesCompanyIdPaySchedules(companyId, page, per).then((res: GetV1CompaniesCompanyIdPaySchedulesResponse) => {
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

**Promise<[operations.GetV1CompaniesCompanyIdPaySchedulesResponse](../../models/operations/getv1companiescompanyidpayschedulesresponse.md)>**


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

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "quas";
const payScheduleId: string = "praesentium";

sdk.paySchedules.getV1CompaniesCompanyIdPaySchedulesPayScheduleId(companyId, payScheduleId).then((res: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `payScheduleId`                                              | *string*                                                     | :heavy_check_mark:                                           | The UUID of the pay schedule                                 |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


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
  PostV1CompaniesCompanyIdPaySchedulesRequest,
  PostV1CompaniesCompanyIdPaySchedulesRequestBody,
  PostV1CompaniesCompanyIdPaySchedulesRequestBodyFrequency,
  PostV1CompaniesCompanyIdPaySchedulesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "consequuntur";
const requestBody: PostV1CompaniesCompanyIdPaySchedulesRequestBody = {
  anchorEndOfPayPeriod: "2020-05-08",
  anchorPayDate: "2020-05-15",
  day1: 536178,
  day2: 143829,
  frequency: PostV1CompaniesCompanyIdPaySchedulesRequestBodyFrequency.TwicePerMonth,
};

sdk.paySchedules.postV1CompaniesCompanyIdPaySchedules(companyId, requestBody).then((res: PostV1CompaniesCompanyIdPaySchedulesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The UUID of the company                                                                                                                  |
| `requestBody`                                                                                                                            | [operations.PostV1CompaniesCompanyIdPaySchedulesRequestBody](../../models/operations/postv1companiescompanyidpayschedulesrequestbody.md) | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdPaySchedulesResponse](../../models/operations/postv1companiescompanyidpayschedulesresponse.md)>**


## putV1CompaniesCompanyIdPaySchedulesPayScheduleId

Updates a pay schedule.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest,
  PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody,
  PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "mollitia";
const payScheduleId: string = "incidunt";
const requestBody: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody = {
  autoPilot: false,
  version: "atque",
};

sdk.paySchedules.putV1CompaniesCompanyIdPaySchedulesPayScheduleId(companyId, payScheduleId, requestBody).then((res: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                        | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The UUID of the company                                                                                                                                          |
| `payScheduleId`                                                                                                                                                  | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The UUID of the pay schedule                                                                                                                                     |
| `requestBody`                                                                                                                                                    | [operations.PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody](../../models/operations/putv1companiescompanyidpayschedulespayscheduleidrequestbody.md) | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |
| `config`                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                     | :heavy_minus_sign:                                                                                                                                               | Available config options for making requests.                                                                                                                    |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse](../../models/operations/putv1companiescompanyidpayschedulespayscheduleidresponse.md)>**

