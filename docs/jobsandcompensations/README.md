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
import { DeleteV1JobsJobIdRequest, DeleteV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteV1JobsJobIdRequest = {
  jobId: "libero",
};

sdk.jobsAndCompensations.deleteV1JobsJobId(req).then((res: DeleteV1JobsJobIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import {
  GetV1CompensationsCompensationIdRequest,
  GetV1CompensationsCompensationIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompensationsCompensationIdRequest = {
  compensationId: "vitae",
};

sdk.jobsAndCompensations.getV1CompensationsCompensationId(req).then((res: GetV1CompensationsCompensationIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import {
  GetV1EmployeesEmployeeIdJobsIncludeEnum,
  GetV1EmployeesEmployeeIdJobsRequest,
  GetV1EmployeesEmployeeIdJobsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1EmployeesEmployeeIdJobsRequest = {
  employeeId: "accusamus",
  include: GetV1EmployeesEmployeeIdJobsIncludeEnum.AllCompensations,
  page: 6311.26,
  per: 2724.37,
};

sdk.jobsAndCompensations.getV1EmployeesEmployeeIdJobs(req).then((res: GetV1EmployeesEmployeeIdJobsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { GetV1JobsJobIdIncludeEnum, GetV1JobsJobIdRequest, GetV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1JobsJobIdRequest = {
  include: GetV1JobsJobIdIncludeEnum.AllCompensations,
  jobId: "aspernatur",
};

sdk.jobsAndCompensations.getV1JobsJobId(req).then((res: GetV1JobsJobIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import {
  GetV1JobsJobIdCompensationsIncludeEnum,
  GetV1JobsJobIdCompensationsRequest,
  GetV1JobsJobIdCompensationsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1JobsJobIdCompensationsRequest = {
  include: GetV1JobsJobIdCompensationsIncludeEnum.AllCompensations,
  jobId: "voluptas",
  page: 3742.44,
  per: 3742.96,
};

sdk.jobsAndCompensations.getV1JobsJobIdCompensations(req).then((res: GetV1JobsJobIdCompensationsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { PostV1JobsJobIdRequest, PostV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1JobsJobIdRequest = {
  requestBody: {
    hireDate: "minima",
    locationUuid: "nobis",
    title: "Miss",
  },
  employeeId: "adipisci",
};

sdk.jobsAndCompensations.postV1JobsJobId(req).then((res: PostV1JobsJobIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
  PutV1CompensationsCompensationIdRequest,
  PutV1CompensationsCompensationIdRequestBodyFlsaStatusEnum,
  PutV1CompensationsCompensationIdRequestBodyPaymentUnitEnum,
  PutV1CompensationsCompensationIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1CompensationsCompensationIdRequest = {
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
};

sdk.jobsAndCompensations.putV1CompensationsCompensationId(req).then((res: PutV1CompensationsCompensationIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { PutV1JobsJobIdRequest, PutV1JobsJobIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CompensationFlsaStatusEnum, CompensationPaymentUnitEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1JobsJobIdRequest = {
  requestBody: {
    hireDate: "commodi",
    locationUuid: "quidem",
    title: "Mr.",
    version: "voluptas",
  },
  jobId: "unde",
};

sdk.jobsAndCompensations.putV1JobsJobId(req).then((res: PutV1JobsJobIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
