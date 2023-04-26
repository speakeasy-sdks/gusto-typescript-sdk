# employeePaymentMethod

### Available Operations

* [deleteV1EmployeesEmployeeIdBankAccountsBankAccountId](#deletev1employeesemployeeidbankaccountsbankaccountid) - Delete an employee bank account
* [getV1EmployeesEmployeeIdPaymentMethod](#getv1employeesemployeeidpaymentmethod) - Get an employee's payment method
* [postV1EmployeesEmployeeIdBankAccounts](#postv1employeesemployeeidbankaccounts) - Create an employee bank account
* [putV1EmployeesEmployeeIdPaymentMethod](#putv1employeesemployeeidpaymentmethod) - Update an employee's payment method

## deleteV1EmployeesEmployeeIdBankAccountsBankAccountId

Deletes an employee bank account. To update an employee's bank account details, delete the bank account first and create a new one.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest,
  DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest = {
  bankAccountUuid: "ea",
  employeeId: "aspernatur",
};

sdk.employeePaymentMethod.deleteV1EmployeesEmployeeIdBankAccountsBankAccountId(req).then((res: DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1EmployeesEmployeeIdPaymentMethod

Fetches an employee's payment method. An employee payment method describes how the payment should be split across the employee's associated bank accounts.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1EmployeesEmployeeIdPaymentMethodRequest,
  GetV1EmployeesEmployeeIdPaymentMethodResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeePaymentMethodSplitByEnum, EmployeePaymentMethodTypeEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1EmployeesEmployeeIdPaymentMethodRequest = {
  employeeId: "vel",
};

sdk.employeePaymentMethod.getV1EmployeesEmployeeIdPaymentMethod(req).then((res: GetV1EmployeesEmployeeIdPaymentMethodResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postV1EmployeesEmployeeIdBankAccounts

Creates an employee bank account. An employee can have multiple bank accounts. Note that creating an employee bank account will also update the employee's payment method.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1EmployeesEmployeeIdBankAccountsRequest,
  PostV1EmployeesEmployeeIdBankAccountsRequestBodyAccountTypeEnum,
  PostV1EmployeesEmployeeIdBankAccountsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeeBankAccountAccountTypeEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1EmployeesEmployeeIdBankAccountsRequest = {
  requestBody: {
    accountNumber: "possimus",
    accountType: PostV1EmployeesEmployeeIdBankAccountsRequestBodyAccountTypeEnum.Checking,
    name: "Mrs. Vicki Langosh",
    routingNumber: "quasi",
  },
  employeeId: "ex",
};

sdk.employeePaymentMethod.postV1EmployeesEmployeeIdBankAccounts(req).then((res: PostV1EmployeesEmployeeIdBankAccountsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1EmployeesEmployeeIdPaymentMethod

Updates an employee's payment method. Note that creating an employee bank account will also update the employee's payment method.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1EmployeesEmployeeIdPaymentMethodRequest,
  PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplitByEnum,
  PutV1EmployeesEmployeeIdPaymentMethodRequestBodyTypeEnum,
  PutV1EmployeesEmployeeIdPaymentMethodResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeePaymentMethodSplitByEnum, EmployeePaymentMethodTypeEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1EmployeesEmployeeIdPaymentMethodRequest = {
  requestBody: {
    splitBy: PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplitByEnum.Percentage,
    splits: [
      {
        name: "Gordon Willms",
        priority: 411372,
        splitAmount: 774048,
        uuid: "556146c3-e250-4fb0-88c4-2e141aac366c",
      },
      {
        name: "Mack Stoltenberg",
        priority: 96549,
        splitAmount: 270328,
        uuid: "42907474-778a-47bd-866d-28c10ab3cdca",
      },
      {
        name: "Ms. Ruby Hintz II",
        priority: 892050,
        splitAmount: 370853,
        uuid: "23c7e0bc-7178-4e47-96f2-a70c688282aa",
      },
    ],
    type: PutV1EmployeesEmployeeIdPaymentMethodRequestBodyTypeEnum.DirectDeposit,
    version: "atque",
  },
  employeeId: "explicabo",
};

sdk.employeePaymentMethod.putV1EmployeesEmployeeIdPaymentMethod(req).then((res: PutV1EmployeesEmployeeIdPaymentMethodResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
