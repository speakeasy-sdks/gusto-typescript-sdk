<!-- Start SDK Example Usage -->
```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1CompaniesCompanyIdBankAccountsRequest,
  GetV1CompaniesCompanyIdBankAccountsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import {
  CompanyBankAccountAccountTypeEnum,
  CompanyBankAccountPlaidStatusEnum,
  CompanyBankAccountVerificationStatusEnum,
  CompanyBankAccountVerificationTypeEnum,
} from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompaniesCompanyIdBankAccountsRequest = {
  companyId: "corrupti",
};

sdk.bankAccounts.getV1CompaniesCompanyIdBankAccounts(req).then((res: GetV1CompaniesCompanyIdBankAccountsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->