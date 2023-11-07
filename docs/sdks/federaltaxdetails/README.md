# FederalTaxDetails
(*.federalTaxDetails*)

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

(async() => {
  const sdk = new Gusto();
const companyId: string = "string";
const operationSecurity: GetV1CompaniesCompanyIdFederalTaxDetailsSecurity = {
  authorization: "",
};

  const res = await sdk.federalTaxDetails.getV1CompaniesCompanyIdFederalTaxDetails(operationSecurity, companyId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                 | [operations.GetV1CompaniesCompanyIdFederalTaxDetailsSecurity](../../models/operations/getv1companiescompanyidfederaltaxdetailssecurity.md) | :heavy_check_mark:                                                                                                                         | The security requirements to use for the request.                                                                                          |
| `companyId`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The UUID of the company                                                                                                                    |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdFederalTaxDetailsResponse](../../models/operations/getv1companiescompanyidfederaltaxdetailsresponse.md)>**


## putV1CompaniesCompanyIdFederalTaxDetails

Updates attributes relevant for a company's federal taxes. This information is required is to onboard a company for use with Gusto Embedded Payroll.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyIdFederalTaxDetailsRequest,
  PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const requestBody: PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody = {
  version: "string",
};

  const res = await sdk.federalTaxDetails.putV1CompaniesCompanyIdFederalTaxDetails(companyId, requestBody);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The UUID of the company                                                                                                                          |
| `requestBody`                                                                                                                                    | [operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody](../../models/operations/putv1companiescompanyidfederaltaxdetailsrequestbody.md) | :heavy_minus_sign:                                                                                                                               | Attributes related to federal tax details that can be updated via this endpoint include:                                                         |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse](../../models/operations/putv1companiescompanyidfederaltaxdetailsresponse.md)>**

