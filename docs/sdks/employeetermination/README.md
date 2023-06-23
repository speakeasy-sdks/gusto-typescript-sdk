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
import { DeleteV1EmployeesEmployeeIdTerminationsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeeTermination.deleteV1EmployeesEmployeeIdTerminations({
  employeeId: "ullam",
}).then((res: DeleteV1EmployeesEmployeeIdTerminationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.DeleteV1EmployeesEmployeeIdTerminationsRequest](../../models/operations/deletev1employeesemployeeidterminationsrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.DeleteV1EmployeesEmployeeIdTerminationsResponse](../../models/operations/deletev1employeesemployeeidterminationsresponse.md)>**


## getV1CompaniesCompanyIdUnprocessedTerminationPayPeriods

When a payroll admin terminates an employee and selects "Dismissal Payroll" as the employee's final payroll, their last pay period will appear on the list. 

This endpoint returns the unprocessed pay periods for past and future terminated employees in a given company.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeeTermination.getV1CompaniesCompanyIdUnprocessedTerminationPayPeriods({
  companyId: "nisi",
}).then((res: GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest](../../models/operations/getv1companiescompanyidunprocessedterminationpayperiodsrequest.md) | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse](../../models/operations/getv1companiescompanyidunprocessedterminationpayperiodsresponse.md)>**


## getV1EmployeesEmployeeIdTerminations

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdTerminationsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeeTermination.getV1EmployeesEmployeeIdTerminations({
  employeeId: "aut",
}).then((res: GetV1EmployeesEmployeeIdTerminationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetV1EmployeesEmployeeIdTerminationsRequest](../../models/operations/getv1employeesemployeeidterminationsrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdTerminationsResponse](../../models/operations/getv1employeesemployeeidterminationsresponse.md)>**


## postV1EmployeesEmployeeIdTerminations

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1EmployeesEmployeeIdTerminationsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeeTermination.postV1EmployeesEmployeeIdTerminations({
  requestBody: {
    effectiveDate: "voluptatum",
    runTerminationPayroll: false,
  },
  employeeId: "qui",
}).then((res: PostV1EmployeesEmployeeIdTerminationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PostV1EmployeesEmployeeIdTerminationsRequest](../../models/operations/postv1employeesemployeeidterminationsrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PostV1EmployeesEmployeeIdTerminationsResponse](../../models/operations/postv1employeesemployeeidterminationsresponse.md)>**


## putV1TerminationsEmployeeId

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1TerminationsEmployeeIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeeTermination.putV1TerminationsEmployeeId({
  requestBody: {
    effectiveDate: "quibusdam",
    runTerminationPayroll: false,
    version: "ex",
  },
  employeeId: "deleniti",
}).then((res: PutV1TerminationsEmployeeIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PutV1TerminationsEmployeeIdRequest](../../models/operations/putv1terminationsemployeeidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PutV1TerminationsEmployeeIdResponse](../../models/operations/putv1terminationsemployeeidresponse.md)>**

