/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PutDepartmentsRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version: string;
}

export class PutDepartmentsRequest extends SpeakeasyBase {
    /**
     * The UUID of the department
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=department_uuid" })
    departmentUuid: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutDepartmentsRequestBody;
}

export class PutDepartmentsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Department Object Example
     */
    @SpeakeasyMetadata()
    department?: shared.Department;

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
