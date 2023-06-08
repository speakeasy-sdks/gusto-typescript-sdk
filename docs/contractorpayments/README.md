# contractorPayments

### Available Operations

* [deleteV1CompaniesCompanyIdContractorPaymentContractorPayment](#deletev1companiescompanyidcontractorpaymentcontractorpayment) - Cancel a contractor payment
* [getV1CompaniesCompanyIdContractorPaymentContractorPayment](#getv1companiescompanyidcontractorpaymentcontractorpayment) - Get a single contractor payment
* [getV1CompaniesCompanyIdContractorPayments](#getv1companiescompanyidcontractorpayments) - Get contractor payments for a company
* [getV1ContractorPaymentsContractorPaymentUuidReceipt](#getv1contractorpaymentscontractorpaymentuuidreceipt) - Get a single contractor payment receipt
* [postV1CompaniesCompanyIdContractorPayments](#postv1companiescompanyidcontractorpayments) - Create a contractor payment

## deleteV1CompaniesCompanyIdContractorPaymentContractorPayment

Cancels and deletes a contractor payment. If the contractor payment has already started processing, the payment cannot be cancelled.

scope: `payrolls:run`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractorPayments.deleteV1CompaniesCompanyIdContractorPaymentContractorPayment({
  companyId: "dolor",
  contractorPaymentId: "debitis",
}).then((res: DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1CompaniesCompanyIdContractorPaymentContractorPayment

Returns a single contractor payments

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  ContractorPaymentPaymentMethod,
  ContractorPaymentStatus,
  ContractorPaymentWageType,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractorPayments.getV1CompaniesCompanyIdContractorPaymentContractorPayment({
  companyId: "a",
  contractorPaymentId: "dolorum",
}).then((res: GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1CompaniesCompanyIdContractorPayments

Returns an object containing individual contractor payments, within a given time period, including totals.

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdContractorPaymentsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractorPayments.getV1CompaniesCompanyIdContractorPayments({
  companyId: "in",
  contractorUuid: "in",
  endDate: "2020-12-31",
  groupByDate: false,
  page: 8464.09,
  per: 9785.71,
  startDate: "2020-01-01",
}).then((res: GetV1CompaniesCompanyIdContractorPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1ContractorPaymentsContractorPaymentUuidReceipt

Returns a contractor payment receipt.

Notes:
* Receipts are only available for direct deposit payments and are only available once those payments have been funded.
* Payroll Receipt requests for payrolls which do not have receipts available (e.g. payment by check) will return a 404 status.
* Hour and dollar amounts are returned as string representations of numeric decimals.
* Dollar amounts are represented to the cent.
* If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { RFCDate } from "@speakeasy-sdks/gusto/dist/sdk/types";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractorPayments.getV1ContractorPaymentsContractorPaymentUuidReceipt({
  contractorPaymentUuid: "rerum",
}).then((res: GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postV1CompaniesCompanyIdContractorPayments

Pay a contractor. Information needed depends on the contractor's wage type (hourly vs fixed)

scope: `payrolls:run`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdContractorPaymentsRequestBodyPaymentMethod,
  PostV1CompaniesCompanyIdContractorPaymentsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  ContractorPaymentPaymentMethod,
  ContractorPaymentStatus,
  ContractorPaymentWageType,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { RFCDate } from "@speakeasy-sdks/gusto/dist/sdk/types";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractorPayments.postV1CompaniesCompanyIdContractorPayments({
  requestBody: {
    bonus: 500,
    contractorUuid: "dicta",
    date: new RFCDate("2020-01-01"),
    hours: 40,
    paymentMethod: PostV1CompaniesCompanyIdContractorPaymentsRequestBodyPaymentMethod.DirectDeposit,
    reimbursement: 20,
    wage: 5000,
  },
  companyId: "cumque",
}).then((res: PostV1CompaniesCompanyIdContractorPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
