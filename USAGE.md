<!-- Start SDK Example Usage -->
```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdBankAccountsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  CompanyBankAccountAccountType,
  CompanyBankAccountPlaidStatus,
  CompanyBankAccountVerificationStatus,
  CompanyBankAccountVerificationType,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.bankAccounts.getV1CompaniesCompanyIdBankAccounts("corrupti").then((res: GetV1CompaniesCompanyIdBankAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->