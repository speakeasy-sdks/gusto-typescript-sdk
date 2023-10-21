# ContractorPayments
(*contractorPayments*)

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
import { DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const contractorPaymentId: string = "string";

  const res = await sdk.contractorPayments.deleteV1CompaniesCompanyIdContractorPaymentContractorPayment(companyId, contractorPaymentId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `contractorPaymentId`                                        | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor payment                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse](../../models/operations/deletev1companiescompanyidcontractorpaymentcontractorpaymentresponse.md)>**


## getV1CompaniesCompanyIdContractorPaymentContractorPayment

Returns a single contractor payments

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const contractorPaymentId: string = "string";

  const res = await sdk.contractorPayments.getV1CompaniesCompanyIdContractorPaymentContractorPayment(companyId, contractorPaymentId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `contractorPaymentId`                                        | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor payment                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse](../../models/operations/getv1companiescompanyidcontractorpaymentcontractorpaymentresponse.md)>**


## getV1CompaniesCompanyIdContractorPayments

Returns an object containing individual contractor payments, within a given time period, including totals.

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.contractorPayments.getV1CompaniesCompanyIdContractorPayments({
    companyId: "string",
    endDate: "2020-12-31",
    startDate: "2020-01-01",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.GetV1CompaniesCompanyIdContractorPaymentsRequest](../../models/operations/getv1companiescompanyidcontractorpaymentsrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdContractorPaymentsResponse](../../models/operations/getv1companiescompanyidcontractorpaymentsresponse.md)>**


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
import { GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const contractorPaymentUuid: string = "string";

  const res = await sdk.contractorPayments.getV1ContractorPaymentsContractorPaymentUuidReceipt(contractorPaymentUuid);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorPaymentUuid`                                      | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor payment                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse](../../models/operations/getv1contractorpaymentscontractorpaymentuuidreceiptresponse.md)>**


## postV1CompaniesCompanyIdContractorPayments

Pay a contractor. Information needed depends on the contractor's wage type (hourly vs fixed)

scope: `payrolls:run`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdContractorPaymentsRequest,
  PostV1CompaniesCompanyIdContractorPaymentsRequestBody,
  PostV1CompaniesCompanyIdContractorPaymentsRequestBodyPaymentMethod,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { RFCDate } from "@speakeasy-sdks/gusto/dist/sdk/types";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const requestBody: PostV1CompaniesCompanyIdContractorPaymentsRequestBody = {
  bonus: 500,
  contractorUuid: "string",
  date: new RFCDate("2020-01-01"),
  hours: 40,
  reimbursement: 20,
  wage: 5000,
};

  const res = await sdk.contractorPayments.postV1CompaniesCompanyIdContractorPayments(companyId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                          | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The UUID of the company                                                                                                                              |
| `requestBody`                                                                                                                                        | [operations.PostV1CompaniesCompanyIdContractorPaymentsRequestBody](../../models/operations/postv1companiescompanyidcontractorpaymentsrequestbody.md) | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdContractorPaymentsResponse](../../models/operations/postv1companiescompanyidcontractorpaymentsresponse.md)>**

