# employeeTermination

### Available Operations

* [deleteV1EmployeesEmployeeIdTerminations](#deletev1employeesemployeeidterminations) - Delete an employee termination
* [getV1CompaniesCompanyIdUnprocessedTerminationPayPeriods](#getv1companiescompanyidunprocessedterminationpayperiods) - Get termination pay periods for a company
* [getV1EmployeesEmployeeIdTerminations](#getv1employeesemployeeidterminations) - Get terminations for an employee
* [postV1EmployeesEmployeeIdTerminations](#postv1employeesemployeeidterminations) - Create an employee termination
* [putV1TerminationsEmployeeId](#putv1terminationsemployeeid) - Update an employee termination

## deleteV1EmployeesEmployeeIdTerminations

Delete an employee termination. To update an employee's termination, delete the termination first and create a new one.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  DeleteV1EmployeesEmployeeIdTerminationsRequest,
  DeleteV1EmployeesEmployeeIdTerminationsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteV1EmployeesEmployeeIdTerminationsRequest = {
  employeeId: "ullam",
};

sdk.employeeTermination.deleteV1EmployeesEmployeeIdTerminations(req).then((res: DeleteV1EmployeesEmployeeIdTerminationsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1CompaniesCompanyIdUnprocessedTerminationPayPeriods

When a payroll admin terminates an employee and selects "Dismissal Payroll" as the employee's final payroll, their last pay period will appear on the list. 

This endpoint returns the unprocessed pay periods for past and future terminated employees in a given company.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest,
  GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest = {
  companyId: "nisi",
};

sdk.employeeTermination.getV1CompaniesCompanyIdUnprocessedTerminationPayPeriods(req).then((res: GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1EmployeesEmployeeIdTerminations

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1EmployeesEmployeeIdTerminationsRequest,
  GetV1EmployeesEmployeeIdTerminationsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1EmployeesEmployeeIdTerminationsRequest = {
  employeeId: "aut",
};

sdk.employeeTermination.getV1EmployeesEmployeeIdTerminations(req).then((res: GetV1EmployeesEmployeeIdTerminationsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postV1EmployeesEmployeeIdTerminations

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1EmployeesEmployeeIdTerminationsRequest,
  PostV1EmployeesEmployeeIdTerminationsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1EmployeesEmployeeIdTerminationsRequest = {
  requestBody: {
    effectiveDate: "voluptatum",
    runTerminationPayroll: false,
  },
  employeeId: "qui",
};

sdk.employeeTermination.postV1EmployeesEmployeeIdTerminations(req).then((res: PostV1EmployeesEmployeeIdTerminationsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1TerminationsEmployeeId

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1TerminationsEmployeeIdRequest, PutV1TerminationsEmployeeIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1TerminationsEmployeeIdRequest = {
  requestBody: {
    effectiveDate: "quibusdam",
    runTerminationPayroll: false,
    version: "ex",
  },
  employeeId: "deleniti",
};

sdk.employeeTermination.putV1TerminationsEmployeeId(req).then((res: PutV1TerminationsEmployeeIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
