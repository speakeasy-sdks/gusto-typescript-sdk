import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class DeleteV1WebhookSubscriptionUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook_subscription_uuid" })
  webhookSubscriptionUuid: string;
}

export class DeleteV1WebhookSubscriptionUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV1WebhookSubscriptionUuidPathParams;
}

export class DeleteV1WebhookSubscriptionUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}