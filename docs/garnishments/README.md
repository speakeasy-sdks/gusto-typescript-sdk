# garnishments

### Available Operations

* [getV1EmployeesEmployeeIdGarnishments](#getv1employeesemployeeidgarnishments) - Get garnishments for an employee
* [getV1GarnishmentsGarnishmentId](#getv1garnishmentsgarnishmentid) - Get a garnishment
* [postV1EmployeesEmployeeIdGarnishments](#postv1employeesemployeeidgarnishments) - Create a garnishment
* [putV1GarnishmentsGarnishmentId](#putv1garnishmentsgarnishmentid) - Update a garnishment

## getV1EmployeesEmployeeIdGarnishments

Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdGarnishmentsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.garnishments.getV1EmployeesEmployeeIdGarnishments({
  employeeId: "consectetur",
  page: 4490.83,
  per: 3485.19,
}).then((res: GetV1EmployeesEmployeeIdGarnishmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1GarnishmentsGarnishmentId

Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1GarnishmentsGarnishmentIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.garnishments.getV1GarnishmentsGarnishmentId({
  garnishmentId: "earum",
}).then((res: GetV1GarnishmentsGarnishmentIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postV1EmployeesEmployeeIdGarnishments

Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1EmployeesEmployeeIdGarnishmentsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.garnishments.postV1EmployeesEmployeeIdGarnishments({
  requestBody: {
    active: false,
    amount: "facere",
    annualMaximum: "numquam",
    courtOrdered: false,
    deductAsPercentage: false,
    description: "doloribus",
    payPeriodMaximum: "suscipit",
    recurring: false,
    times: 968972,
  },
  employeeId: "quidem",
}).then((res: PostV1EmployeesEmployeeIdGarnishmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putV1GarnishmentsGarnishmentId

Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1GarnishmentsGarnishmentIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.garnishments.putV1GarnishmentsGarnishmentId({
  requestBody: {
    active: false,
    amount: "saepe",
    annualMaximum: "necessitatibus",
    courtOrdered: false,
    deductAsPercentage: false,
    description: "dolore",
    payPeriodMaximum: "sunt",
    recurring: false,
    times: 992012,
    version: "adipisci",
  },
  garnishmentId: "non",
}).then((res: PutV1GarnishmentsGarnishmentIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
