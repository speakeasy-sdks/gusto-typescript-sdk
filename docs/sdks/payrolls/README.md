# payrolls

### Available Operations

* [getV1CompaniesCompanyIdPayrollReversals](#getv1companiescompanyidpayrollreversals) - Get approved payroll reversals
* [getV1CompaniesCompanyIdPayrolls](#getv1companiescompanyidpayrolls) - Get all payrolls for a company
* [getV1CompaniesCompanyIdPayrollsPayrollId](#getv1companiescompanyidpayrollspayrollid) - Get a single payroll
* [getV1CompaniesPayrollBlockersCompanyUuid](#getv1companiespayrollblockerscompanyuuid) - Get all payroll blockers for a company
* [getV1PaymentReceiptsPayrollsPayrollUuid](#getv1paymentreceiptspayrollspayrolluuid) - Get a single payroll receipt
* [getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStub](#getv1payrollspayrolluuidemployeesemployeeuuidpaystub) - Get an employee pay stub (pdf)
* [postV1CompaniesCompanyIdPayrolls](#postv1companiescompanyidpayrolls) - Create an off-cycle payroll
* [postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecks](#postv1payrollspayrolluuidgenerateddocumentsprintablepayrollchecks) - Generate payroll printable checks (pdf)
* [putApiV1CompaniesCompanyIdPayrollsPayrollIdCancel](#putapiv1companiescompanyidpayrollspayrollidcancel) - Cancel a payroll
* [putV1CompaniesCompanyIdPayrolls](#putv1companiescompanyidpayrolls) - Update a payroll by ID
* [putV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDate](#putv1companiescompanyidpayrollspayperiodstartdatepayperiodenddate) - Update a payroll
* [putV1CompaniesCompanyIdPayrollsPayrollIdCalculate](#putv1companiescompanyidpayrollspayrollidcalculate) - Calculate a payroll
* [putV1CompaniesCompanyIdPayrollsPayrollIdSubmit](#putv1companiescompanyidpayrollspayrollidsubmit) - Submit payroll

## getV1CompaniesCompanyIdPayrollReversals

Returns all approved Payroll Reversals for a Company.

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdPayrollReversalsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.payrolls.getV1CompaniesCompanyIdPayrollReversals({
  companyId: "saepe",
  page: 2536.42,
  per: 3299.35,
}).then((res: GetV1CompaniesCompanyIdPayrollReversalsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetV1CompaniesCompanyIdPayrollReversalsRequest](../../models/operations/getv1companiescompanyidpayrollreversalsrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdPayrollReversalsResponse](../../models/operations/getv1companiescompanyidpayrollreversalsresponse.md)>**


## getV1CompaniesCompanyIdPayrolls

Returns all payrolls, current and past for a company.

Notes:
* Hour and dollar amounts are returned as string representations of numeric decimals.
* Hours are represented to the thousands place; dollar amounts are represented to the cent.
* Every eligible compensation is returned for each employee. If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts) or “0.000” (for hours ).
* When include parameter with benefits value is passed, employee_benefits:read scope is required to return benefits

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdPayrollsInclude, GetV1CompaniesCompanyIdPayrollsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  PayrollEmployeeCompensationsPaymentMethod,
  PayrollOffCycleReason,
  PayrollWithholdingPayPeriod,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.payrolls.getV1CompaniesCompanyIdPayrolls({
  companyId: "in",
  endDate: "officiis",
  include: [
    GetV1CompaniesCompanyIdPayrollsInclude.PayrollStatusMeta,
  ],
  includeOffCycle: false,
  processed: false,
  startDate: "exercitationem",
}).then((res: GetV1CompaniesCompanyIdPayrollsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetV1CompaniesCompanyIdPayrollsRequest](../../models/operations/getv1companiescompanyidpayrollsrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdPayrollsResponse](../../models/operations/getv1companiescompanyidpayrollsresponse.md)>**


## getV1CompaniesCompanyIdPayrollsPayrollId

Returns a payroll.

Notes:
* Hour and dollar amounts are returned as string representations of numeric decimals.
* Hours are represented to the thousands place; dollar amounts are represented to the cent.
* Every eligible compensation is returned for each employee. If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts) or “0.000” (for hours ).
* When include parameter with benefits value is passed, employee_benefits:read scope is required to return benefits

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1CompaniesCompanyIdPayrollsPayrollIdInclude,
  GetV1CompaniesCompanyIdPayrollsPayrollIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  PayrollEmployeeCompensationsPaymentMethod,
  PayrollOffCycleReason,
  PayrollWithholdingPayPeriod,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.payrolls.getV1CompaniesCompanyIdPayrollsPayrollId({
  companyId: "praesentium",
  include: GetV1CompaniesCompanyIdPayrollsPayrollIdInclude.PayrollStatusMeta,
  payrollId: "laboriosam",
  showCalculation: "dolorum",
}).then((res: GetV1CompaniesCompanyIdPayrollsPayrollIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.GetV1CompaniesCompanyIdPayrollsPayrollIdRequest](../../models/operations/getv1companiescompanyidpayrollspayrollidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdPayrollsPayrollIdResponse](../../models/operations/getv1companiescompanyidpayrollspayrollidresponse.md)>**


## getV1CompaniesPayrollBlockersCompanyUuid

Returns a list of reasons that prevent the company from running payrolls.

The list is empty if there are no payroll blockers.

scope: `payrolls:run`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesPayrollBlockersCompanyUuidResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.payrolls.getV1CompaniesPayrollBlockersCompanyUuid({
  companyUuid: "voluptatum",
}).then((res: GetV1CompaniesPayrollBlockersCompanyUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.GetV1CompaniesPayrollBlockersCompanyUuidRequest](../../models/operations/getv1companiespayrollblockerscompanyuuidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.GetV1CompaniesPayrollBlockersCompanyUuidResponse](../../models/operations/getv1companiespayrollblockerscompanyuuidresponse.md)>**


## getV1PaymentReceiptsPayrollsPayrollUuid

Returns a payroll receipt.

Notes:
* Hour and dollar amounts are returned as string representations of numeric decimals.
* Dollar amounts are represented to the cent.
* If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).

scope: `payrolls:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1PaymentReceiptsPayrollsPayrollUuidResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.payrolls.getV1PaymentReceiptsPayrollsPayrollUuid({
  payrollUuid: "error",
}).then((res: GetV1PaymentReceiptsPayrollsPayrollUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetV1PaymentReceiptsPayrollsPayrollUuidRequest](../../models/operations/getv1paymentreceiptspayrollspayrolluuidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetV1PaymentReceiptsPayrollsPayrollUuidResponse](../../models/operations/getv1paymentreceiptspayrollspayrolluuidresponse.md)>**


## getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStub

Get an employee's pay stub for the specified payroll. By default, an application/pdf response will be returned. No other content types are currently supported, but may be supported in the future.

scope: `payrolls:run`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.payrolls.getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStub({
  employeeId: "hic",
  payrollId: "expedita",
}).then((res: GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                        | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                        | [operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest](../../models/operations/getv1payrollspayrolluuidemployeesemployeeuuidpaystubrequest.md) | :heavy_check_mark:                                                                                                                                               | The request object to use for the request.                                                                                                                       |
| `config`                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                     | :heavy_minus_sign:                                                                                                                                               | Available config options for making requests.                                                                                                                    |


### Response

**Promise<[operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse](../../models/operations/getv1payrollspayrolluuidemployeesemployeeuuidpaystubresponse.md)>**


## postV1CompaniesCompanyIdPayrolls

Creates a new, unprocessed, off-cycle payroll.

## `off_cycle_reason`
- External benefits and deductions will be included when the `off_cycle_reason` is set to `Correction`.
- All benefits and deductions are blocked when the `off_cycle_reason` is set to `Bonus`.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdPayrollsRequestBodyOffCycleReason,
  PostV1CompaniesCompanyIdPayrollsRequestBodyWithholdingPayPeriod,
  PostV1CompaniesCompanyIdPayrollsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  PayrollEmployeeCompensationsPaymentMethod,
  PayrollOffCycleReason,
  PayrollWithholdingPayPeriod,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.payrolls.postV1CompaniesCompanyIdPayrolls({
  requestBody: {
    checkDate: "debitis",
    employeeUuids: [
      "dolorum",
    ],
    endDate: "nostrum",
    fixedWithholdingRate: false,
    offCycle: false,
    offCycleReason: PostV1CompaniesCompanyIdPayrollsRequestBodyOffCycleReason.Correction,
    skipRegularDeductions: false,
    startDate: "dolorum",
    withholdingPayPeriod: PostV1CompaniesCompanyIdPayrollsRequestBodyWithholdingPayPeriod.Monthly,
  },
  companyId: "accusamus",
}).then((res: PostV1CompaniesCompanyIdPayrollsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PostV1CompaniesCompanyIdPayrollsRequest](../../models/operations/postv1companiescompanyidpayrollsrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdPayrollsResponse](../../models/operations/postv1companiescompanyidpayrollsresponse.md)>**


## postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecks

This endpoint initiates the generation of employee checks for the payroll specified by payroll_id. A generation status and corresponding generated document request_uuid will be returned. Use the generated document GET endpoint with document_type: `printable_payroll_checks` and request_uuid to poll the check generation process and retrieve the generated check URL upon completion.

scope: `generated_documents:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.payrolls.postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecks({
  requestBody: {
    printingFormat: "tempora",
    startingCheckNumber: 543678,
  },
  payrollId: "fugit",
}).then((res: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest](../../models/operations/postv1payrollspayrolluuidgenerateddocumentsprintablepayrollchecksrequest.md) | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `config`                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                         | Available config options for making requests.                                                                                                                                              |


### Response

**Promise<[operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse](../../models/operations/postv1payrollspayrolluuidgenerateddocumentsprintablepayrollchecksresponse.md)>**


## putApiV1CompaniesCompanyIdPayrollsPayrollIdCancel

Transitions a `processed` payroll back to the `unprocessed` state. A payroll can be canceled if it meets both criteria:
- `processed` is true
- Current time is earlier than 3:30pm PT on the payroll_deadline


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  PayrollEmployeeCompensationsPaymentMethod,
  PayrollOffCycleReason,
  PayrollWithholdingPayPeriod,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.payrolls.putApiV1CompaniesCompanyIdPayrollsPayrollIdCancel({
  companyId: "ut",
  payrollId: "fugiat",
}).then((res: PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest](../../models/operations/putapiv1companiescompanyidpayrollspayrollidcancelrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse](../../models/operations/putapiv1companiescompanyidpayrollspayrollidcancelresponse.md)>**


## putV1CompaniesCompanyIdPayrolls

This endpoint allows you to update information for one or more employees for a specific **unprocessed** payroll.

scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsPaymentMethod,
  PutV1CompaniesCompanyIdPayrollsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  PayrollEmployeeCompensationsPaymentMethod,
  PayrollOffCycleReason,
  PayrollWithholdingPayPeriod,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.payrolls.putV1CompaniesCompanyIdPayrolls({
  requestBody: {
    employeeCompensations: [
      {
        employeeUuid: "culpa",
        excluded: false,
        fixedCompensations: [
          {
            amount: "magnam",
            jobUuid: 7884,
            name: "Brittany Bailey",
          },
          {
            amount: "repudiandae",
            jobUuid: 361151,
            name: "Mattie Jaskolski III",
          },
          {
            amount: "nostrum",
            jobUuid: 906172,
            name: "William Gottlieb",
          },
        ],
        hourlyCompensations: [
          {
            hours: "dicta",
            jobUuid: 99416,
            name: "Francisco Powlowski",
          },
          {
            hours: "nam",
            jobUuid: 948861,
            name: "Patricia Farrell",
          },
          {
            hours: "unde",
            jobUuid: 972083,
            name: "Marcos Windler MD",
          },
        ],
        paidTimeOff: [
          {
            finalPayoutUnusedHoursInput: "reprehenderit",
            hours: "facere",
            name: "Max O'Connell DDS",
            policyUuid: "repudiandae",
          },
          {
            finalPayoutUnusedHoursInput: "quasi",
            hours: "atque",
            name: "Tabitha Leannon",
            policyUuid: "maxime",
          },
          {
            finalPayoutUnusedHoursInput: "et",
            hours: "esse",
            name: "Angelina Jenkins",
            policyUuid: "officiis",
          },
        ],
        paymentMethod: PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsPaymentMethod.Check,
      },
    ],
    version: "accusamus",
  },
  companyId: "natus",
  payrollId: "minima",
}).then((res: PutV1CompaniesCompanyIdPayrollsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PutV1CompaniesCompanyIdPayrollsRequest](../../models/operations/putv1companiescompanyidpayrollsrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdPayrollsResponse](../../models/operations/putv1companiescompanyidpayrollsresponse.md)>**


## putV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDate

This endpoint allows you to update information for one or more employees for a specific **unprocessed** payroll.

The payrolls are identified by their pay periods’ start_date and end_date. Both are required and must correspond with an existing, unprocessed payroll. *If the dates do not match, the entire request will be rejected.* This was an explicit design decision to remove any assumptions around the time span for data sent.

scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsPaymentMethod,
  PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  PayrollEmployeeCompensationsPaymentMethod,
  PayrollOffCycleReason,
  PayrollWithholdingPayPeriod,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.payrolls.putV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDate({
  requestBody: {
    employeeCompensations: [
      {
        employeeUuid: "ex",
        excluded: false,
        fixedCompensations: [
          {
            amount: "corrupti",
            jobUuid: "at",
            name: "Guy Hoeger",
          },
          {
            amount: "atque",
            jobUuid: "sunt",
            name: "Wilbur Simonis",
          },
          {
            amount: "doloremque",
            jobUuid: "repudiandae",
            name: "Ruth Breitenberg",
          },
          {
            amount: "laboriosam",
            jobUuid: "velit",
            name: "Ross Gusikowski",
          },
        ],
        hourlyCompensations: [
          {
            hours: "officiis",
            jobUuid: "perspiciatis",
            name: "Sylvia Upton",
          },
          {
            hours: "fugit",
            jobUuid: "id",
            name: "Mrs. Bessie Muller",
          },
          {
            hours: "eveniet",
            jobUuid: "non",
            name: "Ms. Brian Kerluke IV",
          },
        ],
        paidTimeOff: [
          {
            hours: "qui",
            name: "Elmer Treutel",
            policyUuid: "distinctio",
          },
          {
            hours: "voluptatum",
            name: "Jim Hammes II",
            policyUuid: "perspiciatis",
          },
          {
            hours: "nihil",
            name: "Shane Abshire",
            policyUuid: "dolores",
          },
          {
            hours: "id",
            name: "Joanne Parisian DVM",
            policyUuid: "omnis",
          },
        ],
        paymentMethod: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsPaymentMethod.DirectDeposit,
      },
    ],
    version: "molestiae",
  },
  companyId: "ex",
  payPeriodEndDate: "ut",
  payPeriodStartDate: "culpa",
}).then((res: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequest](../../models/operations/putv1companiescompanyidpayrollspayperiodstartdatepayperiodenddaterequest.md) | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `config`                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                         | Available config options for making requests.                                                                                                                                              |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateResponse](../../models/operations/putv1companiescompanyidpayrollspayperiodstartdatepayperiodenddateresponse.md)>**


## putV1CompaniesCompanyIdPayrollsPayrollIdCalculate

Performs calculations for taxes, benefits, and deductions for an unprocessed payroll. The calculated payroll details provide a preview of the actual values that will be used when the payroll is run.

This calculation is asynchronous and a successful request responds with a 202 HTTP status. To view the details of the calculated payroll, use the GET /v1/companies/{company_id}/payrolls/{payroll_id} endpoint with the *show_calculation=true* and *include=taxes,benefits,deductions* params.

If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.payrolls.putV1CompaniesCompanyIdPayrollsPayrollIdCalculate({
  companyId: "adipisci",
  payrollId: "debitis",
}).then((res: PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest](../../models/operations/putv1companiescompanyidpayrollspayrollidcalculaterequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse](../../models/operations/putv1companiescompanyidpayrollspayrollidcalculateresponse.md)>**


## putV1CompaniesCompanyIdPayrollsPayrollIdSubmit

Submits an unprocessed payroll to be calculated and run. This submission is asynchronous and a successful request responds with a 202 HTTP status. Upon success, transitions the payroll to the `processed` state.

If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.payrolls.putV1CompaniesCompanyIdPayrollsPayrollIdSubmit({
  companyId: "laudantium",
  payrollId: "eum",
}).then((res: PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest](../../models/operations/putv1companiescompanyidpayrollspayrollidsubmitrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse](../../models/operations/putv1companiescompanyidpayrollspayrollidsubmitresponse.md)>**

