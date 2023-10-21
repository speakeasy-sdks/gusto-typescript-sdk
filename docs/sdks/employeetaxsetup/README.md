# EmployeeTaxSetup
(*employeeTaxSetup*)

### Available Operations

* [getV1EmployeesEmployeeIdFederalTaxes](#getv1employeesemployeeidfederaltaxes) - Get an employee's federal taxes
* [getV1EmployeesEmployeeIdStateTaxes](#getv1employeesemployeeidstatetaxes) - Get an employee's state taxes
* [putV1EmployeesEmployeeIdFederalTaxes](#putv1employeesemployeeidfederaltaxes) - Update an employee's federal taxes
* [putV1EmployeesEmployeeIdStateTaxes](#putv1employeesemployeeidstatetaxes) - Update an employee's state taxes

## getV1EmployeesEmployeeIdFederalTaxes

Get attributes relevant for an employee's federal taxes.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdFederalTaxesRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeUuid: string = "string";

  const res = await sdk.employeeTaxSetup.getV1EmployeesEmployeeIdFederalTaxes(employeeUuid);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeUuid`                                               | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdFederalTaxesResponse](../../models/operations/getv1employeesemployeeidfederaltaxesresponse.md)>**


## getV1EmployeesEmployeeIdStateTaxes

Get attributes relevant for an employee's state taxes.

The data required to correctly calculate an employee's state taxes varies by both home and work location. This API returns information about each question that must be answered grouped by state. Mostly commonly, an employee lives and works in the same state and will only have questions for a single state. The response contains metadata about each question, the type of answer expected, and the current answer stored in Gusto for that question.

Answers are represented by an array. Today, this array can only be empty or contain exactly one element, but is designed to allow for forward compatibility with effective-dated fields. Until effective dated answers are supported, the `valid_from` and `valid_up_to` must always be `"2010-01-01"` and `null` respectively.

## About filing new hire reports
Payroll Admins are responsible for filing a new hire report for each Employee. The `file_new_hire_report` question will only be listed if:
- the `employee.onboarding_status` is one of the following:
  - `admin_onboarding_incomplete`
  - `self_onboarding_awaiting_admin_review`
- that employee's work state requires filing a new hire report


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdStateTaxesRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeUuid: string = "string";

  const res = await sdk.employeeTaxSetup.getV1EmployeesEmployeeIdStateTaxes(employeeUuid);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeUuid`                                               | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdStateTaxesResponse](../../models/operations/getv1employeesemployeeidstatetaxesresponse.md)>**


## putV1EmployeesEmployeeIdFederalTaxes

Update attributes relevant for an employee's federal taxes.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1EmployeesEmployeeIdFederalTaxesRequest,
  PutV1EmployeesEmployeeIdFederalTaxesRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeUuid: string = "string";
const requestBody: PutV1EmployeesEmployeeIdFederalTaxesRequestBody = {
  version: "string",
};

  const res = await sdk.employeeTaxSetup.putV1EmployeesEmployeeIdFederalTaxes(employeeUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeUuid`                                                                                                                           | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The UUID of the employee                                                                                                                 |
| `requestBody`                                                                                                                            | [operations.PutV1EmployeesEmployeeIdFederalTaxesRequestBody](../../models/operations/putv1employeesemployeeidfederaltaxesrequestbody.md) | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.PutV1EmployeesEmployeeIdFederalTaxesResponse](../../models/operations/putv1employeesemployeeidfederaltaxesresponse.md)>**


## putV1EmployeesEmployeeIdStateTaxes

Update attributes relevant for an employee's state taxes.

As described for the GET endpoint, the answers must be supplied in the effective-dated format, but currently only a single answer will be accepted - `valid_from` and `valid_up_to` must be `"2010-01-01"` and `null` respectively.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1EmployeesEmployeeIdStateTaxesRequest,
  PutV1EmployeesEmployeeIdStateTaxesRequestBody,
  PutV1EmployeesEmployeeIdStateTaxesRequestBodyStates,
  PutV1EmployeesEmployeeIdStateTaxesRequestBodyStatesQuestions,
  PutV1EmployeesEmployeeIdStateTaxesRequestBodyStatesQuestionsAnswers,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeUuid: string = "string";
const requestBody: PutV1EmployeesEmployeeIdStateTaxesRequestBody = {
  employeeId: "string",
  states: [
    {
      questions: [
        {
          answers: [
            {
              validFrom: "string",
              value: "string",
            },
          ],
          key: "<key>",
        },
      ],
      state: "string",
    },
  ],
};

  const res = await sdk.employeeTaxSetup.putV1EmployeesEmployeeIdStateTaxes(employeeUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `employeeUuid`                                                                                                                       | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The UUID of the employee                                                                                                             |
| `requestBody`                                                                                                                        | [operations.PutV1EmployeesEmployeeIdStateTaxesRequestBody](../../models/operations/putv1employeesemployeeidstatetaxesrequestbody.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PutV1EmployeesEmployeeIdStateTaxesResponse](../../models/operations/putv1employeesemployeeidstatetaxesresponse.md)>**

