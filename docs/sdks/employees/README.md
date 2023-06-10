# employees

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
import { DeleteV1EmployeeResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employees.deleteV1Employee({
  employeeId: "itaque",
}).then((res: DeleteV1EmployeeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteV1EmployeeRequest](../../models/operations/deletev1employeerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteV1EmployeeResponse](../../models/operations/deletev1employeeresponse.md)>**


## getV1Employees

Get an employee.

scope: `employees:read`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesInclude, GetV1EmployeesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  CompensationFlsaStatus,
  CompensationPaymentUnit,
  CustomFieldType,
  EmployeeCurrentEmploymentStatus,
  EmployeePaymentMethod,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employees.getV1Employees({
  employeeId: "dolorum",
  include: GetV1EmployeesInclude.AllCompensations,
}).then((res: GetV1EmployeesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetV1EmployeesRequest](../../models/operations/getv1employeesrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetV1EmployeesResponse](../../models/operations/getv1employeesresponse.md)>**


## getV1EmployeesEmployeeIdCustomFields

Returns a list of the employee's custom fields.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdCustomFieldsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CustomFieldType } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employees.getV1EmployeesEmployeeIdCustomFields({
  employeeId: "omnis",
  page: 9453.02,
  per: 984.78,
}).then((res: GetV1EmployeesEmployeeIdCustomFieldsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetV1EmployeesEmployeeIdCustomFieldsRequest](../../models/operations/getv1employeesemployeeidcustomfieldsrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdCustomFieldsResponse](../../models/operations/getv1employeesemployeeidcustomfieldsresponse.md)>**


## getV1EmployeesEmployeeIdHomeAddress

The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdHomeAddressResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employees.getV1EmployeesEmployeeIdHomeAddress({
  employeeId: "at",
}).then((res: GetV1EmployeesEmployeeIdHomeAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetV1EmployeesEmployeeIdHomeAddressRequest](../../models/operations/getv1employeesemployeeidhomeaddressrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


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
import { GetV1EmployeesEmployeeIdOnboardingStatusResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employees.getV1EmployeesEmployeeIdOnboardingStatus({
  employeeId: "et",
}).then((res: GetV1EmployeesEmployeeIdOnboardingStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.GetV1EmployeesEmployeeIdOnboardingStatusRequest](../../models/operations/getv1employeesemployeeidonboardingstatusrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdOnboardingStatusResponse](../../models/operations/getv1employeesemployeeidonboardingstatusresponse.md)>**


## getVersionEmployeesTimeOffActivities

Get employee time off activities.

scope: `employee_time_off_activities:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetVersionEmployeesTimeOffActivitiesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employees.getVersionEmployeesTimeOffActivities({
  employeeUuid: "voluptate",
  timeOffType: "ipsa",
}).then((res: GetVersionEmployeesTimeOffActivitiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetVersionEmployeesTimeOffActivitiesRequest](../../models/operations/getversionemployeestimeoffactivitiesrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetVersionEmployeesTimeOffActivitiesResponse](../../models/operations/getversionemployeestimeoffactivitiesresponse.md)>**


## postV1Employees

Create an employee.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1EmployeesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  CompensationFlsaStatus,
  CompensationPaymentUnit,
  CustomFieldType,
  EmployeeCurrentEmploymentStatus,
  EmployeePaymentMethod,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employees.postV1Employees({
  requestBody: {
    dateOfBirth: "minima",
    email: "Darlene_Ferry@gmail.com",
    firstName: "Alexanne",
    lastName: "Ledner",
    middleInitial: "aut",
    selfOnboarding: false,
    ssn: "laudantium",
  },
  companyId: "eum",
}).then((res: PostV1EmployeesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PostV1EmployeesRequest](../../models/operations/postv1employeesrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PostV1EmployeesResponse](../../models/operations/postv1employeesresponse.md)>**


## putV1EmployeeFinishOnboarding

This endpoint is currently supported but will eventually be deprecated; please use `/v1/employees/{employee_id}/onboarding_status` instead.

Call this endpoint as the very last step of employee onboarding to complete their onboarding. When successful, the employee's `onboarded` attribute will be updated to true, indicating that they can be included in company's payrolls.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1EmployeeFinishOnboardingResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  CompensationFlsaStatus,
  CompensationPaymentUnit,
  CustomFieldType,
  EmployeeCurrentEmploymentStatus,
  EmployeePaymentMethod,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employees.putV1EmployeeFinishOnboarding({
  employeeId: "mollitia",
}).then((res: PutV1EmployeeFinishOnboardingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PutV1EmployeeFinishOnboardingRequest](../../models/operations/putv1employeefinishonboardingrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PutV1EmployeeFinishOnboardingResponse](../../models/operations/putv1employeefinishonboardingresponse.md)>**


## putV1Employees

Update an employee.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1EmployeesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  CompensationFlsaStatus,
  CompensationPaymentUnit,
  CustomFieldType,
  EmployeeCurrentEmploymentStatus,
  EmployeePaymentMethod,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employees.putV1Employees({
  requestBody: {
    dateOfBirth: "ab",
    email: "Demond58@yahoo.com",
    firstName: "Dennis",
    lastName: "Russel",
    middleInitial: "explicabo",
    ssn: "voluptas",
    twoPercentShareholder: false,
    version: "aut",
  },
  employeeId: "dignissimos",
}).then((res: PutV1EmployeesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.PutV1EmployeesRequest](../../models/operations/putv1employeesrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PutV1EmployeesResponse](../../models/operations/putv1employeesresponse.md)>**


## putV1EmployeesEmployeeIdHomeAddress

The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1EmployeesEmployeeIdHomeAddressResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employees.putV1EmployeesEmployeeIdHomeAddress({
  requestBody: {
    city: "Fort Libbieburgh",
    state: "voluptatibus",
    street1: "voluptas",
    street2: "asperiores",
    version: "aperiam",
    zip: "ea",
  },
  employeeId: "quaerat",
}).then((res: PutV1EmployeesEmployeeIdHomeAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PutV1EmployeesEmployeeIdHomeAddressRequest](../../models/operations/putv1employeesemployeeidhomeaddressrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


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
import { PutV1EmployeesEmployeeIdOnboardingStatusResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employees.putV1EmployeesEmployeeIdOnboardingStatus({
  requestBody: {
    onboardingStatus: "consequuntur",
  },
  employeeId: "repellendus",
}).then((res: PutV1EmployeesEmployeeIdOnboardingStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.PutV1EmployeesEmployeeIdOnboardingStatusRequest](../../models/operations/putv1employeesemployeeidonboardingstatusrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.PutV1EmployeesEmployeeIdOnboardingStatusResponse](../../models/operations/putv1employeesemployeeidonboardingstatusresponse.md)>**

