# flows

### Available Operations

* [postV1CompanyFlows](#postv1companyflows) - Create a flow

## postV1CompanyFlows

Generate a link to access a pre-built workflow in Gusto white-label UI. For security, all generated flows will expire within 1 hour of inactivity. Additionally, flows will be deactivated 24 hours from creation time. 

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1CompanyFlowsRequestBodyEntityTypeEnum, PostV1CompanyFlowsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.flows.postV1CompanyFlows({
  requestBody: {
    entityType: PostV1CompanyFlowsRequestBodyEntityTypeEnum.Employee,
    entityUuid: "aliquid",
    flowType: "aperiam",
  },
  companyUuid: "cum",
}).then((res: PostV1CompanyFlowsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
