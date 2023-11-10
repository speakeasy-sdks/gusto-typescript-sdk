/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class PostV1CompaniesCompanyIdLocationsRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    city: string;

    @SpeakeasyMetadata()
    country: string;

    @SpeakeasyMetadata()
    phoneNumber: string;

    @SpeakeasyMetadata()
    state: string;

    @SpeakeasyMetadata()
    street1: string;

    @SpeakeasyMetadata()
    street2: string;

    @SpeakeasyMetadata()
    zip: string;
}

export class PostV1CompaniesCompanyIdLocationsRawRequest extends SpeakeasyBase {
    /**
     * The UUID of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
    companyId: string;

    /**
     * Create a company location.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
    requestBody?: Uint8Array;
}

export class PostV1CompaniesCompanyIdLocationsRawResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    location?: shared.Location;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
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
