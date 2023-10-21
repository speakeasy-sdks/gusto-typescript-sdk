# Employees
(*employees*)

### Available Operations

* [deleteV1Employee](#deletev1employee) - Delete an onboarding employee
* [getV1Employees](#getv1employees) - Get an employee
* [getV1EmployeesEmployeeIdCustomFields](#getv1employeesemployeeidcustomfields) - Get an employee's custom fields
* [getV1EmployeesEmployeeIdHomeAddress](#getv1employeesemployeeidhomeaddress) - Get an employee's home address
* [getV1EmployeesEmployeeIdOnboardingStatus](#getv1employeesemployeeidonboardingstatus) - Get the employee's onboarding status
* [getVersionEmployeesTimeOffActivities](#getversionemployeestimeoffactivities) - Get employee time off activities
* [postV1Employees](#postv1employees) - Create an employee
* [putV1EmployeeFinishOnboarding](#putv1employeefinishonboarding) - Finish onboarding an employee
* [putV1Employees](#putv1employees) - Update an employee
* [putV1EmployeesEmployeeIdHomeAddress](#putv1employeesemployeeidhomeaddress) - Update an employee's home address
* [putV1EmployeesEmployeeIdOnboardingStatus](#putv1employeesemployeeidonboardingstatus) - Update the employee's onboarding status

## deleteV1Employee

Use this endpoint to delete an employee who is in onboarding. Deleting an onboarded employee is not allowed. Please check out the Terminations api if you need to terminate an onboarded employee.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1EmployeeRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";

  const res = await sdk.employees.deleteV1Employee(employeeId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteV1EmployeeResponse](../../models/operations/deletev1employeeresponse.md)>**


## getV1Employees

Get an employee.

scope: `employees:read`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesInclude, GetV1EmployeesRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";
const include: GetV1EmployeesInclude = GetV1EmployeesInclude.AllCompensations;

  const res = await sdk.employees.getV1Employees(employeeId, include);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                            | The UUID of the employee                                                                                                                                                                                                                                                                      |
| `include`                                                                                                                                                                                                                                                                                     | [operations.GetV1EmployeesInclude](../../models/operations/getv1employeesinclude.md)                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                            | Include the requested attribute(s) in each employee response, multiple options are comma separated. Available options:<br/>- all_compensations: Include all effective dated compensations for each job instead of only the current compensation<br/>- custom_fields: Include employees' custom fields |
| `config`                                                                                                                                                                                                                                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                            | Available config options for making requests.                                                                                                                                                                                                                                                 |


### Response

**Promise<[operations.GetV1EmployeesResponse](../../models/operations/getv1employeesresponse.md)>**


## getV1EmployeesEmployeeIdCustomFields

Returns a list of the employee's custom fields.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdCustomFieldsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";
const page: number = 6617.63;
const per: number = 9828.87;

  const res = await sdk.employees.getV1EmployeesEmployeeIdCustomFields(employeeId, page, per);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `employeeId`                                                         | *string*                                                             | :heavy_check_mark:                                                   | The UUID of the employee                                             |
| `page`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | The page that is requested. When unspecified, will load all objects. |
| `per`                                                                | *number*                                                             | :heavy_minus_sign:                                                   | Number of objects per page. When unspecified, will default to 25     |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdCustomFieldsResponse](../../models/operations/getv1employeesemployeeidcustomfieldsresponse.md)>**


## getV1EmployeesEmployeeIdHomeAddress

The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdHomeAddressRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";

  const res = await sdk.employees.getV1EmployeesEmployeeIdHomeAddress(employeeId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdHomeAddressResponse](../../models/operations/getv1employeesemployeeidhomeaddressresponse.md)>**


## getV1EmployeesEmployeeIdOnboardingStatus

# Description
Retrieves an employee's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.

scope: `employees:read`

## onboarding_status

### Admin-facilitated onboarding
| onboarding_status | Description |
|:------------------|------------:|
| `admin_onboarding_incomplete` | Admin needs to complete the full employee-onboarding. |
| `onboarding_completed` | Employee has been fully onboarded and verified. |

### Employee self-onboarding
| onboarding_status | Description |
|:------------------|------------:|
| `admin_onboarding_incomplete` | Admin needs to enter basic information about the employee. |
| `self_onboarding_pending_invite` | Admin has the intention to invite the employee to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
| `self_onboarding_invited` | Employee has been sent an invitation to self-onboard. |
| `self_onboarding_invited_started` | Employee has started the self-onboarding process. |
| `self_onboarding_invited_overdue` | Employee's start date has passed, and employee has still not completed self-onboarding. |
| `self_onboarding_completed_by_employee` | Employee has completed entering in their information. The status should be updated via API to "self_onboarding_awaiting_admin_review" from here, once the Admin has started reviewing. |
| `self_onboarding_awaiting_admin_review` | Admin needs to review employee's entered information and confirm onboarding. |
| `onboarding_completed` | Employee has been fully onboarded and verified. |

## onboarding_steps

| onboarding_steps | Requirement(s) to be completed |
|:-----------------|-------------------------------:|
| `personal_details` | Add employee's first name, last name, email, date of birth, social security number |
| `compensation_details` | Associate employee to a job & compensation. |
| `add_work_address` | Add employee work address. |
| `add_home_address` | Add employee home address. |
| `federal_tax_setup` | Set up federal tax withholdings. |
| `state_tax_setup` | Set up state tax withholdings. |
| `direct_deposit_setup` | Set up employee's direct deposit. |
| `employee_form_signing` | Employee forms (e.g., W4, direct deposit authorization) are generated & signed. |
| `admin_review` | Admin reviews & confirms employee details (only required for Employee self-onboarding) |

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdOnboardingStatusRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";

  const res = await sdk.employees.getV1EmployeesEmployeeIdOnboardingStatus(employeeId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdOnboardingStatusResponse](../../models/operations/getv1employeesemployeeidonboardingstatusresponse.md)>**


## getVersionEmployeesTimeOffActivities

Get employee time off activities.

scope: `employee_time_off_activities:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetVersionEmployeesTimeOffActivitiesRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeUuid: string = "string";
const timeOffType: string = "string";

  const res = await sdk.employees.getVersionEmployeesTimeOffActivities(employeeUuid, timeOffType);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                   | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `employeeUuid`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | The UUID of the employee                                                    |
| `timeOffType`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | The time off type name you want to query data for. ex: 'sick' or 'vacation' |
| `config`                                                                    | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                | :heavy_minus_sign:                                                          | Available config options for making requests.                               |


### Response

**Promise<[operations.GetVersionEmployeesTimeOffActivitiesResponse](../../models/operations/getversionemployeestimeoffactivitiesresponse.md)>**


## postV1Employees

Create an employee.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1EmployeesRequest, PostV1EmployeesRequestBody } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const requestBody: PostV1EmployeesRequestBody = {};

  const res = await sdk.employees.postV1Employees(companyId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `companyId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The UUID of the company                                                                        |
| `requestBody`                                                                                  | [operations.PostV1EmployeesRequestBody](../../models/operations/postv1employeesrequestbody.md) | :heavy_minus_sign:                                                                             | Create an employee.                                                                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostV1EmployeesResponse](../../models/operations/postv1employeesresponse.md)>**


## putV1EmployeeFinishOnboarding

This endpoint is currently supported but will eventually be deprecated; please use `/v1/employees/{employee_id}/onboarding_status` instead.

Call this endpoint as the very last step of employee onboarding to complete their onboarding. When successful, the employee's `onboarded` attribute will be updated to true, indicating that they can be included in company's payrolls.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1EmployeeFinishOnboardingRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";

  const res = await sdk.employees.putV1EmployeeFinishOnboarding(employeeId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PutV1EmployeeFinishOnboardingResponse](../../models/operations/putv1employeefinishonboardingresponse.md)>**


## putV1Employees

Update an employee.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1EmployeesRequest, PutV1EmployeesRequestBody } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";
const requestBody: PutV1EmployeesRequestBody = {
  version: "string",
};

  const res = await sdk.employees.putV1Employees(employeeId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | The UUID of the employee                                                                     |
| `requestBody`                                                                                | [operations.PutV1EmployeesRequestBody](../../models/operations/putv1employeesrequestbody.md) | :heavy_minus_sign:                                                                           | Update an employee.                                                                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PutV1EmployeesResponse](../../models/operations/putv1employeesresponse.md)>**


## putV1EmployeesEmployeeIdHomeAddress

The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1EmployeesEmployeeIdHomeAddressRequest,
  PutV1EmployeesEmployeeIdHomeAddressRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";
const requestBody: PutV1EmployeesEmployeeIdHomeAddressRequestBody = {
  version: "string",
};

  const res = await sdk.employees.putV1EmployeesEmployeeIdHomeAddress(employeeId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                                                           | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The UUID of the employee                                                                                                               |
| `requestBody`                                                                                                                          | [operations.PutV1EmployeesEmployeeIdHomeAddressRequestBody](../../models/operations/putv1employeesemployeeidhomeaddressrequestbody.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PutV1EmployeesEmployeeIdHomeAddressResponse](../../models/operations/putv1employeesemployeeidhomeaddressresponse.md)>**


## putV1EmployeesEmployeeIdOnboardingStatus

scope: `employees:write`

Updates an employee's onboarding status.
Below is a list of valid onboarding status changes depending on the intended action to be performed on behalf of the employee.

| Action | current onboarding_status | new onboarding_status |
|:------------------|:------------:|----------:|
| Mark an employee as self-onboarding | `admin_onboarding_incomplete` | `self_onboarding_pending_invite` |
| Invite an employee to self-onboard | `admin_onboarding_incomplete` or `self_onboarding_pending_invite` | `self_onboarding_invited` |
| Cancel an employee's self-onboarding | `self_onboarding_invited` or `self_onboarding_pending_invite` | `admin_onboarding_incomplete` |
| Review an employee's self-onboarded info | `self_onboarding_completed_by_employee` | `self_onboarding_awaiting_admin_review` |
| Finish an employee's onboarding | `admin_onboarding_incomplete` or `self_onboarding_awaiting_admin_review` | `onboarding_completed` |

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1EmployeesEmployeeIdOnboardingStatusRequest,
  PutV1EmployeesEmployeeIdOnboardingStatusRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";
const requestBody: PutV1EmployeesEmployeeIdOnboardingStatusRequestBody = {
  onboardingStatus: "string",
};

  const res = await sdk.employees.putV1EmployeesEmployeeIdOnboardingStatus(employeeId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `employeeId`                                                                                                                                     | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The UUID of the employee                                                                                                                         |
| `requestBody`                                                                                                                                    | [operations.PutV1EmployeesEmployeeIdOnboardingStatusRequestBody](../../models/operations/putv1employeesemployeeidonboardingstatusrequestbody.md) | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.PutV1EmployeesEmployeeIdOnboardingStatusResponse](../../models/operations/putv1employeesemployeeidonboardingstatusresponse.md)>**

