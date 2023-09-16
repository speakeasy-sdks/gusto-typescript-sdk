# TimeOffPolicies

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
import {
  GetCompaniesCompanyUuidTimeOffPoliciesRequest,
  GetCompaniesCompanyUuidTimeOffPoliciesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "exercitationem";

sdk.timeOffPolicies.getCompaniesCompanyUuidTimeOffPolicies(companyUuid).then((res: GetCompaniesCompanyUuidTimeOffPoliciesResponse) => {
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
import {
  GetTimeOffPoliciesTimeOffPolicyUuidRequest,
  GetTimeOffPoliciesTimeOffPolicyUuidResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const timeOffPolicyUuid: string = "earum";

sdk.timeOffPolicies.getTimeOffPoliciesTimeOffPolicyUuid(timeOffPolicyUuid).then((res: GetTimeOffPoliciesTimeOffPolicyUuidResponse) => {
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
  PostCompaniesCompanyUuidTimeOffPoliciesRequest,
  PostCompaniesCompanyUuidTimeOffPoliciesRequestBody,
  PostCompaniesCompanyUuidTimeOffPoliciesRequestBodyAccrualMethod,
  PostCompaniesCompanyUuidTimeOffPoliciesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "facere";
const requestBody: PostCompaniesCompanyUuidTimeOffPoliciesRequestBody = {
  accrualMethod: PostCompaniesCompanyUuidTimeOffPoliciesRequestBodyAccrualMethod.PerCalendarYear,
  accrualRate: "doloribus",
  accrualRateUnit: "suscipit",
  accrualWaitingPeriodDays: 968972,
  carryoverLimitHours: "quidem",
  maxAccrualHoursPerYear: "saepe",
  maxHours: "necessitatibus",
  name: "Katherine Zemlak",
  paidOutOnTermination: false,
  policyType: "amet",
};

sdk.timeOffPolicies.postCompaniesCompanyUuidTimeOffPolicies(companyUuid, requestBody).then((res: PostCompaniesCompanyUuidTimeOffPoliciesResponse) => {
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
import {
  PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest,
  PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody,
  PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "beatae";
const payrollId: string = "dignissimos";
const requestBody: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody = {
  doubleOvertimeHoursWorked: 9509.53,
  overtimeHoursWorked: 8915.23,
  ptoHoursUsed: 2334.2,
  regularHoursWorked: 3581.07,
  sickHoursUsed: 6897.68,
};

sdk.timeOffPolicies.postV1PayrollsPayrollIdCalculateAccruingTimeOffHours(employeeId, payrollId, requestBody).then((res: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse) => {
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
  PutTimeOffPoliciesTimeOffPolicyUuidRequest,
  PutTimeOffPoliciesTimeOffPolicyUuidRequestBody,
  PutTimeOffPoliciesTimeOffPolicyUuidRequestBodyAccrualMethod,
  PutTimeOffPoliciesTimeOffPolicyUuidResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const timeOffPolicyUuid: string = "laboriosam";
const requestBody: PutTimeOffPoliciesTimeOffPolicyUuidRequestBody = {
  accrualMethod: PutTimeOffPoliciesTimeOffPolicyUuidRequestBodyAccrualMethod.Unlimited,
  accrualRate: "voluptates",
  accrualRateUnit: "libero",
  accrualWaitingPeriodDays: 113816,
  carryoverLimitHours: "accusamus",
  maxAccrualHoursPerYear: "similique",
  maxHours: "tempora",
  name: "Yolanda Hirthe",
  paidOutOnTermination: false,
};

sdk.timeOffPolicies.putTimeOffPoliciesTimeOffPolicyUuid(timeOffPolicyUuid, requestBody).then((res: PutTimeOffPoliciesTimeOffPolicyUuidResponse) => {
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
import {
  PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest,
  PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const timeOffPolicyUuid: string = "nobis";

sdk.timeOffPolicies.putV1TimeOffPoliciesTimeOffPolicyUuidDeactivate(timeOffPolicyUuid).then((res: PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse) => {
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
import {
  PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest,
  PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody,
  PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBodyEmployees,
  PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const timeOffPolicyUuid: string = "dolorum";
const requestBody: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody = {
  employees: [
    {
      uuid: "3c28744e-d53b-488f-ba8d-8f5c0b2f2fb7",
    },
  ],
};

sdk.timeOffPolicies.putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployees(timeOffPolicyUuid, requestBody).then((res: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse) => {
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
import {
  PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest,
  PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody,
  PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBodyEmployees,
  PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const timeOffPolicyUuid: string = "expedita";
const requestBody: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody = {
  employees: [
    {
      balance: "ab",
      uuid: "94a276b2-6916-4fe1-b08f-4294e3698f44",
    },
  ],
};

sdk.timeOffPolicies.putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployees(timeOffPolicyUuid, requestBody).then((res: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse) => {
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
import {
  PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest,
  PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody,
  PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBodyEmployees,
  PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const timeOffPolicyUuid: string = "voluptate";
const requestBody: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody = {
  employees: [
    {
      balance: "reiciendis",
      uuid: "603e8b44-5e80-4ca5-9efd-20e457e1858b",
    },
  ],
};

sdk.timeOffPolicies.putVersionTimeOffPoliciesTimeOffPolicyUuidBalance(timeOffPolicyUuid, requestBody).then((res: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse) => {
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

