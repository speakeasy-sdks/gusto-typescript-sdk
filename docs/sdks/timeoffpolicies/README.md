# timeOffPolicies

### Available Operations

* [getCompaniesCompanyUuidTimeOffPolicies](#getcompaniescompanyuuidtimeoffpolicies) - Get all time off policies
* [getTimeOffPoliciesTimeOffPolicyUuid](#gettimeoffpoliciestimeoffpolicyuuid) - Get a time off policy
* [postCompaniesCompanyUuidTimeOffPolicies](#postcompaniescompanyuuidtimeoffpolicies) - Create a time off policy
* [postV1PayrollsPayrollIdCalculateAccruingTimeOffHours](#postv1payrollspayrollidcalculateaccruingtimeoffhours) - Calculate accruing time off hours
* [putTimeOffPoliciesTimeOffPolicyUuid](#puttimeoffpoliciestimeoffpolicyuuid) - Update a time off policy
* [putV1TimeOffPoliciesTimeOffPolicyUuidDeactivate](#putv1timeoffpoliciestimeoffpolicyuuiddeactivate) - Deactivate a time off policy
* [putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployees](#putv1timeoffpoliciestimeoffpolicyuuidremoveemployees) - Remove employees from a time off policy
* [putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployees](#putversiontimeoffpoliciestimeoffpolicyuuidaddemployees) - Add employees to a time off policy
* [putVersionTimeOffPoliciesTimeOffPolicyUuidBalance](#putversiontimeoffpoliciestimeoffpolicyuuidbalance) - Update employee time off hour balances

## getCompaniesCompanyUuidTimeOffPolicies

Get all time off policies for a company
scope: `time_off_policies:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetCompaniesCompanyUuidTimeOffPoliciesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.timeOffPolicies.getCompaniesCompanyUuidTimeOffPolicies("facere").then((res: GetCompaniesCompanyUuidTimeOffPoliciesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetCompaniesCompanyUuidTimeOffPoliciesResponse](../../models/operations/getcompaniescompanyuuidtimeoffpoliciesresponse.md)>**


## getTimeOffPoliciesTimeOffPolicyUuid

Get a time off policy
scope: `time_off_policies:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetTimeOffPoliciesTimeOffPolicyUuidResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.timeOffPolicies.getTimeOffPoliciesTimeOffPolicyUuid("corrupti").then((res: GetTimeOffPoliciesTimeOffPolicyUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `timeOffPolicyUuid`                                          | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company time off policy                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTimeOffPoliciesTimeOffPolicyUuidResponse](../../models/operations/gettimeoffpoliciestimeoffpolicyuuidresponse.md)>**


## postCompaniesCompanyUuidTimeOffPolicies

Create a Time Off Policy
scope: `time_off_policies:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostCompaniesCompanyUuidTimeOffPoliciesRequestBodyAccrualMethod,
  PostCompaniesCompanyUuidTimeOffPoliciesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.timeOffPolicies.postCompaniesCompanyUuidTimeOffPolicies("molestiae", {
  accrualMethod: PostCompaniesCompanyUuidTimeOffPoliciesRequestBodyAccrualMethod.PerHourWorked,
  accrualRate: "accusamus",
  accrualRateUnit: "necessitatibus",
  accrualWaitingPeriodDays: 733289,
  carryoverLimitHours: "sint",
  maxAccrualHoursPerYear: "ea",
  maxHours: "autem",
  name: "Olivia Larkin",
  paidOutOnTermination: false,
  policyType: "voluptatibus",
}).then((res: PostCompaniesCompanyUuidTimeOffPoliciesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                                  | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The UUID of the company                                                                                                                        |
| `requestBody`                                                                                                                                  | [operations.PostCompaniesCompanyUuidTimeOffPoliciesRequestBody](../../models/operations/postcompaniescompanyuuidtimeoffpoliciesrequestbody.md) | :heavy_minus_sign:                                                                                                                             | Requires a policy name, a policy_type, and an accrual_method                                                                                   |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PostCompaniesCompanyUuidTimeOffPoliciesResponse](../../models/operations/postcompaniescompanyuuidtimeoffpoliciesresponse.md)>**


## postV1PayrollsPayrollIdCalculateAccruingTimeOffHours

Returns a list of accruing time off for each time off policy associated with the employee.

Factors affecting the accrued hours:
  * the time off policy accrual method (whether they get pay per hour worked, per hour paid, with / without overtime, accumulate time off based on pay period / calendar year / anniversary)
  * how many hours of work during this pay period
  * how many hours of PTO / sick hours taken during this pay period (for per hour paid policies only)
  * company pay schedule frequency (for per pay period)

If none of the parameters is passed in, the accrued time off hour will be 0.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.timeOffPolicies.postV1PayrollsPayrollIdCalculateAccruingTimeOffHours("cum", "at", {
  doubleOvertimeHoursWorked: 51.52,
  overtimeHoursWorked: 1566.53,
  ptoHoursUsed: 6941.58,
  regularHoursWorked: 6841.26,
  sickHoursUsed: 9195.08,
}).then((res: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `employeeId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The UUID of the employee                                                                                                                                                 |
| `payrollId`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The UUID of the payroll                                                                                                                                                  |
| `requestBody`                                                                                                                                                            | [operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody](../../models/operations/postv1payrollspayrollidcalculateaccruingtimeoffhoursrequestbody.md) | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse](../../models/operations/postv1payrollspayrollidcalculateaccruingtimeoffhoursresponse.md)>**


## putTimeOffPoliciesTimeOffPolicyUuid

Update a Time Off Policy
scope: `time_off_policies:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutTimeOffPoliciesTimeOffPolicyUuidRequestBodyAccrualMethod,
  PutTimeOffPoliciesTimeOffPolicyUuidResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.timeOffPolicies.putTimeOffPoliciesTimeOffPolicyUuid("accusantium", {
  accrualMethod: PutTimeOffPoliciesTimeOffPolicyUuidRequestBodyAccrualMethod.PerHourWorkedNoOvertime,
  accrualRate: "officiis",
  accrualRateUnit: "eos",
  accrualWaitingPeriodDays: 844854,
  carryoverLimitHours: "odio",
  maxAccrualHoursPerYear: "praesentium",
  maxHours: "odit",
  name: "Stacy Mraz",
  paidOutOnTermination: false,
}).then((res: PutTimeOffPoliciesTimeOffPolicyUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `timeOffPolicyUuid`                                                                                                                    | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The UUID of the company time off policy                                                                                                |
| `requestBody`                                                                                                                          | [operations.PutTimeOffPoliciesTimeOffPolicyUuidRequestBody](../../models/operations/puttimeoffpoliciestimeoffpolicyuuidrequestbody.md) | :heavy_minus_sign:                                                                                                                     | Can update any attributes of the time off policy except policy_type, is_active, complete & employees                                   |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PutTimeOffPoliciesTimeOffPolicyUuidResponse](../../models/operations/puttimeoffpoliciestimeoffpolicyuuidresponse.md)>**


## putV1TimeOffPoliciesTimeOffPolicyUuidDeactivate

Deactivate a time off policy

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.timeOffPolicies.putV1TimeOffPoliciesTimeOffPolicyUuidDeactivate("recusandae").then((res: PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `timeOffPolicyUuid`                                          | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company time off policy                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse](../../models/operations/putv1timeoffpoliciestimeoffpolicyuuiddeactivateresponse.md)>**


## putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployees

Remove employees from a time off policy
scope: `time_off_policies:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.timeOffPolicies.putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployees("similique", {
  employees: [
    {
      uuid: "b5197f92-443d-4a7c-a52b-895c537c6454",
    },
    {
      uuid: "efb0b348-96c3-4ca5-acfb-e2fd57075779",
    },
  ],
}).then((res: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `timeOffPolicyUuid`                                                                                                                                                      | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The UUID of the company time off policy                                                                                                                                  |
| `requestBody`                                                                                                                                                            | [operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody](../../models/operations/putv1timeoffpoliciestimeoffpolicyuuidremoveemployeesrequestbody.md) | :heavy_minus_sign:                                                                                                                                                       | A list of employee objects containing the employee uuid                                                                                                                  |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse](../../models/operations/putv1timeoffpoliciestimeoffpolicyuuidremoveemployeesresponse.md)>**


## putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployees

Add employees to a time off policy. Employees are required to have at least one job to be added to a time off policy. Accepts starting balances for non-unlimited policies
scope: `time_off_policies:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.timeOffPolicies.putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployees("dolores", {
  employees: [
    {
      balance: "veritatis",
      uuid: "77deac64-6ecb-4573-809e-3eb1e5a2b12e",
    },
    {
      balance: "nobis",
      uuid: "07f116db-9954-45fc-95fa-88970e189dbb",
    },
    {
      balance: "velit",
      uuid: "0fcb33ea-055b-4197-8d44-e2f52d82d351",
    },
  ],
}).then((res: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                    | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timeOffPolicyUuid`                                                                                                                                                          | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | The UUID of the company time off policy                                                                                                                                      |
| `requestBody`                                                                                                                                                                | [operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody](../../models/operations/putversiontimeoffpoliciestimeoffpolicyuuidaddemployeesrequestbody.md) | :heavy_minus_sign:                                                                                                                                                           | A list of employee objects containing the employee uuid                                                                                                                      |
| `config`                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                           | Available config options for making requests.                                                                                                                                |


### Response

**Promise<[operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse](../../models/operations/putversiontimeoffpoliciestimeoffpolicyuuidaddemployeesresponse.md)>**


## putVersionTimeOffPoliciesTimeOffPolicyUuidBalance

Updates time off hours balances for employees for a time off policy
scope: `time_off_policies:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.timeOffPolicies.putVersionTimeOffPoliciesTimeOffPolicyUuidBalance("velit", {
  employees: [
    {
      balance: "tempore",
      uuid: "6f48b656-bcdb-435f-b2e4-b27537a8cd9e",
    },
    {
      balance: "ducimus",
      uuid: "319c177d-525f-477b-914e-eb52ff785fc3",
    },
    {
      balance: "nihil",
      uuid: "814d4c98-e0c2-4bb8-9eb7-5dad636c6005",
    },
  ],
}).then((res: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `timeOffPolicyUuid`                                                                                                                                                | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The UUID of the company time off policy                                                                                                                            |
| `requestBody`                                                                                                                                                      | [operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody](../../models/operations/putversiontimeoffpoliciestimeoffpolicyuuidbalancerequestbody.md) | :heavy_minus_sign:                                                                                                                                                 | A list of employee objects containing the employee uuid and time off hours balance                                                                                 |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse](../../models/operations/putversiontimeoffpoliciestimeoffpolicyuuidbalanceresponse.md)>**

