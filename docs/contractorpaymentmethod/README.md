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
import {
  GetV1ContractorsContractorUuidBankAccountsRequest,
  GetV1ContractorsContractorUuidBankAccountsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorBankAccountAccountTypeEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1ContractorsContractorUuidBankAccountsRequest = {
  contractorUuid: "tempora",
};

sdk.contractorPaymentMethod.getV1ContractorsContractorUuidBankAccounts(req).then((res: GetV1ContractorsContractorUuidBankAccountsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1ContractorsContractorUuidPaymentMethod

Fetches a contractor's payment method. A contractor payment method describes how the payment should be split across the contractor's associated bank accounts.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1ContractorsContractorUuidPaymentMethodRequest,
  GetV1ContractorsContractorUuidPaymentMethodResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorPaymentMethodSplitByEnum, ContractorPaymentMethodTypeEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1ContractorsContractorUuidPaymentMethodRequest = {
  contractorUuid: "facilis",
};

sdk.contractorPaymentMethod.getV1ContractorsContractorUuidPaymentMethod(req).then((res: GetV1ContractorsContractorUuidPaymentMethodResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postV1ContractorsContractorUuidBankAccounts

Creates a contractor bank account.

Note: We currently only support one bank account per contractor. Using this endpoint on a contractor who has already
has a bank account will just replace it.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1ContractorsContractorUuidBankAccountsRequest,
  PostV1ContractorsContractorUuidBankAccountsRequestBodyAccountTypeEnum,
  PostV1ContractorsContractorUuidBankAccountsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorBankAccountAccountTypeEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1ContractorsContractorUuidBankAccountsRequest = {
  requestBody: {
    accountNumber: "tempore",
    accountType: PostV1ContractorsContractorUuidBankAccountsRequestBodyAccountTypeEnum.Checking,
    name: "Andre Franey",
    routingNumber: "aliquid",
  },
  contractorUuid: "provident",
};

sdk.contractorPaymentMethod.postV1ContractorsContractorUuidBankAccounts(req).then((res: PostV1ContractorsContractorUuidBankAccountsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1ContractorsContractorIdPaymentMethod

Updates a contractor's payment method. Note that creating a contractor bank account will also update the contractor's payment method.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1ContractorsContractorIdPaymentMethodRequest,
  PutV1ContractorsContractorIdPaymentMethodRequestBodyTypeEnum,
  PutV1ContractorsContractorIdPaymentMethodResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorPaymentMethodSplitByEnum, ContractorPaymentMethodTypeEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1ContractorsContractorIdPaymentMethodRequest = {
  requestBody: {
    type: PutV1ContractorsContractorIdPaymentMethodRequestBodyTypeEnum.Check,
    version: "sint",
  },
  contractorUuid: "officia",
};

sdk.contractorPaymentMethod.putV1ContractorsContractorIdPaymentMethod(req).then((res: PutV1ContractorsContractorIdPaymentMethodResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
