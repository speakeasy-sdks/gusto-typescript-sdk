# jobsAndCompensations

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
import { DeleteV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.jobsAndCompensations.deleteV1JobsJobId({
  jobId: "libero",
}).then((res: DeleteV1JobsJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteV1JobsJobIdRequest](../../models/operations/deletev1jobsjobidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteV1JobsJobIdResponse](../../models/operations/deletev1jobsjobidresponse.md)>**


## getV1CompensationsCompensationId

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.

Note: Currently, jobs are arbitrarily limited to a single compensation as multiple compensations per job are not yet available in Gusto. The API is architected as if multiple compensations may exist, so integrations should integrate under the same assumption. The only exception is that creating a compensation with the same `job_uuid` as another will fail with a relevant error.

scope: `jobs:read`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompensationsCompensationIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatus, CompensationPaymentUnit } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.jobsAndCompensations.getV1CompensationsCompensationId({
  compensationId: "vitae",
}).then((res: GetV1CompensationsCompensationIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetV1CompensationsCompensationIdRequest](../../models/operations/getv1compensationscompensationidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetV1CompensationsCompensationIdResponse](../../models/operations/getv1compensationscompensationidresponse.md)>**


## getV1EmployeesEmployeeIdJobs

Get all of the jobs that an employee holds.

scope: `jobs:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdJobsInclude, GetV1EmployeesEmployeeIdJobsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatus, CompensationPaymentUnit } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.jobsAndCompensations.getV1EmployeesEmployeeIdJobs({
  employeeId: "accusamus",
  include: GetV1EmployeesEmployeeIdJobsInclude.AllCompensations,
  page: 6311.26,
  per: 2724.37,
}).then((res: GetV1EmployeesEmployeeIdJobsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetV1EmployeesEmployeeIdJobsRequest](../../models/operations/getv1employeesemployeeidjobsrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdJobsResponse](../../models/operations/getv1employeesemployeeidjobsresponse.md)>**


## getV1JobsJobId

Get a job.

scope: `jobs:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1JobsJobIdInclude, GetV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatus, CompensationPaymentUnit } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.jobsAndCompensations.getV1JobsJobId({
  include: GetV1JobsJobIdInclude.AllCompensations,
  jobId: "aspernatur",
}).then((res: GetV1JobsJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetV1JobsJobIdRequest](../../models/operations/getv1jobsjobidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


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
import { GetV1JobsJobIdCompensationsInclude, GetV1JobsJobIdCompensationsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatus, CompensationPaymentUnit } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.jobsAndCompensations.getV1JobsJobIdCompensations({
  include: GetV1JobsJobIdCompensationsInclude.AllCompensations,
  jobId: "voluptas",
  page: 3742.44,
  per: 3742.96,
}).then((res: GetV1JobsJobIdCompensationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetV1JobsJobIdCompensationsRequest](../../models/operations/getv1jobsjobidcompensationsrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetV1JobsJobIdCompensationsResponse](../../models/operations/getv1jobsjobidcompensationsresponse.md)>**


## postV1JobsJobId

Create a job.

scope: `jobs:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatus, CompensationPaymentUnit } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.jobsAndCompensations.postV1JobsJobId({
  requestBody: {
    hireDate: "minima",
    locationUuid: "nobis",
    title: "Miss",
  },
  employeeId: "adipisci",
}).then((res: PostV1JobsJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PostV1JobsJobIdRequest](../../models/operations/postv1jobsjobidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


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
  PutV1CompensationsCompensationIdRequestBodyFlsaStatus,
  PutV1CompensationsCompensationIdRequestBodyPaymentUnit,
  PutV1CompensationsCompensationIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatus, CompensationPaymentUnit } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.jobsAndCompensations.putV1CompensationsCompensationId({
  requestBody: {
    adjustForMinimumWage: false,
    flsaStatus: PutV1CompensationsCompensationIdRequestBodyFlsaStatus.CommissionOnlyNonexempt,
    minimumWages: [
      {
        uuid: "8744ed53-b88f-43a8-98f5-c0b2f2fb7b19",
      },
    ],
    paymentUnit: PutV1CompensationsCompensationIdRequestBodyPaymentUnit.Week,
    rate: "laborum",
    version: "sed",
  },
  compensationId: "in",
}).then((res: PutV1CompensationsCompensationIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PutV1CompensationsCompensationIdRequest](../../models/operations/putv1compensationscompensationidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PutV1CompensationsCompensationIdResponse](../../models/operations/putv1compensationscompensationidresponse.md)>**


## putV1JobsJobId

Update a job.

scope: `jobs:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatus, CompensationPaymentUnit } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.jobsAndCompensations.putV1JobsJobId({
  requestBody: {
    hireDate: "commodi",
    locationUuid: "quidem",
    title: "Mr.",
    version: "voluptas",
  },
  jobId: "unde",
}).then((res: PutV1JobsJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.PutV1JobsJobIdRequest](../../models/operations/putv1jobsjobidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PutV1JobsJobIdResponse](../../models/operations/putv1jobsjobidresponse.md)>**

