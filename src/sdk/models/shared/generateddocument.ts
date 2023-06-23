/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Example response
 */
export class GeneratedDocument extends SpeakeasyBase {
    /**
     * The array of urls to access the documents.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "document_urls" })
    documentUrls?: string[];

    /**
     * A unique identifier of the Generated Document request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "request_uuid" })
    requestUuid?: string;

    /**
     * Current status of the Generated Document
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}
