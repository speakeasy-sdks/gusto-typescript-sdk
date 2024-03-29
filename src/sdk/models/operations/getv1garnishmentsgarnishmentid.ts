/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetV1GarnishmentsGarnishmentIdRequest extends SpeakeasyBase {
    /**
     * The UUID of the garnishment
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=garnishment_id" })
    garnishmentId: string;
}

export class GetV1GarnishmentsGarnishmentIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    garnishment?: shared.Garnishment;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
