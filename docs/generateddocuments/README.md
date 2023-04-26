# generatedDocuments

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
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest = {
  documentType: "amet",
  requestUuid: "beatae",
};

sdk.generatedDocuments.getV1GeneratedDocumentsDocumentTypeRequestUuid(req).then((res: GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
