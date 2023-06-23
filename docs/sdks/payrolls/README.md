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

sdk.payrolls.getV1CompaniesCompanyIdPayrollReversals("natus", 3283.03, 1334.61).then((res: GetV1CompaniesCompanyIdPayrollReversalsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `companyId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The UUID of the company                                              |
| `page`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | The page that is requested. When unspecified, will load all objects. |
| `per`                                                                | *number*                                                             | :heavy_minus_sign:                                                   | Number of objects per page. When unspecified, will default to 25     |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


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
  companyId: "ex",
  endDate: "maiores",
  include: [
    GetV1CompaniesCompanyIdPayrollsInclude.Taxes,
    GetV1CompaniesCompanyIdPayrollsInclude.PayrollStatusMeta,
    GetV1CompaniesCompanyIdPayrollsInclude.PayrollStatusMeta,
  ],
  includeOffCycle: false,
  processed: false,
  startDate: "suscipit",
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

sdk.payrolls.getV1CompaniesCompanyIdPayrollsPayrollId("repudiandae", "atque", GetV1CompaniesCompanyIdPayrollsPayrollIdInclude.PayrollStatusMeta, "sunt").then((res: GetV1CompaniesCompanyIdPayrollsPayrollIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                              | The UUID of the company                                                                                                                                                                                                                                                                                                         |
| `payrollId`                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                              | The UUID of the payroll                                                                                                                                                                                                                                                                                                         |
| `include`                                                                                                                                                                                                                                                                                                                       | [operations.GetV1CompaniesCompanyIdPayrollsPayrollIdInclude](../../models/operations/getv1companiescompanyidpayrollspayrollidinclude.md)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                              | Include the requested attribute in the response, for multiple attributes comma separate the values, i.e. `?include=benefits,deductions,taxes`                                                                                                                                                                                   |
| `showCalculation`                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                              | With show_calculation = true, the calculated values specified by the include parameter will be shown if the payroll is in an unprocessed, but calculated state.<br/>If a payroll is in an unprocessed, but calculated state and a call is made to this endpoint without show_calculation = true, the calculation will be “cleared.” |
| `config`                                                                                                                                                                                                                                                                                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                              | Available config options for making requests.                                                                                                                                                                                                                                                                                   |


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

sdk.payrolls.getV1CompaniesPayrollBlockersCompanyUuid("recusandae").then((res: GetV1CompaniesPayrollBlockersCompanyUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


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

sdk.payrolls.getV1PaymentReceiptsPayrollsPayrollUuid("dolorum").then((res: GetV1PaymentReceiptsPayrollsPayrollUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `payrollUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the payroll                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


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

sdk.payrolls.getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStub("repellendus", "labore").then((res: GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `payrollId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the payroll                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


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

sdk.payrolls.postV1CompaniesCompanyIdPayrolls("reiciendis", {
  checkDate: "doloremque",
  employeeUuids: [
    "dicta",
    "accusantium",
    "beatae",
    "dolores",
  ],
  endDate: "enim",
  fixedWithholdingRate: false,
  offCycle: false,
  offCycleReason: PostV1CompaniesCompanyIdPayrollsRequestBodyOffCycleReason.Correction,
  skipRegularDeductions: false,
  startDate: "velit",
  withholdingPayPeriod: PostV1CompaniesCompanyIdPayrollsRequestBodyWithholdingPayPeriod.Annually,
}).then((res: PostV1CompaniesCompanyIdPayrollsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The UUID of the company                                                                                                          |
| `requestBody`                                                                                                                    | [operations.PostV1CompaniesCompanyIdPayrollsRequestBody](../../models/operations/postv1companiescompanyidpayrollsrequestbody.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


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

sdk.payrolls.postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecks("molestias", {
  printingFormat: "magnam",
  startingCheckNumber: 906355,
}).then((res: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payrollId`                                                                                                                                                                                        | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The UUID of the payroll                                                                                                                                                                            |
| `requestBody`                                                                                                                                                                                      | [operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody](../../models/operations/postv1payrollspayrolluuidgenerateddocumentsprintablepayrollchecksrequestbody.md) | :heavy_minus_sign:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `config`                                                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                 | Available config options for making requests.                                                                                                                                                      |


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

sdk.payrolls.putApiV1CompaniesCompanyIdPayrollsPayrollIdCancel("consequuntur", "occaecati").then((res: PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `payrollId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the payroll                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


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

sdk.payrolls.putV1CompaniesCompanyIdPayrolls("officiis", "perspiciatis", {
  employeeCompensations: [
    {
      employeeUuid: "adipisci",
      excluded: false,
      fixedCompensations: [
        {
          amount: "occaecati",
          jobUuid: 160230,
          name: "Amelia Harvey",
        },
        {
          amount: "illo",
          jobUuid: 361306,
          name: "Conrad Franey III",
        },
        {
          amount: "ipsa",
          jobUuid: 517612,
          name: "Nellie Upton",
        },
        {
          amount: "iure",
          jobUuid: 898063,
          name: "Maggie Rau",
        },
      ],
      hourlyCompensations: [
        {
          hours: "ad",
          jobUuid: 997963,
          name: "Renee Metz",
        },
        {
          hours: "voluptas",
          jobUuid: 5189,
          name: "Dominick Daniel",
        },
      ],
      paidTimeOff: [
        {
          finalPayoutUnusedHoursInput: "dolorum",
          hours: "nesciunt",
          name: "Sophie Mohr",
          policyUuid: "ex",
        },
        {
          finalPayoutUnusedHoursInput: "ut",
          hours: "culpa",
          name: "Raquel Larkin",
          policyUuid: "recusandae",
        },
      ],
      paymentMethod: PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsPaymentMethod.DirectDeposit,
    },
    {
      employeeUuid: "provident",
      excluded: false,
      fixedCompensations: [
        {
          amount: "eum",
          jobUuid: 970494,
          name: "Miss Bruce Hermann",
        },
        {
          amount: "mollitia",
          jobUuid: 591027,
          name: "Lynn Jacobson DVM",
        },
      ],
      hourlyCompensations: [
        {
          hours: "ullam",
          jobUuid: 448143,
          name: "Darin Nienow",
        },
        {
          hours: "modi",
          jobUuid: 976226,
          name: "Stewart Will MD",
        },
        {
          hours: "tempora",
          jobUuid: 335498,
          name: "Mr. Denise Runolfsdottir",
        },
        {
          hours: "aspernatur",
          jobUuid: 432281,
          name: "Deanna Swaniawski",
        },
      ],
      paidTimeOff: [
        {
          finalPayoutUnusedHoursInput: "eum",
          hours: "dicta",
          name: "Teresa McCullough",
          policyUuid: "soluta",
        },
        {
          finalPayoutUnusedHoursInput: "hic",
          hours: "illum",
          name: "Sonja Metz",
          policyUuid: "aliquid",
        },
        {
          finalPayoutUnusedHoursInput: "porro",
          hours: "suscipit",
          name: "Denise Runolfsdottir",
          policyUuid: "animi",
        },
        {
          finalPayoutUnusedHoursInput: "necessitatibus",
          hours: "nulla",
          name: "Joyce Borer",
          policyUuid: "occaecati",
        },
      ],
      paymentMethod: PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsPaymentMethod.DirectDeposit,
    },
  ],
  version: "adipisci",
}).then((res: PutV1CompaniesCompanyIdPayrollsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The UUID of the company                                                                                                        |
| `payrollId`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The UUID of the payroll                                                                                                        |
| `requestBody`                                                                                                                  | [operations.PutV1CompaniesCompanyIdPayrollsRequestBody](../../models/operations/putv1companiescompanyidpayrollsrequestbody.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


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

sdk.payrolls.putV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDate("quasi", "magni", "doloribus", {
  employeeCompensations: [
    {
      employeeUuid: "necessitatibus",
      excluded: false,
      fixedCompensations: [
        {
          amount: "tempora",
          jobUuid: "nihil",
          name: "Jean Kris",
        },
      ],
      hourlyCompensations: [
        {
          hours: "reiciendis",
          jobUuid: "vel",
          name: "Ms. Janis Batz",
        },
        {
          hours: "esse",
          jobUuid: "ex",
          name: "Jeanne Beer II",
        },
        {
          hours: "fugiat",
          jobUuid: "expedita",
          name: "Brandi Homenick III",
        },
        {
          hours: "voluptas",
          jobUuid: "iste",
          name: "Raymond Muller",
        },
      ],
      paidTimeOff: [
        {
          hours: "laborum",
          name: "Derek Leuschke PhD",
          policyUuid: "ex",
        },
        {
          hours: "quo",
          name: "Debbie Hammes V",
          policyUuid: "cum",
        },
        {
          hours: "aliquid",
          name: "Miss Nora Moen",
          policyUuid: "culpa",
        },
      ],
      paymentMethod: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsPaymentMethod.DirectDeposit,
    },
    {
      employeeUuid: "sapiente",
      excluded: false,
      fixedCompensations: [
        {
          amount: "architecto",
          jobUuid: "fuga",
          name: "Ms. Doyle Barrows",
        },
        {
          amount: "ex",
          jobUuid: "sapiente",
          name: "Israel Hickle",
        },
        {
          amount: "ullam",
          jobUuid: "perferendis",
          name: "Jimmie Russel",
        },
        {
          amount: "ipsam",
          jobUuid: "culpa",
          name: "Michele Bode II",
        },
      ],
      hourlyCompensations: [
        {
          hours: "consequatur",
          jobUuid: "architecto",
          name: "Ms. Pauline Considine I",
        },
      ],
      paidTimeOff: [
        {
          hours: "ipsam",
          name: "Cynthia Macejkovic",
          policyUuid: "officiis",
        },
        {
          hours: "esse",
          name: "Aaron Hartmann",
          policyUuid: "eum",
        },
        {
          hours: "vel",
          name: "Miss Oscar Heller",
          policyUuid: "nobis",
        },
        {
          hours: "laboriosam",
          name: "Carlos Barrows",
          policyUuid: "quasi",
        },
      ],
      paymentMethod: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsPaymentMethod.DirectDeposit,
    },
    {
      employeeUuid: "at",
      excluded: false,
      fixedCompensations: [
        {
          amount: "est",
          jobUuid: "harum",
          name: "Ora VonRueden",
        },
        {
          amount: "nemo",
          jobUuid: "voluptate",
          name: "Gerard Hodkiewicz",
        },
        {
          amount: "quos",
          jobUuid: "eius",
          name: "Caroline Dooley",
        },
        {
          amount: "incidunt",
          jobUuid: "quasi",
          name: "Clint Carroll",
        },
      ],
      hourlyCompensations: [
        {
          hours: "aperiam",
          jobUuid: "cupiditate",
          name: "Dominic Abernathy",
        },
      ],
      paidTimeOff: [
        {
          hours: "iste",
          name: "Stephanie Pfannerstill",
          policyUuid: "distinctio",
        },
        {
          hours: "omnis",
          name: "Darrell Lang",
          policyUuid: "temporibus",
        },
        {
          hours: "quos",
          name: "Lorena Johns",
          policyUuid: "modi",
        },
      ],
      paymentMethod: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsPaymentMethod.Check,
    },
    {
      employeeUuid: "vero",
      excluded: false,
      fixedCompensations: [
        {
          amount: "ipsam",
          jobUuid: "vel",
          name: "Frances Franey",
        },
      ],
      hourlyCompensations: [
        {
          hours: "nulla",
          jobUuid: "deserunt",
          name: "Ida Kilback",
        },
        {
          hours: "sint",
          jobUuid: "accusamus",
          name: "Irvin Tromp",
        },
        {
          hours: "voluptas",
          jobUuid: "debitis",
          name: "Eric Schiller",
        },
      ],
      paidTimeOff: [
        {
          hours: "velit",
          name: "Dale Rutherford",
          policyUuid: "repudiandae",
        },
      ],
      paymentMethod: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsPaymentMethod.Check,
    },
  ],
  version: "dolore",
}).then((res: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                                                                        | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The UUID of the company                                                                                                                                                                            |
| `payPeriodEndDate`                                                                                                                                                                                 | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The end_date of the pay period for the payroll                                                                                                                                                     |
| `payPeriodStartDate`                                                                                                                                                                               | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The start_date of the pay period for the payroll                                                                                                                                                   |
| `requestBody`                                                                                                                                                                                      | [operations.PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBody](../../models/operations/putv1companiescompanyidpayrollspayperiodstartdatepayperiodenddaterequestbody.md) | :heavy_minus_sign:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `config`                                                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                 | Available config options for making requests.                                                                                                                                                      |


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

sdk.payrolls.putV1CompaniesCompanyIdPayrollsPayrollIdCalculate("iusto", "voluptate").then((res: PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `payrollId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the payroll                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


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

sdk.payrolls.putV1CompaniesCompanyIdPayrollsPayrollIdSubmit("sequi", "dignissimos").then((res: PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `payrollId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the payroll                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse](../../models/operations/putv1companiescompanyidpayrollspayrollidsubmitresponse.md)>**

