# federalTaxDetails

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
  GetV1CompaniesCompanyIdFederalTaxDetailsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto();

const req: GetV1CompaniesCompanyIdFederalTaxDetailsRequest = {
  companyId: "cum",
};

sdk.federalTaxDetails.getV1CompaniesCompanyIdFederalTaxDetails(req).then((res: GetV1CompaniesCompanyIdFederalTaxDetailsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1CompaniesCompanyIdFederalTaxDetails

Updates attributes relevant for a company's federal taxes. This information is required is to onboard a company for use with Gusto Embedded Payroll.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyIdFederalTaxDetailsRequest,
  PutV1CompaniesCompanyIdFederalTaxDetailsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1CompaniesCompanyIdFederalTaxDetailsRequest = {
  requestBody: {
    ein: "commodi",
    filingForm: "in",
    legalName: "corporis",
    taxPayerType: "reiciendis",
    taxableAsScorp: false,
    version: "assumenda",
  },
  companyId: "nemo",
};

sdk.federalTaxDetails.putV1CompaniesCompanyIdFederalTaxDetails(req).then((res: PutV1CompaniesCompanyIdFederalTaxDetailsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
