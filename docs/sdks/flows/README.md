# flows

### Available Operations

* [postV1CompanyFlows](#postv1companyflows) - Create a flow

## postV1CompanyFlows

Generate a link to access a pre-built workflow in Gusto white-label UI. For security, all generated flows will expire within 1 hour of inactivity. Additionally, flows will be deactivated 24 hours from creation time. 

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1CompanyFlowsRequestBodyEntityType, PostV1CompanyFlowsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.flows.postV1CompanyFlows({
  requestBody: {
    entityType: PostV1CompanyFlowsRequestBodyEntityType.Employee,
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

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.PostV1CompanyFlowsRequest](../../models/operations/postv1companyflowsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PostV1CompanyFlowsResponse](../../models/operations/postv1companyflowsresponse.md)>**
