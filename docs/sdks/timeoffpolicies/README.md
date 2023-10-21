# TimeOffPolicies
(*timeOffPolicies*)

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
import { GetCompaniesCompanyUuidTimeOffPoliciesRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";

  const res = await sdk.timeOffPolicies.getCompaniesCompanyUuidTimeOffPolicies(companyUuid);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetTimeOffPoliciesTimeOffPolicyUuidRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const timeOffPolicyUuid: string = "string";

  const res = await sdk.timeOffPolicies.getTimeOffPoliciesTimeOffPolicyUuid(timeOffPolicyUuid);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const requestBody: PostCompaniesCompanyUuidTimeOffPoliciesRequestBody = {
  accrualMethod: PostCompaniesCompanyUuidTimeOffPoliciesRequestBodyAccrualMethod.PerAnniversaryYear,
  name: "string",
  policyType: "string",
};

  const res = await sdk.timeOffPolicies.postCompaniesCompanyUuidTimeOffPolicies(companyUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";
const payrollId: string = "string";
const requestBody: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody = {};

  const res = await sdk.timeOffPolicies.postV1PayrollsPayrollIdCalculateAccruingTimeOffHours(employeeId, payrollId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const timeOffPolicyUuid: string = "string";
const requestBody: PutTimeOffPoliciesTimeOffPolicyUuidRequestBody = {};

  const res = await sdk.timeOffPolicies.putTimeOffPoliciesTimeOffPolicyUuid(timeOffPolicyUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const timeOffPolicyUuid: string = "string";

  const res = await sdk.timeOffPolicies.putV1TimeOffPoliciesTimeOffPolicyUuidDeactivate(timeOffPolicyUuid);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const timeOffPolicyUuid: string = "string";
const requestBody: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody = {
  employees: [
    {},
  ],
};

  const res = await sdk.timeOffPolicies.putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployees(timeOffPolicyUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const timeOffPolicyUuid: string = "string";
const requestBody: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody = {
  employees: [
    {},
  ],
};

  const res = await sdk.timeOffPolicies.putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployees(timeOffPolicyUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const timeOffPolicyUuid: string = "string";
const requestBody: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody = {
  employees: [
    {},
  ],
};

  const res = await sdk.timeOffPolicies.putVersionTimeOffPoliciesTimeOffPolicyUuidBalance(timeOffPolicyUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `timeOffPolicyUuid`                                                                                                                                                | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The UUID of the company time off policy                                                                                                                            |
| `requestBody`                                                                                                                                                      | [operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody](../../models/operations/putversiontimeoffpoliciestimeoffpolicyuuidbalancerequestbody.md) | :heavy_minus_sign:                                                                                                                                                 | A list of employee objects containing the employee uuid and time off hours balance                                                                                 |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse](../../models/operations/putversiontimeoffpoliciestimeoffpolicyuuidbalanceresponse.md)>**

