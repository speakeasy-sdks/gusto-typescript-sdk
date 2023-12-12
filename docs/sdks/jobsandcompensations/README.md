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
import { DeleteV1JobsJobIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const jobId: string = "string";

  const res = await sdk.jobsAndCompensations.deleteV1JobsJobId(jobId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `jobId`                                                      | *string*                                                     | :heavy_check_mark:                                           | The UUID of the job                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteV1JobsJobIdResponse](../../sdk/models/operations/deletev1jobsjobidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getV1CompensationsCompensationId

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.

Note: Currently, jobs are arbitrarily limited to a single compensation as multiple compensations per job are not yet available in Gusto. The API is architected as if multiple compensations may exist, so integrations should integrate under the same assumption. The only exception is that creating a compensation with the same `job_uuid` as another will fail with a relevant error.

scope: `jobs:read`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompensationsCompensationIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const compensationId: string = "string";

  const res = await sdk.jobsAndCompensations.getV1CompensationsCompensationId(compensationId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `compensationId`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the compensation                                 |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompensationsCompensationIdResponse](../../sdk/models/operations/getv1compensationscompensationidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getV1EmployeesEmployeeIdJobs

Get all of the jobs that an employee holds.

scope: `jobs:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdJobsRequest, QueryParamInclude } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const employeeId: string = "string";
const include: QueryParamInclude = QueryParamInclude.AllCompensations;
const page: number = 2958.61;
const per: number = 7200.06;

  const res = await sdk.jobsAndCompensations.getV1EmployeesEmployeeIdJobs(employeeId, include, page, per);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                               | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                                                            | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The UUID of the employee                                                                                                                |
| `include`                                                                                                                               | [operations.QueryParamInclude](../../sdk/models/operations/queryparaminclude.md)                                                        | :heavy_minus_sign:                                                                                                                      | Available options:<br/>- all_compensations: Include all effective dated compensations for each job instead of only the current compensation |
| `page`                                                                                                                                  | *number*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | The page that is requested. When unspecified, will load all objects.                                                                    |
| `per`                                                                                                                                   | *number*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Number of objects per page. When unspecified, will default to 25                                                                        |
| `config`                                                                                                                                | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                            | :heavy_minus_sign:                                                                                                                      | Available config options for making requests.                                                                                           |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdJobsResponse](../../sdk/models/operations/getv1employeesemployeeidjobsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getV1JobsJobId

Get a job.

scope: `jobs:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1JobsJobIdQueryParamInclude, GetV1JobsJobIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const jobId: string = "string";
const include: GetV1JobsJobIdQueryParamInclude = GetV1JobsJobIdQueryParamInclude.AllCompensations;

  const res = await sdk.jobsAndCompensations.getV1JobsJobId(jobId, include);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `jobId`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The UUID of the job                                                                                                                    |
| `include`                                                                                                                              | [operations.GetV1JobsJobIdQueryParamInclude](../../sdk/models/operations/getv1jobsjobidqueryparaminclude.md)                           | :heavy_minus_sign:                                                                                                                     | Available options:<br/>- all_compensations: Include all effective dated compensations for the job instead of only the current compensation |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetV1JobsJobIdResponse](../../sdk/models/operations/getv1jobsjobidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getV1JobsJobIdCompensations

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. By default the API returns only the current compensation - see the `include` query parameter for retrieving all compensations.

Note: Currently the API does not support creating multiple compensations per job - creating a compensation with the same `job_uuid` as another will fail with a relevant error.

Use `flsa_status` to determine if an employee is eligible for overtime.

scope: `jobs:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1JobsJobIdCompensationsQueryParamInclude, GetV1JobsJobIdCompensationsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const jobId: string = "string";
const include: GetV1JobsJobIdCompensationsQueryParamInclude = GetV1JobsJobIdCompensationsQueryParamInclude.AllCompensations;
const page: number = 8955.23;
const per: number = 1707.54;

  const res = await sdk.jobsAndCompensations.getV1JobsJobIdCompensations(jobId, include, page, per);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                               | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `jobId`                                                                                                                                 | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The UUID of the job                                                                                                                     |
| `include`                                                                                                                               | [operations.GetV1JobsJobIdCompensationsQueryParamInclude](../../sdk/models/operations/getv1jobsjobidcompensationsqueryparaminclude.md)  | :heavy_minus_sign:                                                                                                                      | Available options:<br/>- all_compensations: Include all effective dated compensations for each job instead of only the current compensation |
| `page`                                                                                                                                  | *number*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | The page that is requested. When unspecified, will load all objects.                                                                    |
| `per`                                                                                                                                   | *number*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Number of objects per page. When unspecified, will default to 25                                                                        |
| `config`                                                                                                                                | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                            | :heavy_minus_sign:                                                                                                                      | Available config options for making requests.                                                                                           |


### Response

**Promise<[operations.GetV1JobsJobIdCompensationsResponse](../../sdk/models/operations/getv1jobsjobidcompensationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postV1JobsJobId

Create a job.

scope: `jobs:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1JobsJobIdRequest, PostV1JobsJobIdRequestBody } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const employeeId: string = "string";
const requestBody: PostV1JobsJobIdRequestBody = {};

  const res = await sdk.jobsAndCompensations.postV1JobsJobId(employeeId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | The UUID of the employee                                                                           |
| `requestBody`                                                                                      | [operations.PostV1JobsJobIdRequestBody](../../sdk/models/operations/postv1jobsjobidrequestbody.md) | :heavy_minus_sign:                                                                                 | Create a job.                                                                                      |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostV1JobsJobIdResponse](../../sdk/models/operations/postv1jobsjobidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putV1CompensationsCompensationId

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.

Note: Currently, jobs are arbitrarily limited to a single compensation as multiple compensations per job are not yet available in Gusto. The API is architected as if multiple compensations may exist, so integrations should integrate under the same assumption. The only exception is that creating a compensation with the same `job_uuid` as another will fail with a relevant error

scope: `jobs:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  FlsaStatus,
  MinimumWages,
  PaymentUnit,
  PutV1CompensationsCompensationIdRequest,
  PutV1CompensationsCompensationIdRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const compensationId: string = "string";
const requestBody: PutV1CompensationsCompensationIdRequestBody = {
  minimumWages: [
    {},
  ],
  version: "string",
};

  const res = await sdk.jobsAndCompensations.putV1CompensationsCompensationId(compensationId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `compensationId`                                                                                                                     | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The UUID of the compensation                                                                                                         |
| `requestBody`                                                                                                                        | [operations.PutV1CompensationsCompensationIdRequestBody](../../sdk/models/operations/putv1compensationscompensationidrequestbody.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PutV1CompensationsCompensationIdResponse](../../sdk/models/operations/putv1compensationscompensationidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putV1JobsJobId

Update a job.

scope: `jobs:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1JobsJobIdRequest, PutV1JobsJobIdRequestBody } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const jobId: string = "string";
const requestBody: PutV1JobsJobIdRequestBody = {
  version: "string",
};

  const res = await sdk.jobsAndCompensations.putV1JobsJobId(jobId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `jobId`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | The UUID of the job                                                                              |
| `requestBody`                                                                                    | [operations.PutV1JobsJobIdRequestBody](../../sdk/models/operations/putv1jobsjobidrequestbody.md) | :heavy_minus_sign:                                                                               | Update a job.                                                                                    |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PutV1JobsJobIdResponse](../../sdk/models/operations/putv1jobsjobidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
