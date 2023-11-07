<!-- Start SDK Example Usage -->


```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1CompanyBenefitsCompanyBenefitIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async () => {
    const sdk = new Gusto({
        security: {
            authorization: "",
        },
    });
    const companyBenefitId: string = "string";

    const res = await sdk.companyBenefits.deleteV1CompanyBenefitsCompanyBenefitId(companyBenefitId);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->