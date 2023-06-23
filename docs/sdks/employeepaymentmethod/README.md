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
import { DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeePaymentMethod.deleteV1EmployeesEmployeeIdBankAccountsBankAccountId({
  bankAccountUuid: "ea",
  employeeId: "aspernatur",
}).then((res: DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                        | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                        | [operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest](../../models/operations/deletev1employeesemployeeidbankaccountsbankaccountidrequest.md) | :heavy_check_mark:                                                                                                                                               | The request object to use for the request.                                                                                                                       |
| `config`                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                     | :heavy_minus_sign:                                                                                                                                               | Available config options for making requests.                                                                                                                    |


### Response

**Promise<[operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse](../../models/operations/deletev1employeesemployeeidbankaccountsbankaccountidresponse.md)>**


## getV1EmployeesEmployeeIdPaymentMethod

Fetches an employee's payment method. An employee payment method describes how the payment should be split across the employee's associated bank accounts.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdPaymentMethodResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeePaymentMethodSplitBy, EmployeePaymentMethodType } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeePaymentMethod.getV1EmployeesEmployeeIdPaymentMethod({
  employeeId: "vel",
}).then((res: GetV1EmployeesEmployeeIdPaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.GetV1EmployeesEmployeeIdPaymentMethodRequest](../../models/operations/getv1employeesemployeeidpaymentmethodrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdPaymentMethodResponse](../../models/operations/getv1employeesemployeeidpaymentmethodresponse.md)>**


## postV1EmployeesEmployeeIdBankAccounts

Creates an employee bank account. An employee can have multiple bank accounts. Note that creating an employee bank account will also update the employee's payment method.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1EmployeesEmployeeIdBankAccountsRequestBodyAccountType,
  PostV1EmployeesEmployeeIdBankAccountsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeeBankAccountAccountType } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeePaymentMethod.postV1EmployeesEmployeeIdBankAccounts({
  requestBody: {
    accountNumber: "possimus",
    accountType: PostV1EmployeesEmployeeIdBankAccountsRequestBodyAccountType.Checking,
    name: "Mrs. Vicki Langosh",
    routingNumber: "quasi",
  },
  employeeId: "ex",
}).then((res: PostV1EmployeesEmployeeIdBankAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PostV1EmployeesEmployeeIdBankAccountsRequest](../../models/operations/postv1employeesemployeeidbankaccountsrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PostV1EmployeesEmployeeIdBankAccountsResponse](../../models/operations/postv1employeesemployeeidbankaccountsresponse.md)>**


## putV1EmployeesEmployeeIdPaymentMethod

Updates an employee's payment method. Note that creating an employee bank account will also update the employee's payment method.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplitBy,
  PutV1EmployeesEmployeeIdPaymentMethodRequestBodyType,
  PutV1EmployeesEmployeeIdPaymentMethodResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { EmployeePaymentMethodSplitBy, EmployeePaymentMethodType } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.employeePaymentMethod.putV1EmployeesEmployeeIdPaymentMethod({
  requestBody: {
    splitBy: PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplitBy.Percentage,
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
    type: PutV1EmployeesEmployeeIdPaymentMethodRequestBodyType.DirectDeposit,
    version: "atque",
  },
  employeeId: "explicabo",
}).then((res: PutV1EmployeesEmployeeIdPaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PutV1EmployeesEmployeeIdPaymentMethodRequest](../../models/operations/putv1employeesemployeeidpaymentmethodrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PutV1EmployeesEmployeeIdPaymentMethodResponse](../../models/operations/putv1employeesemployeeidpaymentmethodresponse.md)>**

