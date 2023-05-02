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
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
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

## getV1CompensationsCompensationId

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.

Note: Currently, jobs are arbitrarily limited to a single compensation as multiple compensations per job are not yet available in Gusto. The API is architected as if multiple compensations may exist, so integrations should integrate under the same assumption. The only exception is that creating a compensation with the same `job_uuid` as another will fail with a relevant error.

scope: `jobs:read`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompensationsCompensationIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
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

## getV1EmployeesEmployeeIdJobs

Get all of the jobs that an employee holds.

scope: `jobs:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdJobsIncludeEnum, GetV1EmployeesEmployeeIdJobsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.jobsAndCompensations.getV1EmployeesEmployeeIdJobs({
  employeeId: "accusamus",
  include: GetV1EmployeesEmployeeIdJobsIncludeEnum.AllCompensations,
  page: 6311.26,
  per: 2724.37,
}).then((res: GetV1EmployeesEmployeeIdJobsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1JobsJobId

Get a job.

scope: `jobs:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1JobsJobIdIncludeEnum, GetV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.jobsAndCompensations.getV1JobsJobId({
  include: GetV1JobsJobIdIncludeEnum.AllCompensations,
  jobId: "aspernatur",
}).then((res: GetV1JobsJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1JobsJobIdCompensations

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. By default the API returns only the current compensation - see the `include` query parameter for retrieving all compensations.

Note: Currently the API does not support creating multiple compensations per job - creating a compensation with the same `job_uuid` as another will fail with a relevant error.

Use `flsa_status` to determine if an employee is eligible for overtime.

scope: `jobs:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1JobsJobIdCompensationsIncludeEnum, GetV1JobsJobIdCompensationsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.jobsAndCompensations.getV1JobsJobIdCompensations({
  include: GetV1JobsJobIdCompensationsIncludeEnum.AllCompensations,
  jobId: "voluptas",
  page: 3742.44,
  per: 3742.96,
}).then((res: GetV1JobsJobIdCompensationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postV1JobsJobId

Create a job.

scope: `jobs:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
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

## putV1CompensationsCompensationId

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.

Note: Currently, jobs are arbitrarily limited to a single compensation as multiple compensations per job are not yet available in Gusto. The API is architected as if multiple compensations may exist, so integrations should integrate under the same assumption. The only exception is that creating a compensation with the same `job_uuid` as another will fail with a relevant error

scope: `jobs:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompensationsCompensationIdRequestBodyFlsaStatusEnum,
  PutV1CompensationsCompensationIdRequestBodyPaymentUnitEnum,
  PutV1CompensationsCompensationIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.jobsAndCompensations.putV1CompensationsCompensationId({
  requestBody: {
    adjustForMinimumWage: false,
    flsaStatus: PutV1CompensationsCompensationIdRequestBodyFlsaStatusEnum.CommissionOnlyNonexempt,
    minimumWages: [
      {
        uuid: "8744ed53-b88f-43a8-98f5-c0b2f2fb7b19",
      },
    ],
    paymentUnit: PutV1CompensationsCompensationIdRequestBodyPaymentUnitEnum.Week,
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

## putV1JobsJobId

Update a job.

scope: `jobs:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
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
