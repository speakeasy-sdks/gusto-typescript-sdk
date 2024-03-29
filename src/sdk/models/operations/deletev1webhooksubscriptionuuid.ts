/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteV1WebhookSubscriptionUuidRequest extends SpeakeasyBase {
    /**
     * The webhook subscription UUID.
     */
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=webhook_subscription_uuid",
    })
    webhookSubscriptionUuid: string;
}

export class DeleteV1WebhookSubscriptionUuidResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
