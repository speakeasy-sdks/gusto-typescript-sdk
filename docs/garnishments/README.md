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
import {
  GetV1EmployeesEmployeeIdGarnishmentsRequest,
  GetV1EmployeesEmployeeIdGarnishmentsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1EmployeesEmployeeIdGarnishmentsRequest = {
  employeeId: "consectetur",
  page: 4490.83,
  per: 3485.19,
};

sdk.garnishments.getV1EmployeesEmployeeIdGarnishments(req).then((res: GetV1EmployeesEmployeeIdGarnishmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { GetV1GarnishmentsGarnishmentIdRequest, GetV1GarnishmentsGarnishmentIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1GarnishmentsGarnishmentIdRequest = {
  garnishmentId: "earum",
};

sdk.garnishments.getV1GarnishmentsGarnishmentId(req).then((res: GetV1GarnishmentsGarnishmentIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import {
  PostV1EmployeesEmployeeIdGarnishmentsRequest,
  PostV1EmployeesEmployeeIdGarnishmentsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1EmployeesEmployeeIdGarnishmentsRequest = {
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
};

sdk.garnishments.postV1EmployeesEmployeeIdGarnishments(req).then((res: PostV1EmployeesEmployeeIdGarnishmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { PutV1GarnishmentsGarnishmentIdRequest, PutV1GarnishmentsGarnishmentIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1GarnishmentsGarnishmentIdRequest = {
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
};

sdk.garnishments.putV1GarnishmentsGarnishmentId(req).then((res: PutV1GarnishmentsGarnishmentIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
