<!-- Start SDK Example Usage -->
```typescript
import {
  GetV1CompaniesCompanyIdBankAccountsRequest,
  GetV1CompaniesCompanyIdBankAccountsResponse
} from "gusto/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Gusto } from "gusto";
const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});
    
const req: GetV1CompaniesCompanyIdBankAccountsRequest = {
  pathParams: {
    companyId: "unde",
  },
};

sdk.bankAccounts.getV1CompaniesCompanyIdBankAccounts(req).then((res: GetV1CompaniesCompanyIdBankAccountsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->