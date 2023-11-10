/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetV1ContractorFormsRequest extends SpeakeasyBase {
    /**
     * The UUID of the contractor
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contractor_uuid" })
    contractorUuid: string;
}

export class Form extends SpeakeasyBase {
    /**
     * The contractor uuid
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contractor_uuid" })
    contractorUuid?: string;

    /**
     * The description of the form
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * If the form is in a draft state. E.g. End of year tax forms may be provided in a draft state prior to being finalized.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "draft" })
    draft?: boolean;

    /**
     * The type identifier of the form
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * A boolean flag that indicates whether the form needs signing or not. Note that this value will change after the form is signed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requires_signing" })
    requiresSigning?: boolean;

    /**
     * The title of the form
     */
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    /**
     * The UUID of the form
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;
}

export class GetV1ContractorFormsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

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
     * Example response
     */
    @SpeakeasyMetadata({ elemType: Form })
    classes?: Form[];
}
