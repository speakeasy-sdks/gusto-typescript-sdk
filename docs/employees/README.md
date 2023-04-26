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
import { DeleteV1EmployeeRequest, DeleteV1EmployeeResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteV1EmployeeRequest = {
  employeeId: "itaque",
};

sdk.employees.deleteV1Employee(req).then((res: DeleteV1EmployeeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1Employees

Get an employee.

scope: `employees:read`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesIncludeEnum, GetV1EmployeesRequest, GetV1EmployeesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  CompensationFlsaStatusEnum,
  CompensationPaymentUnitEnum,
  CustomFieldTypeEnum,
  EmployeeCurrentEmploymentStatusEnum,
  EmployeePaymentMethodEnum,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1EmployeesRequest = {
  employeeId: "dolorum",
  include: GetV1EmployeesIncludeEnum.AllCompensations,
};

sdk.employees.getV1Employees(req).then((res: GetV1EmployeesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1EmployeesEmployeeIdCustomFields

Returns a list of the employee's custom fields.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1EmployeesEmployeeIdCustomFieldsRequest,
  GetV1EmployeesEmployeeIdCustomFieldsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { CustomFieldTypeEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1EmployeesEmployeeIdCustomFieldsRequest = {
  employeeId: "omnis",
  page: 9453.02,
  per: 984.78,
};

sdk.employees.getV1EmployeesEmployeeIdCustomFields(req).then((res: GetV1EmployeesEmployeeIdCustomFieldsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1EmployeesEmployeeIdHomeAddress

The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1EmployeesEmployeeIdHomeAddressRequest,
  GetV1EmployeesEmployeeIdHomeAddressResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1EmployeesEmployeeIdHomeAddressRequest = {
  employeeId: "at",
};

sdk.employees.getV1EmployeesEmployeeIdHomeAddress(req).then((res: GetV1EmployeesEmployeeIdHomeAddressResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

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
import {
  GetV1EmployeesEmployeeIdOnboardingStatusRequest,
  GetV1EmployeesEmployeeIdOnboardingStatusResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1EmployeesEmployeeIdOnboardingStatusRequest = {
  employeeId: "et",
};

sdk.employees.getV1EmployeesEmployeeIdOnboardingStatus(req).then((res: GetV1EmployeesEmployeeIdOnboardingStatusResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getVersionEmployeesTimeOffActivities

Get employee time off activities.

scope: `employee_time_off_activities:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetVersionEmployeesTimeOffActivitiesRequest,
  GetVersionEmployeesTimeOffActivitiesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetVersionEmployeesTimeOffActivitiesRequest = {
  employeeUuid: "voluptate",
  timeOffType: "ipsa",
};

sdk.employees.getVersionEmployeesTimeOffActivities(req).then((res: GetVersionEmployeesTimeOffActivitiesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postV1Employees

Create an employee.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1EmployeesRequest, PostV1EmployeesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  CompensationFlsaStatusEnum,
  CompensationPaymentUnitEnum,
  CustomFieldTypeEnum,
  EmployeeCurrentEmploymentStatusEnum,
  EmployeePaymentMethodEnum,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1EmployeesRequest = {
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
};

sdk.employees.postV1Employees(req).then((res: PostV1EmployeesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1EmployeeFinishOnboarding

This endpoint is currently supported but will eventually be deprecated; please use `/v1/employees/{employee_id}/onboarding_status` instead.

Call this endpoint as the very last step of employee onboarding to complete their onboarding. When successful, the employee's `onboarded` attribute will be updated to true, indicating that they can be included in company's payrolls.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1EmployeeFinishOnboardingRequest, PutV1EmployeeFinishOnboardingResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  CompensationFlsaStatusEnum,
  CompensationPaymentUnitEnum,
  CustomFieldTypeEnum,
  EmployeeCurrentEmploymentStatusEnum,
  EmployeePaymentMethodEnum,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1EmployeeFinishOnboardingRequest = {
  employeeId: "mollitia",
};

sdk.employees.putV1EmployeeFinishOnboarding(req).then((res: PutV1EmployeeFinishOnboardingResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1Employees

Update an employee.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1EmployeesRequest, PutV1EmployeesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  CompensationFlsaStatusEnum,
  CompensationPaymentUnitEnum,
  CustomFieldTypeEnum,
  EmployeeCurrentEmploymentStatusEnum,
  EmployeePaymentMethodEnum,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1EmployeesRequest = {
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
};

sdk.employees.putV1Employees(req).then((res: PutV1EmployeesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1EmployeesEmployeeIdHomeAddress

The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1EmployeesEmployeeIdHomeAddressRequest,
  PutV1EmployeesEmployeeIdHomeAddressResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1EmployeesEmployeeIdHomeAddressRequest = {
  requestBody: {
    city: "Fort Libbieburgh",
    state: "voluptatibus",
    street1: "voluptas",
    street2: "asperiores",
    version: "aperiam",
    zip: "ea",
  },
  employeeId: "quaerat",
};

sdk.employees.putV1EmployeesEmployeeIdHomeAddress(req).then((res: PutV1EmployeesEmployeeIdHomeAddressResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

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
  PutV1EmployeesEmployeeIdOnboardingStatusResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1EmployeesEmployeeIdOnboardingStatusRequest = {
  requestBody: {
    onboardingStatus: "consequuntur",
  },
  employeeId: "repellendus",
};

sdk.employees.putV1EmployeesEmployeeIdOnboardingStatus(req).then((res: PutV1EmployeesEmployeeIdOnboardingStatusResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
