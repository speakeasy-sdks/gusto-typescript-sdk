/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * Create an employee.
 */
export class PostV1EmployeesRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date_of_birth" })
    dateOfBirth?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "middle_initial" })
    middleInitial?: string;

    /**
     * If true, employee is expected to self-onboard. If false, payroll admin is expected to enter in the employee's onboarding information
     */
    @SpeakeasyMetadata()
    @Expose({ name: "self_onboarding" })
    selfOnboarding?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "ssn" })
    ssn?: string;
}

export class PostV1EmployeesRequest extends SpeakeasyBase {
    /**
     * The UUID of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
    companyId: string;

    /**
     * Create an employee.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PostV1EmployeesRequestBody;
}

export class PostV1EmployeesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    employee?: shared.Employee;

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
