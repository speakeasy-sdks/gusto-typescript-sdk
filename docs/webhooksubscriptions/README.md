# webhookSubscriptions

### Available Operations

* [deleteV1WebhookSubscriptionUuid](#deletev1webhooksubscriptionuuid) - Delete a webhook subscription
* [getV1WebhookSubscriptionUuid](#getv1webhooksubscriptionuuid) - Get a webhook subscription
* [getV1WebhookSubscriptionVerificationTokenUuid](#getv1webhooksubscriptionverificationtokenuuid) - Request the webhook subscription verification_token
* [getV1WebhookSubscriptions](#getv1webhooksubscriptions) - List webhook subscriptions
* [postV1WebhookSubscription](#postv1webhooksubscription) - Create a Webhook Subscription
* [putV1VerifyWebhookSubscriptionUuid](#putv1verifywebhooksubscriptionuuid) - Verify the webhook subscription
* [putV1WebhookSubscriptionUuid](#putv1webhooksubscriptionuuid) - Update a webhook subscription

## deleteV1WebhookSubscriptionUuid

Deletes the Webhook Subscription associated with the provided UUID.
scope: `webhook_subscriptions:write`
### Authentication
Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
```
Content-Type: application/json
Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
```


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1WebhookSubscriptionUuidResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.webhookSubscriptions.deleteV1WebhookSubscriptionUuid({
  webhookSubscriptionUuid: "veritatis",
}).then((res: DeleteV1WebhookSubscriptionUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1WebhookSubscriptionUuid

Returns the Webhook Subscription associated with the provided UUID.
scope: `webhook_subscriptions:read`
### Authentication
Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
```
Content-Type: application/json
Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
```


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1WebhookSubscriptionUuidResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { WebhookSubscriptionStatus, WebhookSubscriptionSubscriptionTypes } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.webhookSubscriptions.getV1WebhookSubscriptionUuid({
  webhookSubscriptionUuid: "vero",
}).then((res: GetV1WebhookSubscriptionUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1WebhookSubscriptionVerificationTokenUuid

Request that the webhook subscription `verification_token` be POSTed to the Subscription URL.
scope: `webhook_subscriptions:write`
### Authentication
Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
```
Content-Type: application/json
Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
```


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1WebhookSubscriptionVerificationTokenUuidResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.webhookSubscriptions.getV1WebhookSubscriptionVerificationTokenUuid({
  webhookSubscriptionUuid: "consectetur",
}).then((res: GetV1WebhookSubscriptionVerificationTokenUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getV1WebhookSubscriptions

Returns all webhook subscriptions associated with the provided Partner API token.
scope: `webhook_subscriptions:read`
### Authentication
Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
```
Content-Type: application/json
Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
```

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1WebhookSubscriptionsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { WebhookSubscriptionStatus, WebhookSubscriptionSubscriptionTypes } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.webhookSubscriptions.getV1WebhookSubscriptions().then((res: GetV1WebhookSubscriptionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postV1WebhookSubscription

Creates a Webhook Subscription to receive notifications when entities change

scope: `webhook_subscriptions:write`
### Authentication
Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
```
Content-Type: application/json
Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
```

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1WebhookSubscriptionRequestBodySubscriptionTypes,
  PostV1WebhookSubscriptionResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { WebhookSubscriptionStatus, WebhookSubscriptionSubscriptionTypes } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.webhookSubscriptions.postV1WebhookSubscription({
  subscriptionTypes: [
    PostV1WebhookSubscriptionRequestBodySubscriptionTypes.Company,
  ],
  url: "dolorem",
}).then((res: PostV1WebhookSubscriptionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putV1VerifyWebhookSubscriptionUuid

When a webhook subscription is created, a `verification_token` is POSTed to the provided webhook subscription URL. This `verify` endpoint needs to be called with `verification_token` before notifications will be sent to the subscriber.

Use the /v1/webhook_subscriptions/{webhook_subscription_uuid}/request_verification_token API to resend the `verification_token` to the Subscriber.

scope: `webhook_subscriptions:write`
### Authentication
Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
```
Content-Type: application/json
Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
```


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1VerifyWebhookSubscriptionUuidResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { WebhookSubscriptionStatus, WebhookSubscriptionSubscriptionTypes } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.webhookSubscriptions.putV1VerifyWebhookSubscriptionUuid({
  requestBody: {
    verificationToken: "ad",
  },
  webhookSubscriptionUuid: "qui",
}).then((res: PutV1VerifyWebhookSubscriptionUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putV1WebhookSubscriptionUuid

Updates the Webhook Subscription associated with the provided UUID.
scope: `webhook_subscriptions:write`
### Authentication
Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
```
Content-Type: application/json
Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
```


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1WebhookSubscriptionUuidRequestBodySubscriptionTypes,
  PutV1WebhookSubscriptionUuidResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { WebhookSubscriptionStatus, WebhookSubscriptionSubscriptionTypes } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.webhookSubscriptions.putV1WebhookSubscriptionUuid({
  requestBody: {
    subscriptionTypes: [
      PutV1WebhookSubscriptionUuidRequestBodySubscriptionTypes.Employee,
      PutV1WebhookSubscriptionUuidRequestBodySubscriptionTypes.Employee,
      PutV1WebhookSubscriptionUuidRequestBodySubscriptionTypes.Location,
    ],
  },
  webhookSubscriptionUuid: "libero",
}).then((res: PutV1WebhookSubscriptionUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
