# contractorPaymentMethod

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
import { GetV1ContractorsContractorUuidBankAccountsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorBankAccountAccountType } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractorPaymentMethod.getV1ContractorsContractorUuidBankAccounts({
  contractorUuid: "tempora",
}).then((res: GetV1ContractorsContractorUuidBankAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.GetV1ContractorsContractorUuidBankAccountsRequest](../../models/operations/getv1contractorscontractoruuidbankaccountsrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.GetV1ContractorsContractorUuidBankAccountsResponse](../../models/operations/getv1contractorscontractoruuidbankaccountsresponse.md)>**


## getV1ContractorsContractorUuidPaymentMethod

Fetches a contractor's payment method. A contractor payment method describes how the payment should be split across the contractor's associated bank accounts.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorsContractorUuidPaymentMethodResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorPaymentMethodSplitBy, ContractorPaymentMethodType } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractorPaymentMethod.getV1ContractorsContractorUuidPaymentMethod({
  contractorUuid: "facilis",
}).then((res: GetV1ContractorsContractorUuidPaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.GetV1ContractorsContractorUuidPaymentMethodRequest](../../models/operations/getv1contractorscontractoruuidpaymentmethodrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


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
  PostV1ContractorsContractorUuidBankAccountsRequestBodyAccountType,
  PostV1ContractorsContractorUuidBankAccountsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorBankAccountAccountType } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractorPaymentMethod.postV1ContractorsContractorUuidBankAccounts({
  requestBody: {
    accountNumber: "tempore",
    accountType: PostV1ContractorsContractorUuidBankAccountsRequestBodyAccountType.Checking,
    name: "Andre Franey",
    routingNumber: "aliquid",
  },
  contractorUuid: "provident",
}).then((res: PostV1ContractorsContractorUuidBankAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PostV1ContractorsContractorUuidBankAccountsRequest](../../models/operations/postv1contractorscontractoruuidbankaccountsrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PostV1ContractorsContractorUuidBankAccountsResponse](../../models/operations/postv1contractorscontractoruuidbankaccountsresponse.md)>**


## putV1ContractorsContractorIdPaymentMethod

Updates a contractor's payment method. Note that creating a contractor bank account will also update the contractor's payment method.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1ContractorsContractorIdPaymentMethodRequestBodyType,
  PutV1ContractorsContractorIdPaymentMethodResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorPaymentMethodSplitBy, ContractorPaymentMethodType } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractorPaymentMethod.putV1ContractorsContractorIdPaymentMethod({
  requestBody: {
    type: PutV1ContractorsContractorIdPaymentMethodRequestBodyType.Check,
    version: "sint",
  },
  contractorUuid: "officia",
}).then((res: PutV1ContractorsContractorIdPaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PutV1ContractorsContractorIdPaymentMethodRequest](../../models/operations/putv1contractorscontractoridpaymentmethodrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PutV1ContractorsContractorIdPaymentMethodResponse](../../models/operations/putv1contractorscontractoridpaymentmethodresponse.md)>**

