/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PutV1VerifyWebhookSubscriptionUuidRequestBody extends SpeakeasyBase {
    /**
     * The token POSTed to the Subscription URL.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "verification_token" })
    verificationToken: string;
}

export class PutV1VerifyWebhookSubscriptionUuidRequest extends SpeakeasyBase {
    /**
     * The webhook subscription UUID.
     */
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=webhook_subscription_uuid",
    })
    webhookSubscriptionUuid: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutV1VerifyWebhookSubscriptionUuidRequestBody;
}

export class PutV1VerifyWebhookSubscriptionUuidResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Unprocessable Entity
     *
     * @remarks
     *
     * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
     *
     */
    @SpeakeasyMetadata()
    unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    webhookSubscription?: shared.WebhookSubscription;
}
