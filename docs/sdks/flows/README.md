# Flows
(*flows*)

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
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const requestBody: PostV1CompanyFlowsRequestBody = {
  flowType: "string",
};

  const res = await sdk.flows.postV1CompanyFlows(companyUuid, requestBody);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The UUID of the company                                                                              |
| `requestBody`                                                                                        | [operations.PostV1CompanyFlowsRequestBody](../../models/operations/postv1companyflowsrequestbody.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PostV1CompanyFlowsResponse](../../models/operations/postv1companyflowsresponse.md)>**

