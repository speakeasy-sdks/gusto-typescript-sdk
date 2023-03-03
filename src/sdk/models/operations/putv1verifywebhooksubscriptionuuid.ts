import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PutV1VerifyWebhookSubscriptionUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook_subscription_uuid" })
  webhookSubscriptionUuid: string;
}

export class PutV1VerifyWebhookSubscriptionUuidRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "verification_token" })
  verificationToken: string;
}

export class PutV1VerifyWebhookSubscriptionUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1VerifyWebhookSubscriptionUuidPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1VerifyWebhookSubscriptionUuidRequestBody;
}

export class PutV1VerifyWebhookSubscriptionUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

  @SpeakeasyMetadata()
  webhookSubscription?: shared.WebhookSubscription;
}