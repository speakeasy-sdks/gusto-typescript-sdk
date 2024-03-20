<!-- Start SDK Example Usage [usage] -->
```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1CompanyBenefitsCompanyBenefitIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
    const sdk = new Gusto({
        security: {
            authorization: "<YOUR_BEARER_TOKEN_HERE>",
        },
    });
    const companyBenefitId: string = "<value>";

    const res = await sdk.companyBenefits.deleteV1CompanyBenefitsCompanyBenefitId(companyBenefitId);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->