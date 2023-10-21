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
import { GetV1CompaniesCompanyIdPayPeriodsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const endDate: string = "2020-01-31";
const startDate: string = "2020-01-01";

  const res = await sdk.paySchedules.getV1CompaniesCompanyIdPayPeriods(companyId, endDate, startDate);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetV1CompaniesCompanyIdPaySchedulesRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const page: number = 3004.3;
const per: number = 9327.24;

  const res = await sdk.paySchedules.getV1CompaniesCompanyIdPaySchedules(companyId, page, per);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const payScheduleId: string = "string";

  const res = await sdk.paySchedules.getV1CompaniesCompanyIdPaySchedulesPayScheduleId(companyId, payScheduleId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const requestBody: PostV1CompaniesCompanyIdPaySchedulesRequestBody = {
  anchorEndOfPayPeriod: "2020-05-08",
  anchorPayDate: "2020-05-15",
  frequency: PostV1CompaniesCompanyIdPaySchedulesRequestBodyFrequency.EveryOtherWeek,
};

  const res = await sdk.paySchedules.postV1CompaniesCompanyIdPaySchedules(companyId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const payScheduleId: string = "string";
const requestBody: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody = {
  version: "string",
};

  const res = await sdk.paySchedules.putV1CompaniesCompanyIdPaySchedulesPayScheduleId(companyId, payScheduleId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

