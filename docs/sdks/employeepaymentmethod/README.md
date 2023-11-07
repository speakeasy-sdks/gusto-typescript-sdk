# EmployeePaymentMethod
(*.employeePaymentMethod*)

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
import { DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const bankAccountUuid: string = "string";
const employeeId: string = "string";

  const res = await sdk.employeePaymentMethod.deleteV1EmployeesEmployeeIdBankAccountsBankAccountId(bankAccountUuid, employeeId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `bankAccountUuid`                                            | *string*                                                     | :heavy_check_mark:                                           | The UUID of the bank account                                 |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse](../../models/operations/deletev1employeesemployeeidbankaccountsbankaccountidresponse.md)>**


## getV1EmployeesEmployeeIdPaymentMethod

Fetches an employee's payment method. An employee payment method describes how the payment should be split across the employee's associated bank accounts.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1EmployeesEmployeeIdPaymentMethodRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";

  const res = await sdk.employeePaymentMethod.getV1EmployeesEmployeeIdPaymentMethod(employeeId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1EmployeesEmployeeIdPaymentMethodResponse](../../models/operations/getv1employeesemployeeidpaymentmethodresponse.md)>**


## postV1EmployeesEmployeeIdBankAccounts

Creates an employee bank account. An employee can have multiple bank accounts. Note that creating an employee bank account will also update the employee's payment method.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1EmployeesEmployeeIdBankAccountsAccountType,
  PostV1EmployeesEmployeeIdBankAccountsRequest,
  PostV1EmployeesEmployeeIdBankAccountsRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";
const requestBody: PostV1EmployeesEmployeeIdBankAccountsRequestBody = {
  accountNumber: "string",
  accountType: PostV1EmployeesEmployeeIdBankAccountsAccountType.Savings,
  name: "string",
  routingNumber: "string",
};

  const res = await sdk.employeePaymentMethod.postV1EmployeesEmployeeIdBankAccounts(employeeId, requestBody);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `employeeId`                                                                                                                               | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The UUID of the employee                                                                                                                   |
| `requestBody`                                                                                                                              | [operations.PostV1EmployeesEmployeeIdBankAccountsRequestBody](../../models/operations/postv1employeesemployeeidbankaccountsrequestbody.md) | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PostV1EmployeesEmployeeIdBankAccountsResponse](../../models/operations/postv1employeesemployeeidbankaccountsresponse.md)>**


## putV1EmployeesEmployeeIdPaymentMethod

Updates an employee's payment method. Note that creating an employee bank account will also update the employee's payment method.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1EmployeesEmployeeIdPaymentMethodRequest,
  PutV1EmployeesEmployeeIdPaymentMethodRequestBody,
  PutV1EmployeesEmployeeIdPaymentMethodType,
  SplitBy,
  Splits,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const employeeId: string = "string";
const requestBody: PutV1EmployeesEmployeeIdPaymentMethodRequestBody = {
  splits: [
    {},
  ],
  type: PutV1EmployeesEmployeeIdPaymentMethodType.Check,
  version: "string",
};

  const res = await sdk.employeePaymentMethod.putV1EmployeesEmployeeIdPaymentMethod(employeeId, requestBody);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `employeeId`                                                                                                                               | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The UUID of the employee                                                                                                                   |
| `requestBody`                                                                                                                              | [operations.PutV1EmployeesEmployeeIdPaymentMethodRequestBody](../../models/operations/putv1employeesemployeeidpaymentmethodrequestbody.md) | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PutV1EmployeesEmployeeIdPaymentMethodResponse](../../models/operations/putv1employeesemployeeidpaymentmethodresponse.md)>**

