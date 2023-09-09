# flows

### Available Operations

* [postV1CompanyFlows](#postv1companyflows) - Create a flow

## postV1CompanyFlows

Generate a link to access a pre-built workflow in Gusto white-label UI. For security, all generated flows will expire within 1 hour of inactivity. Additionally, flows will be deactivated 24 hours from creation time. 

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompanyFlowsRequest,
  PostV1CompanyFlowsRequestBody,
  PostV1CompanyFlowsRequestBodyEntityType,
  PostV1CompanyFlowsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "maiores";
const requestBody: PostV1CompanyFlowsRequestBody = {
  entityType: PostV1CompanyFlowsRequestBodyEntityType.Company,
  entityUuid: "ex",
  flowType: "nulla",
};

sdk.flows.postV1CompanyFlows(companyUuid, requestBody).then((res: PostV1CompanyFlowsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The UUID of the company                                                                              |
| `requestBody`                                                                                        | [operations.PostV1CompanyFlowsRequestBody](../../models/operations/postv1companyflowsrequestbody.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PostV1CompanyFlowsResponse](../../models/operations/postv1companyflowsresponse.md)>**

