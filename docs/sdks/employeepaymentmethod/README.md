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

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const bankAccountUuid: string = "minima";
const employeeId: string = "repellendus";

sdk.employeePaymentMethod.deleteV1EmployeesEmployeeIdBankAccountsBankAccountId(bankAccountUuid, employeeId).then((res: DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import {
  GetV1EmployeesEmployeeIdPaymentMethodRequest,
  GetV1EmployeesEmployeeIdPaymentMethodResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "totam";

sdk.employeePaymentMethod.getV1EmployeesEmployeeIdPaymentMethod(employeeId).then((res: GetV1EmployeesEmployeeIdPaymentMethodResponse) => {
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

**Promise<[operations.GetV1EmployeesEmployeeIdPaymentMethodResponse](../../models/operations/getv1employeesemployeeidpaymentmethodresponse.md)>**


## postV1EmployeesEmployeeIdBankAccounts

Creates an employee bank account. An employee can have multiple bank accounts. Note that creating an employee bank account will also update the employee's payment method.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1EmployeesEmployeeIdBankAccountsRequest,
  PostV1EmployeesEmployeeIdBankAccountsRequestBody,
  PostV1EmployeesEmployeeIdBankAccountsRequestBodyAccountType,
  PostV1EmployeesEmployeeIdBankAccountsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "similique";
const requestBody: PostV1EmployeesEmployeeIdBankAccountsRequestBody = {
  accountNumber: "alias",
  accountType: PostV1EmployeesEmployeeIdBankAccountsRequestBodyAccountType.Savings,
  name: "Rhonda Kautzer",
  routingNumber: "qui",
};

sdk.employeePaymentMethod.postV1EmployeesEmployeeIdBankAccounts(employeeId, requestBody).then((res: PostV1EmployeesEmployeeIdBankAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
  PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplitBy,
  PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplits,
  PutV1EmployeesEmployeeIdPaymentMethodRequestBodyType,
  PutV1EmployeesEmployeeIdPaymentMethodResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const employeeId: string = "dolorum";
const requestBody: PutV1EmployeesEmployeeIdPaymentMethodRequestBody = {
  splitBy: PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplitBy.Percentage,
  splits: [
    {
      name: "Fannie Kub",
      priority: 947371,
      splitAmount: 229442,
      uuid: "be453f87-0b32-46b5-a734-29cdb1a8422b",
    },
  ],
  type: PutV1EmployeesEmployeeIdPaymentMethodRequestBodyType.Check,
  version: "aliquid",
};

sdk.employeePaymentMethod.putV1EmployeesEmployeeIdPaymentMethod(employeeId, requestBody).then((res: PutV1EmployeesEmployeeIdPaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `employeeId`                                                                                                                               | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The UUID of the employee                                                                                                                   |
| `requestBody`                                                                                                                              | [operations.PutV1EmployeesEmployeeIdPaymentMethodRequestBody](../../models/operations/putv1employeesemployeeidpaymentmethodrequestbody.md) | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PutV1EmployeesEmployeeIdPaymentMethodResponse](../../models/operations/putv1employeesemployeeidpaymentmethodresponse.md)>**

