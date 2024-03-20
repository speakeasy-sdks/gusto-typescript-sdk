/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostV1SandboxGenerateW2RequestBody extends SpeakeasyBase {
    /**
     * The employee UUID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employee_id" })
    employeeId: string;

    /**
     * Must be equal to or more recent than 2015. If not specified, defaults to the previous year.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "year" })
    year?: number;
}

/**
 * OK
 */
export class PostV1SandboxGenerateW2Form extends SpeakeasyBase {
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
     * The UUID of the employee
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employee_uuid" })
    employeeUuid?: string;

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

export class PostV1SandboxGenerateW2Response extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    form?: PostV1SandboxGenerateW2Form;

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
