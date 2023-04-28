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
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.employeeBenefits.deleteV1EmployeeBenefitsEmployeeBenefitId({
  employeeBenefitId: "est",
}).then((res: DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1EmployeeBenefitsEmployeeBenefitId

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

scope: `employee_benefits:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeeBenefitsEmployeeBenefitIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeeBenefitDeductionReducesTaxableIncomeEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.employeeBenefits.getV1EmployeeBenefitsEmployeeBenefitId({
  employeeBenefitId: "repellendus",
}).then((res: GetV1EmployeeBenefitsEmployeeBenefitIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1EmployeesEmployeeIdEmployeeBenefits

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

Returns an array of all employee benefits for this employee

scope: `employee_benefits:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdEmployeeBenefitsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeeBenefitDeductionReducesTaxableIncomeEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.employeeBenefits.getV1EmployeesEmployeeIdEmployeeBenefits({
  employeeId: "porro",
  page: 9843.3,
  per: 2817.3,
}).then((res: GetV1EmployeesEmployeeIdEmployeeBenefitsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postEmployeeYtdBenefitAmountsFromDifferentCompany

Year-to-date benefit amounts from a different company represents the amount of money added to an employees plan during a current year, made outside of the current contribution when they were employed at a different company.

scope: `employee_benefits:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.employeeBenefits.postEmployeeYtdBenefitAmountsFromDifferentCompany({
  requestBody: {
    benefitType: 7034.95,
    taxYear: 5864.1,
    ytdCompanyContributionAmount: "qui",
    ytdEmployeeDeductionAmount: "quae",
  },
  employeeId: "laudantium",
}).then((res: PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postV1EmployeesEmployeeIdEmployeeBenefits

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

scope: `employee_benefits:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContributionTypeEnum,
  PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyDeductionReducesTaxableIncomeEnum,
  PostV1EmployeesEmployeeIdEmployeeBenefitsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeeBenefitDeductionReducesTaxableIncomeEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.employeeBenefits.postV1EmployeesEmployeeIdEmployeeBenefits({
  requestBody: {
    active: false,
    catchUp: false,
    companyBenefitUuid: "odio",
    companyContribution: "occaecati",
    companyContributionAnnualMaximum: "voluptatibus",
    contributeAsPercentage: false,
    contribution: {
      type: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContributionTypeEnum.Amount,
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
    deductionReducesTaxableIncome: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyDeductionReducesTaxableIncomeEnum.Unknown,
    elective: false,
    employeeDeduction: "distinctio",
    employeeDeductionAnnualMaximum: "quod",
    limitOption: "odio",
  },
  employeeId: "similique",
}).then((res: PostV1EmployeesEmployeeIdEmployeeBenefitsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putV1EmployeeBenefitsEmployeeBenefitId

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

scope: `employee_benefits:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContributionTypeEnum,
  PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyDeductionReducesTaxableIncomeEnum,
  PutV1EmployeeBenefitsEmployeeBenefitIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeeBenefitDeductionReducesTaxableIncomeEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.employeeBenefits.putV1EmployeeBenefitsEmployeeBenefitId({
  requestBody: {
    active: false,
    catchUp: false,
    companyContribution: "facilis",
    companyContributionAnnualMaximum: "vero",
    contributeAsPercentage: false,
    contribution: {
      type: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContributionTypeEnum.Percentage,
      value: "quibusdam",
    },
    coverageAmount: "illum",
    coverageSalaryMultiplier: "sequi",
    deductAsPercentage: false,
    deductionReducesTaxableIncome: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyDeductionReducesTaxableIncomeEnum.DoesNotReduceTaxableIncome,
    elective: false,
    employeeDeduction: "impedit",
    employeeDeductionAnnualMaximum: "aut",
    limitOption: "voluptatibus",
    version: "exercitationem",
  },
  employeeBenefitId: "nulla",
}).then((res: PutV1EmployeeBenefitsEmployeeBenefitIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
