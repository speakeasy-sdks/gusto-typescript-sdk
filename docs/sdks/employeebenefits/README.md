# EmployeeBenefits
(*employeeBenefits*)

### Available Operations

* [deleteV1EmployeeBenefitsEmployeeBenefitId](#deletev1employeebenefitsemployeebenefitid) - Delete an employee benefit
* [getV1EmployeeBenefitsEmployeeBenefitId](#getv1employeebenefitsemployeebenefitid) - Get an employee benefit
* [getV1EmployeesEmployeeIdEmployeeBenefits](#getv1employeesemployeeidemployeebenefits) - Get all benefits for an employee
* [postEmployeeYtdBenefitAmountsFromDifferentCompany](#postemployeeytdbenefitamountsfromdifferentcompany) - Create year-to-date benefit amounts from a different company
* [postV1EmployeesEmployeeIdEmployeeBenefits](#postv1employeesemployeeidemployeebenefits) - Create an employee benefit
* [putV1EmployeeBenefitsEmployeeBenefitId](#putv1employeebenefitsemployeebenefitid) - Update an employee benefit

## deleteV1EmployeeBenefitsEmployeeBenefitId

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

scope: `employee_benefits:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeBenefitId: string = "SDD";

  const res = await sdk.employeeBenefits.deleteV1EmployeeBenefitsEmployeeBenefitId(employeeBenefitId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeBenefitId`                                          | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee benefit.                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse](../../models/operations/deletev1employeebenefitsemployeebenefitidresponse.md)>**


## getV1EmployeeBenefitsEmployeeBenefitId

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

scope: `employee_benefits:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeeBenefitsEmployeeBenefitIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeBenefitId: string = "Alvina";

  const res = await sdk.employeeBenefits.getV1EmployeeBenefitsEmployeeBenefitId(employeeBenefitId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeBenefitId`                                          | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee benefit.                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1EmployeeBenefitsEmployeeBenefitIdResponse](../../models/operations/getv1employeebenefitsemployeebenefitidresponse.md)>**


## getV1EmployeesEmployeeIdEmployeeBenefits

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

Returns an array of all employee benefits for this employee

scope: `employee_benefits:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdEmployeeBenefitsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "Fresh";
const page: number = 1074.14;
const per: number = 7853.61;

  const res = await sdk.employeeBenefits.getV1EmployeesEmployeeIdEmployeeBenefits(employeeId, page, per);

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

**Promise<[operations.GetV1EmployeesEmployeeIdEmployeeBenefitsResponse](../../models/operations/getv1employeesemployeeidemployeebenefitsresponse.md)>**


## postEmployeeYtdBenefitAmountsFromDifferentCompany

Year-to-date benefit amounts from a different company represents the amount of money added to an employees plan during a current year, made outside of the current contribution when they were employed at a different company.

scope: `employee_benefits:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { PostEmployeeYtdBenefitAmountsFromDifferentCompany } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "copy";
const postEmployeeYtdBenefitAmountsFromDifferentCompany: PostEmployeeYtdBenefitAmountsFromDifferentCompany = {
  taxYear: 3580.76,
};

  const res = await sdk.employeeBenefits.postEmployeeYtdBenefitAmountsFromDifferentCompany(employeeId, postEmployeeYtdBenefitAmountsFromDifferentCompany);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `employeeId`                                                                                                                         | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The UUID of the employee                                                                                                             |
| `postEmployeeYtdBenefitAmountsFromDifferentCompany`                                                                                  | [shared.PostEmployeeYtdBenefitAmountsFromDifferentCompany](../../models/shared/postemployeeytdbenefitamountsfromdifferentcompany.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse](../../models/operations/postemployeeytdbenefitamountsfromdifferentcompanyresponse.md)>**


## postV1EmployeesEmployeeIdEmployeeBenefits

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

scope: `employee_benefits:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1EmployeesEmployeeIdEmployeeBenefitsRequest,
  PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody,
  PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContribution,
  PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContributionType,
  PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyDeductionReducesTaxableIncome,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "Dinar";
const requestBody: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody = {
  companyBenefitUuid: "engage Sausages Officer",
  contribution: {
    value: "female",
  },
};

  const res = await sdk.employeeBenefits.postV1EmployeesEmployeeIdEmployeeBenefits(employeeId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The UUID of the employee                                                                                                                           |
| `requestBody`                                                                                                                                      | [operations.PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody](../../models/operations/postv1employeesemployeeidemployeebenefitsrequestbody.md) | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PostV1EmployeesEmployeeIdEmployeeBenefitsResponse](../../models/operations/postv1employeesemployeeidemployeebenefitsresponse.md)>**


## putV1EmployeeBenefitsEmployeeBenefitId

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

scope: `employee_benefits:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1EmployeeBenefitsEmployeeBenefitIdRequest,
  PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody,
  PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContribution,
  PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContributionType,
  PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyDeductionReducesTaxableIncome,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeBenefitId: string = "West";
const requestBody: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody = {
  contribution: {
    value: "overriding",
  },
  version: "Fantastic Group",
};

  const res = await sdk.employeeBenefits.putV1EmployeeBenefitsEmployeeBenefitId(employeeBenefitId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeBenefitId`                                                                                                                          | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The UUID of the employee benefit.                                                                                                            |
| `requestBody`                                                                                                                                | [operations.PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody](../../models/operations/putv1employeebenefitsemployeebenefitidrequestbody.md) | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.PutV1EmployeeBenefitsEmployeeBenefitIdResponse](../../models/operations/putv1employeebenefitsemployeebenefitidresponse.md)>**

