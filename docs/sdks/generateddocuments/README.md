# GeneratedDocuments

### Available Operations

* [getV1GeneratedDocumentsDocumentTypeRequestUuid](#getv1generateddocumentsdocumenttyperequestuuid) - Get a generated document

## getV1GeneratedDocumentsDocumentTypeRequestUuid

Get a generated document given the request_uuid. The response will include the generation request's status and, if complete, the relevant document urls.

scope: `generated_documents:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest,
  GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const documentType: string = "aspernatur";
const requestUuid: string = "minima";

sdk.generatedDocuments.getV1GeneratedDocumentsDocumentTypeRequestUuid(documentType, requestUuid).then((res: GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `documentType`                                               | *string*                                                     | :heavy_check_mark:                                           | the type of document being generated                         |
| `requestUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the Generated Document Request                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse](../../models/operations/getv1generateddocumentsdocumenttyperequestuuidresponse.md)>**

