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
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
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

## getTimeOffPoliciesTimeOffPolicyUuid

Get a time off policy
scope: `time_off_policies:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetTimeOffPoliciesTimeOffPolicyUuidResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
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

## postCompaniesCompanyUuidTimeOffPolicies

Create a Time Off Policy
scope: `time_off_policies:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostCompaniesCompanyUuidTimeOffPoliciesRequestBodyAccrualMethodEnum,
  PostCompaniesCompanyUuidTimeOffPoliciesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.timeOffPolicies.postCompaniesCompanyUuidTimeOffPolicies({
  requestBody: {
    accrualMethod: PostCompaniesCompanyUuidTimeOffPoliciesRequestBodyAccrualMethodEnum.PerPayPeriod,
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
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
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

## putTimeOffPoliciesTimeOffPolicyUuid

Update a Time Off Policy
scope: `time_off_policies:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutTimeOffPoliciesTimeOffPolicyUuidRequestBodyAccrualMethodEnum,
  PutTimeOffPoliciesTimeOffPolicyUuidResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.timeOffPolicies.putTimeOffPoliciesTimeOffPolicyUuid({
  requestBody: {
    accrualMethod: PutTimeOffPoliciesTimeOffPolicyUuidRequestBodyAccrualMethodEnum.PerHourWorkedNoOvertime,
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

## putV1TimeOffPoliciesTimeOffPolicyUuidDeactivate

Deactivate a time off policy

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
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

## putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployees

Remove employees from a time off policy
scope: `time_off_policies:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
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

## putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployees

Add employees to a time off policy. Employees are required to have at least one job to be added to a time off policy. Accepts starting balances for non-unlimited policies
scope: `time_off_policies:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
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

## putVersionTimeOffPoliciesTimeOffPolicyUuidBalance

Updates time off hours balances for employees for a time off policy
scope: `time_off_policies:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
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