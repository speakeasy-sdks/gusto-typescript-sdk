/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The payment speed
 */
export enum PutV1CompanyPaymentConfigsRequestBodyPaymentSpeed {
    TwoDay = "2-day",
    FourDay = "4-day",
}

export class PutV1CompanyPaymentConfigsRequestBody extends SpeakeasyBase {
    /**
     * Fast payment limit (only applicable to 2-day payroll). This limit is an aggregate of all fast payrolls amount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fast_payment_limit" })
    fastPaymentLimit: string;

    /**
     * The payment speed
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payment_speed" })
    paymentSpeed: PutV1CompanyPaymentConfigsRequestBodyPaymentSpeed;
}

export class PutV1CompanyPaymentConfigsRequest extends SpeakeasyBase {
    /**
     * The UUID of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
    companyUuid: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutV1CompanyPaymentConfigsRequestBody;
}

export class PutV1CompanyPaymentConfigsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    paymentConfigs?: shared.PaymentConfigs;

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
}
