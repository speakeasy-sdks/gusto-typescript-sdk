# employeeBenefits

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
import { DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeeBenefits.deleteV1EmployeeBenefitsEmployeeBenefitId("consequatur").then((res: DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetV1EmployeeBenefitsEmployeeBenefitIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeeBenefitDeductionReducesTaxableIncome } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeeBenefits.getV1EmployeeBenefitsEmployeeBenefitId("est").then((res: GetV1EmployeeBenefitsEmployeeBenefitIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetV1EmployeesEmployeeIdEmployeeBenefitsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeeBenefitDeductionReducesTaxableIncome } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeeBenefits.getV1EmployeesEmployeeIdEmployeeBenefits("repellendus", 7851.53, 9843.3).then((res: GetV1EmployeesEmployeeIdEmployeeBenefitsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeeBenefits.postEmployeeYtdBenefitAmountsFromDifferentCompany("ut", {
  benefitType: 7034.95,
  taxYear: 5864.1,
  ytdCompanyContributionAmount: "qui",
  ytdEmployeeDeductionAmount: "quae",
}).then((res: PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `employeeId`                                                                                                                                                       | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The UUID of the employee                                                                                                                                           |
| `requestBody`                                                                                                                                                      | [operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequestBody](../../models/operations/postemployeeytdbenefitamountsfromdifferentcompanyrequestbody.md) | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse](../../models/operations/postemployeeytdbenefitamountsfromdifferentcompanyresponse.md)>**


## postV1EmployeesEmployeeIdEmployeeBenefits

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

scope: `employee_benefits:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContributionType,
  PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyDeductionReducesTaxableIncome,
  PostV1EmployeesEmployeeIdEmployeeBenefitsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeeBenefitDeductionReducesTaxableIncome } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeeBenefits.postV1EmployeesEmployeeIdEmployeeBenefits("laudantium", {
  active: false,
  catchUp: false,
  companyBenefitUuid: "odio",
  companyContribution: "occaecati",
  companyContributionAnnualMaximum: "voluptatibus",
  contributeAsPercentage: false,
  contribution: {
    type: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContributionType.Amount,
    value: [
      {
        rate: "quis",
        threshold: "ipsum",
      },
      {
        rate: "delectus",
        threshold: "voluptate",
      },
      {
        rate: "consectetur",
        threshold: "vero",
      },
    ],
  },
  coverageAmount: "tenetur",
  coverageSalaryMultiplier: "dignissimos",
  deductAsPercentage: false,
  deductionReducesTaxableIncome: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyDeductionReducesTaxableIncome.LessThanNilGreaterThan,
  elective: false,
  employeeDeduction: "distinctio",
  employeeDeductionAnnualMaximum: "quod",
  limitOption: "odio",
}).then((res: PostV1EmployeesEmployeeIdEmployeeBenefitsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
  PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContributionType,
  PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyDeductionReducesTaxableIncome,
  PutV1EmployeeBenefitsEmployeeBenefitIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeeBenefitDeductionReducesTaxableIncome } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeeBenefits.putV1EmployeeBenefitsEmployeeBenefitId("similique", {
  active: false,
  catchUp: false,
  companyContribution: "facilis",
  companyContributionAnnualMaximum: "vero",
  contributeAsPercentage: false,
  contribution: {
    type: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContributionType.Percentage,
    value: "quibusdam",
  },
  coverageAmount: "illum",
  coverageSalaryMultiplier: "sequi",
  deductAsPercentage: false,
  deductionReducesTaxableIncome: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyDeductionReducesTaxableIncome.DoesNotReduceTaxableIncome,
  elective: false,
  employeeDeduction: "impedit",
  employeeDeductionAnnualMaximum: "aut",
  limitOption: "voluptatibus",
  version: "exercitationem",
}).then((res: PutV1EmployeeBenefitsEmployeeBenefitIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeBenefitId`                                                                                                                          | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The UUID of the employee benefit.                                                                                                            |
| `requestBody`                                                                                                                                | [operations.PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody](../../models/operations/putv1employeebenefitsemployeebenefitidrequestbody.md) | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.PutV1EmployeeBenefitsEmployeeBenefitIdResponse](../../models/operations/putv1employeebenefitsemployeebenefitidresponse.md)>**

