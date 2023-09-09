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

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "saepe";

sdk.employeeTermination.deleteV1EmployeesEmployeeIdTerminations(employeeId).then((res: DeleteV1EmployeesEmployeeIdTerminationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteV1EmployeesEmployeeIdTerminationsResponse](../../models/operations/deletev1employeesemployeeidterminationsresponse.md)>**


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

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "ipsum";

sdk.employeeTermination.getV1CompaniesCompanyIdUnprocessedTerminationPayPeriods(companyId).then((res: GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse](../../models/operations/getv1companiescompanyidunprocessedterminationpayperiodsresponse.md)>**


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

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "veritatis";

sdk.employeeTermination.getV1EmployeesEmployeeIdTerminations(employeeId).then((res: GetV1EmployeesEmployeeIdTerminationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdTerminationsResponse](../../models/operations/getv1employeesemployeeidterminationsresponse.md)>**


## postV1EmployeesEmployeeIdTerminations

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1EmployeesEmployeeIdTerminationsRequest,
  PostV1EmployeesEmployeeIdTerminationsRequestBody,
  PostV1EmployeesEmployeeIdTerminationsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "nobis";
const requestBody: PostV1EmployeesEmployeeIdTerminationsRequestBody = {
  effectiveDate: "quos",
  runTerminationPayroll: false,
};

sdk.employeeTermination.postV1EmployeesEmployeeIdTerminations(employeeId, requestBody).then((res: PostV1EmployeesEmployeeIdTerminationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `employeeId`                                                                                                                               | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The UUID of the employee                                                                                                                   |
| `requestBody`                                                                                                                              | [operations.PostV1EmployeesEmployeeIdTerminationsRequestBody](../../models/operations/postv1employeesemployeeidterminationsrequestbody.md) | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PostV1EmployeesEmployeeIdTerminationsResponse](../../models/operations/postv1employeesemployeeidterminationsresponse.md)>**


## putV1TerminationsEmployeeId

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1TerminationsEmployeeIdRequest,
  PutV1TerminationsEmployeeIdRequestBody,
  PutV1TerminationsEmployeeIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "tempore";
const requestBody: PutV1TerminationsEmployeeIdRequestBody = {
  effectiveDate: "cupiditate",
  runTerminationPayroll: false,
  version: "aperiam",
};

sdk.employeeTermination.putV1TerminationsEmployeeId(employeeId, requestBody).then((res: PutV1TerminationsEmployeeIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The UUID of the employee                                                                                               |
| `requestBody`                                                                                                          | [operations.PutV1TerminationsEmployeeIdRequestBody](../../models/operations/putv1terminationsemployeeidrequestbody.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PutV1TerminationsEmployeeIdResponse](../../models/operations/putv1terminationsemployeeidresponse.md)>**

