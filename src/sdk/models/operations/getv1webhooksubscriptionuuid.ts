import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1WebhookSubscriptionUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook_subscription_uuid" })
  webhookSubscriptionUuid: string;
}

export class GetV1WebhookSubscriptionUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1WebhookSubscriptionUuidPathParams;
}

export class GetV1WebhookSubscriptionUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  webhookSubscription?: shared.WebhookSubscription;
}