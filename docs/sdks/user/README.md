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

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.user.getV1Me();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1MeResponse](../../sdk/models/operations/getv1meresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
