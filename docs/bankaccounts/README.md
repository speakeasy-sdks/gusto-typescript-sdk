# bankAccounts

### Available Operations

* [getV1CompaniesCompanyIdBankAccounts](#getv1companiescompanyidbankaccounts) - Get all company bank accounts
* [postV1CompaniesCompanyIdBankAccounts](#postv1companiescompanyidbankaccounts) - Create a company bank account
* [postV1PlaidProcessorToken](#postv1plaidprocessortoken) - Create a bank account from a plaid processor token
* [putV1CompaniesCompanyIdBankAccountsVerify](#putv1companiescompanyidbankaccountsverify) - Verify a company bank account

## getV1CompaniesCompanyIdBankAccounts

Returns company bank accounts. Currently we only support a single default bank account per company.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdBankAccountsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  CompanyBankAccountAccountTypeEnum,
  CompanyBankAccountPlaidStatusEnum,
  CompanyBankAccountVerificationStatusEnum,
  CompanyBankAccountVerificationTypeEnum,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.bankAccounts.getV1CompaniesCompanyIdBankAccounts({
  companyId: "provident",
}).then((res: GetV1CompaniesCompanyIdBankAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postV1CompaniesCompanyIdBankAccounts

This endpoint creates a new company bank account.

Upon being created, two verification deposits are automatically sent to the bank account, and the bank account's verification_status is 'awaiting_deposits'. 

When the deposits are successfully transferred, the verification_status changes to 'ready_for_verification', at which point the verify endpoint can be used to verify the bank account.
After successful verification, the bank account's verification_status is 'verified'.

> 🚧 Warning
>
> If a default bank account exists, it will be disabled and the new bank account will replace it as the company's default funding method.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdBankAccountsRequestBodyAccountTypeEnum,
  PostV1CompaniesCompanyIdBankAccountsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  CompanyBankAccountAccountTypeEnum,
  CompanyBankAccountPlaidStatusEnum,
  CompanyBankAccountVerificationStatusEnum,
  CompanyBankAccountVerificationTypeEnum,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.bankAccounts.postV1CompaniesCompanyIdBankAccounts({
  requestBody: {
    accountNumber: "distinctio",
    accountType: PostV1CompaniesCompanyIdBankAccountsRequestBodyAccountTypeEnum.Savings,
    routingNumber: "unde",
  },
  companyId: "nulla",
}).then((res: PostV1CompaniesCompanyIdBankAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postV1PlaidProcessorToken

This endpoint creates a new **verified** bank account by using a plaid processor token to retrieve its information.

`scope: plaid_processor:write`

> 📘
> To create a token please use the [plaid api](https://plaid.com/docs/api/processors/#processortokencreate) and select "gusto" as processor.

> 🚧 Warning - Company Bank Accounts
>
> If a default company bank account exists, it will be disabled and the new bank account will replace it as the company's default funding method.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1PlaidProcessorTokenRequestBodyOwnerTypeEnum,
  PostV1PlaidProcessorTokenResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.bankAccounts.postV1PlaidProcessorToken({
  ownerId: "corrupti",
  ownerType: PostV1PlaidProcessorTokenRequestBodyOwnerTypeEnum.Company,
  processorToken: "illum",
}).then((res: PostV1PlaidProcessorTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putV1CompaniesCompanyIdBankAccountsVerify

Verify a company bank account by confirming the two micro-deposits sent to the bank account. Note that the order of the two deposits specified in request parameters does not matter. There's a maximum of 5 verification attempts, after which we will automatically initiate a new set of micro-deposits and require the bank account to be verified with the new micro-deposits.

### Bank account verification in demo

We provide the endpoint `POST '/v1/companies/{company_id}/bank_accounts/{bank_account_uuid}/send_test_deposits'` to facilitate bank account verification in the demo environment. This endpoint simulates the micro-deposits transfer and returns them in the response. You can call this endpoint as many times as you wish to retrieve the values of the two micro deposits.

```
  POST '/v1/companies/89771af8-b964-472e-8064-554dfbcb56d9/bank_accounts/ade55e57-4800-4059-9ecd-fa29cfeb6dd2/send_test_deposits'

  {
    "deposit_1": 0.02,
    "deposit_2": 0.42
  }
```

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompaniesCompanyIdBankAccountsVerifyResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  CompanyBankAccountAccountTypeEnum,
  CompanyBankAccountPlaidStatusEnum,
  CompanyBankAccountVerificationStatusEnum,
  CompanyBankAccountVerificationTypeEnum,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.bankAccounts.putV1CompaniesCompanyIdBankAccountsVerify({
  requestBody: {
    deposit1: 4236.55,
    deposit2: 6235.64,
  },
  bankAccountUuid: "deserunt",
  companyId: "suscipit",
}).then((res: PutV1CompaniesCompanyIdBankAccountsVerifyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
