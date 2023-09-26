/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * Update a location
 */
export class PutV1LocationsLocationIdRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country?: string;

    /**
     * For a company location, specify if this location is the company's filing address. A company has a single filing address, so this designation will override any previous selection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "filing_address" })
    filingAddress?: boolean;

    /**
     * For a company location, specify if this location is the company's mailing address. A company has a single mailing address, so this designation will override any previous selection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mailing_address" })
    mailingAddress?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "phone_number" })
    phoneNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    state?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "street_1" })
    street1?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "street_2" })
    street2?: string;

    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version: string;

    @SpeakeasyMetadata()
    @Expose({ name: "zip" })
    zip?: string;
}

export class PutV1LocationsLocationIdRequest extends SpeakeasyBase {
    /**
     * The UUID of the location
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
    locationId: string;

    /**
     * Update a location
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutV1LocationsLocationIdRequestBody;
}

export class PutV1LocationsLocationIdResponse extends SpeakeasyBase {
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
