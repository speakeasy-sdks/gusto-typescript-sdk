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
  companyId: "cum",
}, {
  authorization: "",
}).then((res: GetV1CompaniesCompanyIdFederalTaxDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.GetV1CompaniesCompanyIdFederalTaxDetailsRequest](../../models/operations/getv1companiescompanyidfederaltaxdetailsrequest.md)   | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `security`                                                                                                                                 | [operations.GetV1CompaniesCompanyIdFederalTaxDetailsSecurity](../../models/operations/getv1companiescompanyidfederaltaxdetailssecurity.md) | :heavy_check_mark:                                                                                                                         | The security requirements to use for the request.                                                                                          |
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

sdk.federalTaxDetails.putV1CompaniesCompanyIdFederalTaxDetails({
  requestBody: {
    ein: "commodi",
    filingForm: "in",
    legalName: "corporis",
    taxPayerType: "reiciendis",
    taxableAsScorp: false,
    version: "assumenda",
  },
  companyId: "nemo",
}).then((res: PutV1CompaniesCompanyIdFederalTaxDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequest](../../models/operations/putv1companiescompanyidfederaltaxdetailsrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse](../../models/operations/putv1companiescompanyidfederaltaxdetailsresponse.md)>**

