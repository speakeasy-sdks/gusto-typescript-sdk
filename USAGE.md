<!-- Start SDK Example Usage -->


```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdBankAccountsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async () => {
    const sdk = new Gusto({
        security: {
            authorization: "",
        },
    });
    const companyId: string = "string";

    const res = await sdk.bankAccounts.getV1CompaniesCompanyIdBankAccounts(companyId);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->