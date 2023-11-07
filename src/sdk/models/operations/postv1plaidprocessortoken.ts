/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The owner type of the bank account
 */
export enum OwnerType {
    Company = "Company",
}

export class PostV1PlaidProcessorTokenRequestBody extends SpeakeasyBase {
    /**
     * The owner uuid of the bank account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "owner_id" })
    ownerId: string;

    /**
     * The owner type of the bank account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "owner_type" })
    ownerType: OwnerType;

    /**
     * The Plaid processor token
     */
    @SpeakeasyMetadata()
    @Expose({ name: "processor_token" })
    processorToken: string;
}

export class PostV1PlaidProcessorTokenResponse extends SpeakeasyBase {
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
     * A JSON object containing bank information
     */
    @SpeakeasyMetadata()
    oneOf?: any;
}
