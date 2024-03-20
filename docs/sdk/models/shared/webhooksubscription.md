# WebhookSubscription

The representation of webhook subscription.


## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `status`                                                                                    | [shared.WebhookSubscriptionStatus](../../../sdk/models/shared/webhooksubscriptionstatus.md) | :heavy_minus_sign:                                                                          | The status of the webhook subscription.                                                     |
| `subscriptionTypes`                                                                         | [shared.SubscriptionTypes](../../../sdk/models/shared/subscriptiontypes.md)[]               | :heavy_minus_sign:                                                                          | Receive updates for these types.                                                            |
| `url`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | The webhook subscriber URL. Updates will be POSTed to this URL.                             |
| `uuid`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | The UUID of the webhook subscription.                                                       |