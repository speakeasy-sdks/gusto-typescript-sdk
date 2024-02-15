# FederalTaxDetails
(*federalTaxDetails*)

### Available Operations

* [getV1CompaniesCompanyIdFederalTaxDetails](#getv1companiescompanyidfederaltaxdetails) - Get Federal Tax Details
* [putV1CompaniesCompanyIdFederalTaxDetails](#putv1companiescompanyidfederaltaxdetails) - Update Federal Tax Details

## getV1CompaniesCompanyIdFederalTaxDetails

Fetches attributes relevant for a company's federal taxes.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1CompaniesCompanyIdFederalTaxDetailsRequest,
  GetV1CompaniesCompanyIdFederalTaxDetailsSecurity,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto();
const companyId: string = "<value>";
const operationSecurity: GetV1CompaniesCompanyIdFederalTaxDetailsSecurity = {
  authorization: "<YOUR_BEARER_TOKEN_HERE>",
};

  const res = await sdk.federalTaxDetails.getV1CompaniesCompanyIdFederalTaxDetails(operationSecurity, companyId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                                                     | [operations.GetV1CompaniesCompanyIdFederalTaxDetailsSecurity](../../sdk/models/operations/getv1companiescompanyidfederaltaxdetailssecurity.md) | :heavy_check_mark:                                                                                                                             | The security requirements to use for the request.                                                                                              |
| `companyId`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The UUID of the company                                                                                                                        |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdFederalTaxDetailsResponse](../../sdk/models/operations/getv1companiescompanyidfederaltaxdetailsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putV1CompaniesCompanyIdFederalTaxDetails

Updates attributes relevant for a company's federal taxes. This information is required is to onboard a company for use with Gusto Embedded Payroll.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyIdFederalTaxDetailsRequest,
  PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "<value>";
const requestBody: PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody = {
  version: "<value>",
};

  const res = await sdk.federalTaxDetails.putV1CompaniesCompanyIdFederalTaxDetails(companyId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                          | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The UUID of the company                                                                                                                              |
| `requestBody`                                                                                                                                        | [operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody](../../sdk/models/operations/putv1companiescompanyidfederaltaxdetailsrequestbody.md) | :heavy_minus_sign:                                                                                                                                   | Attributes related to federal tax details that can be updated via this endpoint include:                                                             |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse](../../sdk/models/operations/putv1companiescompanyidfederaltaxdetailsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
