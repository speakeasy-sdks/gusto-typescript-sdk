# user

### Available Operations

* [getV1Me](#getv1me) - Get the current user

## getV1Me

Returns information pertaining to the user associated with the
provided access token.
The company_admin:read scope is required to return email.
The companies:read scope is required to return tier and work locations.
The employees:read scope is required to return non-work locations.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1MeResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.user.getV1Me().then((res: GetV1MeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
