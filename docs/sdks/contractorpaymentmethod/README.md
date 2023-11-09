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
import { GetV1ContractorsContractorUuidBankAccountsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const contractorUuid: string = "string";

  const res = await sdk.contractorPaymentMethod.getV1ContractorsContractorUuidBankAccounts(contractorUuid);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorsContractorUuidBankAccountsResponse](../../sdk/models/operations/getv1contractorscontractoruuidbankaccountsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getV1ContractorsContractorUuidPaymentMethod

Fetches a contractor's payment method. A contractor payment method describes how the payment should be split across the contractor's associated bank accounts.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorsContractorUuidPaymentMethodRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const contractorUuid: string = "string";

  const res = await sdk.contractorPaymentMethod.getV1ContractorsContractorUuidPaymentMethod(contractorUuid);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorsContractorUuidPaymentMethodResponse](../../sdk/models/operations/getv1contractorscontractoruuidpaymentmethodresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postV1ContractorsContractorUuidBankAccounts

Creates a contractor bank account.

Note: We currently only support one bank account per contractor. Using this endpoint on a contractor who has already
has a bank account will just replace it.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1ContractorsContractorUuidBankAccountsAccountType,
  PostV1ContractorsContractorUuidBankAccountsRequest,
  PostV1ContractorsContractorUuidBankAccountsRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const contractorUuid: string = "string";
const requestBody: PostV1ContractorsContractorUuidBankAccountsRequestBody = {
  accountNumber: "string",
  accountType: PostV1ContractorsContractorUuidBankAccountsAccountType.Checking,
  name: "string",
  routingNumber: "string",
};

  const res = await sdk.contractorPaymentMethod.postV1ContractorsContractorUuidBankAccounts(contractorUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                     | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contractorUuid`                                                                                                                                              | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The UUID of the contractor                                                                                                                                    |
| `requestBody`                                                                                                                                                 | [operations.PostV1ContractorsContractorUuidBankAccountsRequestBody](../../../sdk/models/operations/postv1contractorscontractoruuidbankaccountsrequestbody.md) | :heavy_minus_sign:                                                                                                                                            | N/A                                                                                                                                                           |
| `config`                                                                                                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                  | :heavy_minus_sign:                                                                                                                                            | Available config options for making requests.                                                                                                                 |


### Response

**Promise<[operations.PostV1ContractorsContractorUuidBankAccountsResponse](../../sdk/models/operations/postv1contractorscontractoruuidbankaccountsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putV1ContractorsContractorIdPaymentMethod

Updates a contractor's payment method. Note that creating a contractor bank account will also update the contractor's payment method.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1ContractorsContractorIdPaymentMethodRequest,
  PutV1ContractorsContractorIdPaymentMethodRequestBody,
  TypeT,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const contractorUuid: string = "string";
const requestBody: PutV1ContractorsContractorIdPaymentMethodRequestBody = {
  type: TypeT.Check,
  version: "string",
};

  const res = await sdk.contractorPaymentMethod.putV1ContractorsContractorIdPaymentMethod(contractorUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                 | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contractorUuid`                                                                                                                                          | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The UUID of the contractor                                                                                                                                |
| `requestBody`                                                                                                                                             | [operations.PutV1ContractorsContractorIdPaymentMethodRequestBody](../../../sdk/models/operations/putv1contractorscontractoridpaymentmethodrequestbody.md) | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `config`                                                                                                                                                  | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                              | :heavy_minus_sign:                                                                                                                                        | Available config options for making requests.                                                                                                             |


### Response

**Promise<[operations.PutV1ContractorsContractorIdPaymentMethodResponse](../../sdk/models/operations/putv1contractorscontractoridpaymentmethodresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
