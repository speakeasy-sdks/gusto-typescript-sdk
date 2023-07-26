# federalTaxDetails

### Available Operations

* [getV1CompaniesCompanyIdFederalTaxDetails](#getv1companiescompanyidfederaltaxdetails) - Get Federal Tax Details
* [putV1CompaniesCompanyIdFederalTaxDetails](#putv1companiescompanyidfederaltaxdetails) - Update Federal Tax Details

## getV1CompaniesCompanyIdFederalTaxDetails

Fetches attributes relevant for a company's federal taxes.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdFederalTaxDetailsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto();

sdk.federalTaxDetails.getV1CompaniesCompanyIdFederalTaxDetails({
  authorization: "",
}, "exercitationem").then((res: GetV1CompaniesCompanyIdFederalTaxDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { PutV1CompaniesCompanyIdFederalTaxDetailsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.federalTaxDetails.putV1CompaniesCompanyIdFederalTaxDetails("earum", {
  ein: "facere",
  filingForm: "numquam",
  legalName: "doloribus",
  taxPayerType: "suscipit",
  taxableAsScorp: false,
  version: "reiciendis",
}).then((res: PutV1CompaniesCompanyIdFederalTaxDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The UUID of the company                                                                                                                          |
| `requestBody`                                                                                                                                    | [operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody](../../models/operations/putv1companiescompanyidfederaltaxdetailsrequestbody.md) | :heavy_minus_sign:                                                                                                                               | Attributes related to federal tax details that can be updated via this endpoint include:                                                         |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse](../../models/operations/putv1companiescompanyidfederaltaxdetailsresponse.md)>**

