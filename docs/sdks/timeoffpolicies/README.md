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

sdk.timeOffPolicies.getCompaniesCompanyUuidTimeOffPolicies({
  companyUuid: "esse",
}).then((res: GetCompaniesCompanyUuidTimeOffPoliciesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest](../../models/operations/getcompaniescompanyuuidtimeoffpoliciesrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


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

sdk.timeOffPolicies.getTimeOffPoliciesTimeOffPolicyUuid({
  timeOffPolicyUuid: "ex",
}).then((res: GetTimeOffPoliciesTimeOffPolicyUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest](../../models/operations/gettimeoffpoliciestimeoffpolicyuuidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


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

sdk.timeOffPolicies.postCompaniesCompanyUuidTimeOffPolicies({
  requestBody: {
    accrualMethod: PostCompaniesCompanyUuidTimeOffPoliciesRequestBodyAccrualMethod.PerPayPeriod,
    accrualRate: "aliquid",
    accrualRateUnit: "ipsa",
    accrualWaitingPeriodDays: 671384,
    carryoverLimitHours: "sunt",
    maxAccrualHoursPerYear: "nostrum",
    maxHours: "fugiat",
    name: "Gene Nikolaus",
    paidOutOnTermination: false,
    policyType: "perferendis",
  },
  companyUuid: "eum",
}).then((res: PostCompaniesCompanyUuidTimeOffPoliciesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.PostCompaniesCompanyUuidTimeOffPoliciesRequest](../../models/operations/postcompaniescompanyuuidtimeoffpoliciesrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


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

sdk.timeOffPolicies.postV1PayrollsPayrollIdCalculateAccruingTimeOffHours({
  requestBody: {
    doubleOvertimeHoursWorked: 3747.53,
    overtimeHoursWorked: 6145.28,
    ptoHoursUsed: 6616.07,
    regularHoursWorked: 700.42,
    sickHoursUsed: 6253.58,
  },
  employeeId: "possimus",
  payrollId: "voluptates",
}).then((res: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                        | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                        | [operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest](../../models/operations/postv1payrollspayrollidcalculateaccruingtimeoffhoursrequest.md) | :heavy_check_mark:                                                                                                                                               | The request object to use for the request.                                                                                                                       |
| `config`                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                     | :heavy_minus_sign:                                                                                                                                               | Available config options for making requests.                                                                                                                    |


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

sdk.timeOffPolicies.putTimeOffPoliciesTimeOffPolicyUuid({
  requestBody: {
    accrualMethod: PutTimeOffPoliciesTimeOffPolicyUuidRequestBodyAccrualMethod.PerHourWorkedNoOvertime,
    accrualRate: "laborum",
    accrualRateUnit: "libero",
    accrualWaitingPeriodDays: 324083,
    carryoverLimitHours: "deleniti",
    maxAccrualHoursPerYear: "enim",
    maxHours: "vitae",
    name: "Ruben Ryan",
    paidOutOnTermination: false,
  },
  timeOffPolicyUuid: "ad",
}).then((res: PutTimeOffPoliciesTimeOffPolicyUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PutTimeOffPoliciesTimeOffPolicyUuidRequest](../../models/operations/puttimeoffpoliciestimeoffpolicyuuidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


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

sdk.timeOffPolicies.putV1TimeOffPoliciesTimeOffPolicyUuidDeactivate({
  timeOffPolicyUuid: "expedita",
}).then((res: PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest](../../models/operations/putv1timeoffpoliciestimeoffpolicyuuiddeactivaterequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


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

sdk.timeOffPolicies.putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployees({
  requestBody: {
    employees: [
      {
        uuid: "8b61891b-aa0f-4e1a-9e00-8e6f8c5f350d",
      },
    ],
  },
  timeOffPolicyUuid: "totam",
}).then((res: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                        | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                        | [operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest](../../models/operations/putv1timeoffpoliciestimeoffpolicyuuidremoveemployeesrequest.md) | :heavy_check_mark:                                                                                                                                               | The request object to use for the request.                                                                                                                       |
| `config`                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                     | :heavy_minus_sign:                                                                                                                                               | Available config options for making requests.                                                                                                                    |


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

sdk.timeOffPolicies.putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployees({
  requestBody: {
    employees: [
      {
        balance: "quibusdam",
        uuid: "b5a34181-4301-4042-9813-d5208ece7e25",
      },
      {
        balance: "nesciunt",
        uuid: "b668451c-6c6e-4205-a16d-eab3fec9578a",
      },
      {
        balance: "voluptas",
        uuid: "4584273a-8418-4d16-a309-fb0929921aef",
      },
      {
        balance: "distinctio",
        uuid: "9f58c4d8-6e68-4e4b-a056-013f59da757a",
      },
    ],
  },
  timeOffPolicyUuid: "quis",
}).then((res: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                            | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                            | [operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest](../../models/operations/putversiontimeoffpoliciestimeoffpolicyuuidaddemployeesrequest.md) | :heavy_check_mark:                                                                                                                                                   | The request object to use for the request.                                                                                                                           |
| `config`                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                         | :heavy_minus_sign:                                                                                                                                                   | Available config options for making requests.                                                                                                                        |


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

sdk.timeOffPolicies.putVersionTimeOffPoliciesTimeOffPolicyUuidBalance({
  requestBody: {
    employees: [
      {
        balance: "accusamus",
        uuid: "cfef66ef-1caa-4338-bc2b-eb477373c8d7",
      },
      {
        balance: "odit",
        uuid: "f64d1db1-f2c4-4310-a61e-96349e1cf9e0",
      },
      {
        balance: "nisi",
        uuid: "e3a43700-0ae6-4b6b-89b8-f759eac55a97",
      },
    ],
  },
  timeOffPolicyUuid: "labore",
}).then((res: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest](../../models/operations/putversiontimeoffpoliciestimeoffpolicyuuidbalancerequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse](../../models/operations/putversiontimeoffpoliciestimeoffpolicyuuidbalanceresponse.md)>**

