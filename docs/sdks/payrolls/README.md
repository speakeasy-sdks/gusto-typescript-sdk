# Payrolls
(*payrolls*)

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
import { GetV1CompaniesCompanyIdPayrollReversalsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "<value>";
const page: number = 8487.52;
const per: number = 7763.39;

  const res = await sdk.payrolls.getV1CompaniesCompanyIdPayrollReversals(companyId, page, per);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `companyId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The UUID of the company                                              |
| `page`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | The page that is requested. When unspecified, will load all objects. |
| `per`                                                                | *number*                                                             | :heavy_minus_sign:                                                   | Number of objects per page. When unspecified, will default to 25     |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdPayrollReversalsResponse](../../sdk/models/operations/getv1companiescompanyidpayrollreversalsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

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
import { GetV1CompaniesCompanyIdPayrollsQueryParamInclude } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.payrolls.getV1CompaniesCompanyIdPayrolls({
    companyId: "<value>",
    include: [
      GetV1CompaniesCompanyIdPayrollsQueryParamInclude.PayrollStatusMeta,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.GetV1CompaniesCompanyIdPayrollsRequest](../../sdk/models/operations/getv1companiescompanyidpayrollsrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdPayrollsResponse](../../sdk/models/operations/getv1companiescompanyidpayrollsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

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
  GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude,
  GetV1CompaniesCompanyIdPayrollsPayrollIdRequest,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "<value>";
const payrollId: string = "<value>";
const include: GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude = GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude.PayrollStatusMeta;
const showCalculation: string = "<value>";

  const res = await sdk.payrolls.getV1CompaniesCompanyIdPayrollsPayrollId(companyId, payrollId, include, showCalculation);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                              | The UUID of the company                                                                                                                                                                                                                                                                                                         |
| `payrollId`                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                              | The UUID of the payroll                                                                                                                                                                                                                                                                                                         |
| `include`                                                                                                                                                                                                                                                                                                                       | [operations.GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude](../../sdk/models/operations/getv1companiescompanyidpayrollspayrollidqueryparaminclude.md)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                              | Include the requested attribute in the response, for multiple attributes comma separate the values, i.e. `?include=benefits,deductions,taxes`                                                                                                                                                                                   |
| `showCalculation`                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                              | With show_calculation = true, the calculated values specified by the include parameter will be shown if the payroll is in an unprocessed, but calculated state.<br/>If a payroll is in an unprocessed, but calculated state and a call is made to this endpoint without show_calculation = true, the calculation will be “cleared.” |
| `config`                                                                                                                                                                                                                                                                                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                              | Available config options for making requests.                                                                                                                                                                                                                                                                                   |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdPayrollsPayrollIdResponse](../../sdk/models/operations/getv1companiescompanyidpayrollspayrollidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getV1CompaniesPayrollBlockersCompanyUuid

Returns a list of reasons that prevent the company from running payrolls.

The list is empty if there are no payroll blockers.

scope: `payrolls:run`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesPayrollBlockersCompanyUuidRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyUuid: string = "<value>";

  const res = await sdk.payrolls.getV1CompaniesPayrollBlockersCompanyUuid(companyUuid);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompaniesPayrollBlockersCompanyUuidResponse](../../sdk/models/operations/getv1companiespayrollblockerscompanyuuidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

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
import { GetV1PaymentReceiptsPayrollsPayrollUuidRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const payrollUuid: string = "<value>";

  const res = await sdk.payrolls.getV1PaymentReceiptsPayrollsPayrollUuid(payrollUuid);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `payrollUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the payroll                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1PaymentReceiptsPayrollsPayrollUuidResponse](../../sdk/models/operations/getv1paymentreceiptspayrollspayrolluuidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStub

Get an employee's pay stub for the specified payroll. By default, an application/pdf response will be returned. No other content types are currently supported, but may be supported in the future.

scope: `payrolls:run`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const employeeId: string = "<value>";
const payrollId: string = "<value>";

  const res = await sdk.payrolls.getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStub(employeeId, payrollId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The UUID of the employee                                     |
| `payrollId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the payroll                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse](../../sdk/models/operations/getv1payrollspayrolluuidemployeesemployeeuuidpaystubresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postV1CompaniesCompanyIdPayrolls

Creates a new, unprocessed, off-cycle payroll.

## `off_cycle_reason`
- External benefits and deductions will be included when the `off_cycle_reason` is set to `Correction`.
- All benefits and deductions are blocked when the `off_cycle_reason` is set to `Bonus`.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  OffCycleReason,
  PostV1CompaniesCompanyIdPayrollsRequest,
  PostV1CompaniesCompanyIdPayrollsRequestBody,
  WithholdingPayPeriod,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "<value>";
const requestBody: PostV1CompaniesCompanyIdPayrollsRequestBody = {
  employeeUuids: [
    "<value>",
  ],
  endDate: "<value>",
  offCycle: false,
  offCycleReason: OffCycleReason.DismissedEmployee,
  startDate: "<value>",
};

  const res = await sdk.payrolls.postV1CompaniesCompanyIdPayrolls(companyId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The UUID of the company                                                                                                              |
| `requestBody`                                                                                                                        | [operations.PostV1CompaniesCompanyIdPayrollsRequestBody](../../sdk/models/operations/postv1companiescompanyidpayrollsrequestbody.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdPayrollsResponse](../../sdk/models/operations/postv1companiescompanyidpayrollsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecks

This endpoint initiates the generation of employee checks for the payroll specified by payroll_id. A generation status and corresponding generated document request_uuid will be returned. Use the generated document GET endpoint with document_type: `printable_payroll_checks` and request_uuid to poll the check generation process and retrieve the generated check URL upon completion.

scope: `generated_documents:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest,
  PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const payrollId: string = "<value>";
const requestBody: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody = {
  printingFormat: "<value>",
};

  const res = await sdk.payrolls.postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecks(payrollId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                              | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `payrollId`                                                                                                                                                                                            | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The UUID of the payroll                                                                                                                                                                                |
| `requestBody`                                                                                                                                                                                          | [operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody](../../sdk/models/operations/postv1payrollspayrolluuidgenerateddocumentsprintablepayrollchecksrequestbody.md) | :heavy_minus_sign:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `config`                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                          |


### Response

**Promise<[operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse](../../sdk/models/operations/postv1payrollspayrolluuidgenerateddocumentsprintablepayrollchecksresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putApiV1CompaniesCompanyIdPayrollsPayrollIdCancel

Transitions a `processed` payroll back to the `unprocessed` state. A payroll can be canceled if it meets both criteria:
- `processed` is true
- Current time is earlier than 3:30pm PT on the payroll_deadline


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "<value>";
const payrollId: string = "<value>";

  const res = await sdk.payrolls.putApiV1CompaniesCompanyIdPayrollsPayrollIdCancel(companyId, payrollId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `payrollId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the payroll                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse](../../sdk/models/operations/putapiv1companiescompanyidpayrollspayrollidcancelresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putV1CompaniesCompanyIdPayrolls

This endpoint allows you to update information for one or more employees for a specific **unprocessed** payroll.

scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyIdPayrollsEmployeeCompensations,
  PutV1CompaniesCompanyIdPayrollsFixedCompensations,
  PutV1CompaniesCompanyIdPayrollsHourlyCompensations,
  PutV1CompaniesCompanyIdPayrollsPaidTimeOff,
  PutV1CompaniesCompanyIdPayrollsPaymentMethod,
  PutV1CompaniesCompanyIdPayrollsRequest,
  PutV1CompaniesCompanyIdPayrollsRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "<value>";
const payrollId: string = "<value>";
const requestBody: PutV1CompaniesCompanyIdPayrollsRequestBody = {
  employeeCompensations: [
    {
      fixedCompensations: [
        {},
      ],
      hourlyCompensations: [
        {},
      ],
      paidTimeOff: [
        {},
      ],
    },
  ],
  version: "<value>",
};

  const res = await sdk.payrolls.putV1CompaniesCompanyIdPayrolls(companyId, payrollId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The UUID of the company                                                                                                            |
| `payrollId`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The UUID of the payroll                                                                                                            |
| `requestBody`                                                                                                                      | [operations.PutV1CompaniesCompanyIdPayrollsRequestBody](../../sdk/models/operations/putv1companiescompanyidpayrollsrequestbody.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdPayrollsResponse](../../sdk/models/operations/putv1companiescompanyidpayrollsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDate

This endpoint allows you to update information for one or more employees for a specific **unprocessed** payroll.

The payrolls are identified by their pay periods’ start_date and end_date. Both are required and must correspond with an existing, unprocessed payroll. *If the dates do not match, the entire request will be rejected.* This was an explicit design decision to remove any assumptions around the time span for data sent.

scope: `payrolls:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  EmployeeCompensations,
  FixedCompensations,
  HourlyCompensations,
  PaidTimeOff,
  PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDatePaymentMethod,
  PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequest,
  PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "<value>";
const payPeriodEndDate: string = "<value>";
const payPeriodStartDate: string = "<value>";
const requestBody: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBody = {
  employeeCompensations: [
    {
      fixedCompensations: [
        {},
      ],
      hourlyCompensations: [
        {},
      ],
      paidTimeOff: [
        {},
      ],
    },
  ],
  version: "<value>",
};

  const res = await sdk.payrolls.putV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDate(companyId, payPeriodEndDate, payPeriodStartDate, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                              | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                                                                                            | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The UUID of the company                                                                                                                                                                                |
| `payPeriodEndDate`                                                                                                                                                                                     | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The end_date of the pay period for the payroll                                                                                                                                                         |
| `payPeriodStartDate`                                                                                                                                                                                   | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The start_date of the pay period for the payroll                                                                                                                                                       |
| `requestBody`                                                                                                                                                                                          | [operations.PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBody](../../sdk/models/operations/putv1companiescompanyidpayrollspayperiodstartdatepayperiodenddaterequestbody.md) | :heavy_minus_sign:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `config`                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                          |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateResponse](../../sdk/models/operations/putv1companiescompanyidpayrollspayperiodstartdatepayperiodenddateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putV1CompaniesCompanyIdPayrollsPayrollIdCalculate

Performs calculations for taxes, benefits, and deductions for an unprocessed payroll. The calculated payroll details provide a preview of the actual values that will be used when the payroll is run.

This calculation is asynchronous and a successful request responds with a 202 HTTP status. To view the details of the calculated payroll, use the GET /v1/companies/{company_id}/payrolls/{payroll_id} endpoint with the *show_calculation=true* and *include=taxes,benefits,deductions* params.

If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "<value>";
const payrollId: string = "<value>";

  const res = await sdk.payrolls.putV1CompaniesCompanyIdPayrollsPayrollIdCalculate(companyId, payrollId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `payrollId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the payroll                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse](../../sdk/models/operations/putv1companiescompanyidpayrollspayrollidcalculateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putV1CompaniesCompanyIdPayrollsPayrollIdSubmit

Submits an unprocessed payroll to be calculated and run. This submission is asynchronous and a successful request responds with a 202 HTTP status. Upon success, transitions the payroll to the `processed` state.

If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "<value>";
const payrollId: string = "<value>";

  const res = await sdk.payrolls.putV1CompaniesCompanyIdPayrollsPayrollIdSubmit(companyId, payrollId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `payrollId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the payroll                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse](../../sdk/models/operations/putv1companiescompanyidpayrollspayrollidsubmitresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
