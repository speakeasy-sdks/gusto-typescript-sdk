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
