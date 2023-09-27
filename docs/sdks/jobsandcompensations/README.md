# JobsAndCompensations
(*jobsAndCompensations*)

### Available Operations

* [deleteV1JobsJobId](#deletev1jobsjobid) - Delete an individual job
* [getV1CompensationsCompensationId](#getv1compensationscompensationid) - Get a compensation
* [getV1EmployeesEmployeeIdJobs](#getv1employeesemployeeidjobs) - Get jobs for an employee
* [getV1JobsJobId](#getv1jobsjobid) - Get a job
* [getV1JobsJobIdCompensations](#getv1jobsjobidcompensations) - Get compensations for a job
* [postV1JobsJobId](#postv1jobsjobid) - Create a job
* [putV1CompensationsCompensationId](#putv1compensationscompensationid) - Update a compensation
* [putV1JobsJobId](#putv1jobsjobid) - Update a job

## deleteV1JobsJobId

Deletes a specific job that an employee holds.

scope: `jobs:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1JobsJobIdRequest, DeleteV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const jobId: string = "deleniti";

sdk.jobsAndCompensations.deleteV1JobsJobId(jobId).then((res: DeleteV1JobsJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `jobId`                                                      | *string*                                                     | :heavy_check_mark:                                           | The UUID of the job                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteV1JobsJobIdResponse](../../models/operations/deletev1jobsjobidresponse.md)>**


## getV1CompensationsCompensationId

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.

Note: Currently, jobs are arbitrarily limited to a single compensation as multiple compensations per job are not yet available in Gusto. The API is architected as if multiple compensations may exist, so integrations should integrate under the same assumption. The only exception is that creating a compensation with the same `job_uuid` as another will fail with a relevant error.

scope: `jobs:read`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1CompensationsCompensationIdRequest,
  GetV1CompensationsCompensationIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const compensationId: string = "impedit";

sdk.jobsAndCompensations.getV1CompensationsCompensationId(compensationId).then((res: GetV1CompensationsCompensationIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `compensationId`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the compensation                                 |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompensationsCompensationIdResponse](../../models/operations/getv1compensationscompensationidresponse.md)>**


## getV1EmployeesEmployeeIdJobs

Get all of the jobs that an employee holds.

scope: `jobs:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1EmployeesEmployeeIdJobsInclude,
  GetV1EmployeesEmployeeIdJobsRequest,
  GetV1EmployeesEmployeeIdJobsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "aliquam";
const include: GetV1EmployeesEmployeeIdJobsInclude = GetV1EmployeesEmployeeIdJobsInclude.AllCompensations;
const page: number = 1469.46;
const per: number = 8828.6;

sdk.jobsAndCompensations.getV1EmployeesEmployeeIdJobs(employeeId, include, page, per).then((res: GetV1EmployeesEmployeeIdJobsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                               | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                                                            | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The UUID of the employee                                                                                                                |
| `include`                                                                                                                               | [operations.GetV1EmployeesEmployeeIdJobsInclude](../../models/operations/getv1employeesemployeeidjobsinclude.md)                        | :heavy_minus_sign:                                                                                                                      | Available options:<br/>- all_compensations: Include all effective dated compensations for each job instead of only the current compensation |
| `page`                                                                                                                                  | *number*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | The page that is requested. When unspecified, will load all objects.                                                                    |
| `per`                                                                                                                                   | *number*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Number of objects per page. When unspecified, will default to 25                                                                        |
| `config`                                                                                                                                | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                            | :heavy_minus_sign:                                                                                                                      | Available config options for making requests.                                                                                           |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdJobsResponse](../../models/operations/getv1employeesemployeeidjobsresponse.md)>**


## getV1JobsJobId

Get a job.

scope: `jobs:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1JobsJobIdInclude, GetV1JobsJobIdRequest, GetV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const jobId: string = "inventore";
const include: GetV1JobsJobIdInclude = GetV1JobsJobIdInclude.AllCompensations;

sdk.jobsAndCompensations.getV1JobsJobId(jobId, include).then((res: GetV1JobsJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `jobId`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The UUID of the job                                                                                                                    |
| `include`                                                                                                                              | [operations.GetV1JobsJobIdInclude](../../models/operations/getv1jobsjobidinclude.md)                                                   | :heavy_minus_sign:                                                                                                                     | Available options:<br/>- all_compensations: Include all effective dated compensations for the job instead of only the current compensation |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetV1JobsJobIdResponse](../../models/operations/getv1jobsjobidresponse.md)>**


## getV1JobsJobIdCompensations

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. By default the API returns only the current compensation - see the `include` query parameter for retrieving all compensations.

Note: Currently the API does not support creating multiple compensations per job - creating a compensation with the same `job_uuid` as another will fail with a relevant error.

Use `flsa_status` to determine if an employee is eligible for overtime.

scope: `jobs:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1JobsJobIdCompensationsInclude,
  GetV1JobsJobIdCompensationsRequest,
  GetV1JobsJobIdCompensationsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const jobId: string = "non";
const include: GetV1JobsJobIdCompensationsInclude = GetV1JobsJobIdCompensationsInclude.AllCompensations;
const page: number = 896.03;
const per: number = 6774.12;

sdk.jobsAndCompensations.getV1JobsJobIdCompensations(jobId, include, page, per).then((res: GetV1JobsJobIdCompensationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                               | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `jobId`                                                                                                                                 | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The UUID of the job                                                                                                                     |
| `include`                                                                                                                               | [operations.GetV1JobsJobIdCompensationsInclude](../../models/operations/getv1jobsjobidcompensationsinclude.md)                          | :heavy_minus_sign:                                                                                                                      | Available options:<br/>- all_compensations: Include all effective dated compensations for each job instead of only the current compensation |
| `page`                                                                                                                                  | *number*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | The page that is requested. When unspecified, will load all objects.                                                                    |
| `per`                                                                                                                                   | *number*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Number of objects per page. When unspecified, will default to 25                                                                        |
| `config`                                                                                                                                | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                            | :heavy_minus_sign:                                                                                                                      | Available config options for making requests.                                                                                           |


### Response

**Promise<[operations.GetV1JobsJobIdCompensationsResponse](../../models/operations/getv1jobsjobidcompensationsresponse.md)>**


## postV1JobsJobId

Create a job.

scope: `jobs:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1JobsJobIdRequest, PostV1JobsJobIdRequestBody, PostV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "laborum";
const requestBody: PostV1JobsJobIdRequestBody = {
  hireDate: "placeat",
  locationUuid: "velit",
  title: "Ms.",
};

sdk.jobsAndCompensations.postV1JobsJobId(employeeId, requestBody).then((res: PostV1JobsJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | The UUID of the employee                                                                       |
| `requestBody`                                                                                  | [operations.PostV1JobsJobIdRequestBody](../../models/operations/postv1jobsjobidrequestbody.md) | :heavy_minus_sign:                                                                             | Create a job.                                                                                  |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostV1JobsJobIdResponse](../../models/operations/postv1jobsjobidresponse.md)>**


## putV1CompensationsCompensationId

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.

Note: Currently, jobs are arbitrarily limited to a single compensation as multiple compensations per job are not yet available in Gusto. The API is architected as if multiple compensations may exist, so integrations should integrate under the same assumption. The only exception is that creating a compensation with the same `job_uuid` as another will fail with a relevant error

scope: `jobs:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompensationsCompensationIdRequest,
  PutV1CompensationsCompensationIdRequestBody,
  PutV1CompensationsCompensationIdRequestBodyFlsaStatus,
  PutV1CompensationsCompensationIdRequestBodyMinimumWages,
  PutV1CompensationsCompensationIdRequestBodyPaymentUnit,
  PutV1CompensationsCompensationIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const compensationId: string = "autem";
const requestBody: PutV1CompensationsCompensationIdRequestBody = {
  adjustForMinimumWage: false,
  flsaStatus: PutV1CompensationsCompensationIdRequestBodyFlsaStatus.CommissionOnlyNonexempt,
  minimumWages: [
    {
      uuid: "8dd6b144-2907-4474-b78a-7bd466d28c10",
    },
  ],
  paymentUnit: PutV1CompensationsCompensationIdRequestBodyPaymentUnit.Year,
  rate: "quidem",
  version: "neque",
};

sdk.jobsAndCompensations.putV1CompensationsCompensationId(compensationId, requestBody).then((res: PutV1CompensationsCompensationIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `compensationId`                                                                                                                 | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The UUID of the compensation                                                                                                     |
| `requestBody`                                                                                                                    | [operations.PutV1CompensationsCompensationIdRequestBody](../../models/operations/putv1compensationscompensationidrequestbody.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PutV1CompensationsCompensationIdResponse](../../models/operations/putv1compensationscompensationidresponse.md)>**


## putV1JobsJobId

Update a job.

scope: `jobs:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1JobsJobIdRequest, PutV1JobsJobIdRequestBody, PutV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const jobId: string = "quo";
const requestBody: PutV1JobsJobIdRequestBody = {
  hireDate: "illum",
  locationUuid: "quo",
  title: "Miss",
  version: "eius",
};

sdk.jobsAndCompensations.putV1JobsJobId(jobId, requestBody).then((res: PutV1JobsJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `jobId`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | The UUID of the job                                                                          |
| `requestBody`                                                                                | [operations.PutV1JobsJobIdRequestBody](../../models/operations/putv1jobsjobidrequestbody.md) | :heavy_minus_sign:                                                                           | Update a job.                                                                                |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PutV1JobsJobIdResponse](../../models/operations/putv1jobsjobidresponse.md)>**

