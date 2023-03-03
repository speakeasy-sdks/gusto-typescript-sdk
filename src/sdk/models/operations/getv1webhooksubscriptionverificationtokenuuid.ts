import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class GetV1WebhookSubscriptionVerificationTokenUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook_subscription_uuid" })
  webhookSubscriptionUuid: string;
}

export class GetV1WebhookSubscriptionVerificationTokenUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1WebhookSubscriptionVerificationTokenUuidPathParams;
}

export class GetV1WebhookSubscriptionVerificationTokenUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}