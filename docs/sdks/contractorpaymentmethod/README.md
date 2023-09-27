# ContractorPaymentMethod
(*contractorPaymentMethod*)

### Available Operations

* [getV1ContractorsContractorUuidBankAccounts](#getv1contractorscontractoruuidbankaccounts) - Get all contractor bank accounts
* [getV1ContractorsContractorUuidPaymentMethod](#getv1contractorscontractoruuidpaymentmethod) - Get a contractor's payment method
* [postV1ContractorsContractorUuidBankAccounts](#postv1contractorscontractoruuidbankaccounts) - Create an contractor bank account
* [putV1ContractorsContractorIdPaymentMethod](#putv1contractorscontractoridpaymentmethod) - Update a contractor's payment method

## getV1ContractorsContractorUuidBankAccounts

Returns all contractor bank accounts.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1ContractorsContractorUuidBankAccountsRequest,
  GetV1ContractorsContractorUuidBankAccountsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorUuid: string = "commodi";

sdk.contractorPaymentMethod.getV1ContractorsContractorUuidBankAccounts(contractorUuid).then((res: GetV1ContractorsContractorUuidBankAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorsContractorUuidBankAccountsResponse](../../models/operations/getv1contractorscontractoruuidbankaccountsresponse.md)>**


## getV1ContractorsContractorUuidPaymentMethod

Fetches a contractor's payment method. A contractor payment method describes how the payment should be split across the contractor's associated bank accounts.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1ContractorsContractorUuidPaymentMethodRequest,
  GetV1ContractorsContractorUuidPaymentMethodResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorUuid: string = "repudiandae";

sdk.contractorPaymentMethod.getV1ContractorsContractorUuidPaymentMethod(contractorUuid).then((res: GetV1ContractorsContractorUuidPaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorsContractorUuidPaymentMethodResponse](../../models/operations/getv1contractorscontractoruuidpaymentmethodresponse.md)>**


## postV1ContractorsContractorUuidBankAccounts

Creates a contractor bank account.

Note: We currently only support one bank account per contractor. Using this endpoint on a contractor who has already
has a bank account will just replace it.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1ContractorsContractorUuidBankAccountsRequest,
  PostV1ContractorsContractorUuidBankAccountsRequestBody,
  PostV1ContractorsContractorUuidBankAccountsRequestBodyAccountType,
  PostV1ContractorsContractorUuidBankAccountsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorUuid: string = "quae";
const requestBody: PostV1ContractorsContractorUuidBankAccountsRequestBody = {
  accountNumber: "ipsum",
  accountType: PostV1ContractorsContractorUuidBankAccountsRequestBodyAccountType.Savings,
  name: "Andy Streich",
  routingNumber: "rem",
};

sdk.contractorPaymentMethod.postV1ContractorsContractorUuidBankAccounts(contractorUuid, requestBody).then((res: PostV1ContractorsContractorUuidBankAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `contractorUuid`                                                                                                                                       | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The UUID of the contractor                                                                                                                             |
| `requestBody`                                                                                                                                          | [operations.PostV1ContractorsContractorUuidBankAccountsRequestBody](../../models/operations/postv1contractorscontractoruuidbankaccountsrequestbody.md) | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.PostV1ContractorsContractorUuidBankAccountsResponse](../../models/operations/postv1contractorscontractoruuidbankaccountsresponse.md)>**


## putV1ContractorsContractorIdPaymentMethod

Updates a contractor's payment method. Note that creating a contractor bank account will also update the contractor's payment method.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1ContractorsContractorIdPaymentMethodRequest,
  PutV1ContractorsContractorIdPaymentMethodRequestBody,
  PutV1ContractorsContractorIdPaymentMethodRequestBodyType,
  PutV1ContractorsContractorIdPaymentMethodResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorUuid: string = "voluptates";
const requestBody: PutV1ContractorsContractorIdPaymentMethodRequestBody = {
  type: PutV1ContractorsContractorIdPaymentMethodRequestBodyType.DirectDeposit,
  version: "repudiandae",
};

sdk.contractorPaymentMethod.putV1ContractorsContractorIdPaymentMethod(contractorUuid, requestBody).then((res: PutV1ContractorsContractorIdPaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contractorUuid`                                                                                                                                   | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The UUID of the contractor                                                                                                                         |
| `requestBody`                                                                                                                                      | [operations.PutV1ContractorsContractorIdPaymentMethodRequestBody](../../models/operations/putv1contractorscontractoridpaymentmethodrequestbody.md) | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PutV1ContractorsContractorIdPaymentMethodResponse](../../models/operations/putv1contractorscontractoridpaymentmethodresponse.md)>**

