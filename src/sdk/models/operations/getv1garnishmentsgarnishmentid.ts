/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetV1GarnishmentsGarnishmentIdRequest extends SpeakeasyBase {
    /**
     * The UUID of the garnishment
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=garnishment_id" })
    garnishmentId: string;
}

export class GetV1GarnishmentsGarnishmentIdResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    garnishment?: shared.Garnishment;

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
}
