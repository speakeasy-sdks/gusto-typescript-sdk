/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PutV1CompanyFormSignRequestBody extends SpeakeasyBase {
    /**
     * whether you agree to sign electronically
     */
    @SpeakeasyMetadata()
    @Expose({ name: "agree" })
    agree: boolean;

    /**
     * The signature
     */
    @SpeakeasyMetadata()
    @Expose({ name: "signature_text" })
    signatureText: string;

    /**
     * The IP address of the signatory who signed the form.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "signed_by_ip_address" })
    signedByIpAddress: string;
}

export class PutV1CompanyFormSignRequest extends SpeakeasyBase {
    /**
     * The ID or UUID of the form
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=form_id" })
    formId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutV1CompanyFormSignRequestBody;
}

export class PutV1CompanyFormSignResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    form?: shared.Form;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

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
