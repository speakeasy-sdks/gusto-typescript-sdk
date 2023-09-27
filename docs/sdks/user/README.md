# User
(*user*)

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

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.user.getV1Me().then((res: GetV1MeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1MeResponse](../../models/operations/getv1meresponse.md)>**

