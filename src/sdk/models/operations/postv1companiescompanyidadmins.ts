/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostV1CompaniesCompanyIdAdminsRequestBody extends SpeakeasyBase {
    /**
     * The email of the admin for Gusto's system. If the email matches an existing user, this will create an admin account for them.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * The first name of the admin.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName: string;

    /**
     * The last name of the admin.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName: string;
}

export class PostV1CompaniesCompanyIdAdminsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PostV1CompaniesCompanyIdAdminsRequestBody;

    /**
     * The UUID of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
    companyId: string;
}

export class PostV1CompaniesCompanyIdAdminsResponse extends SpeakeasyBase {
    /**
     * Example response
     */
    @SpeakeasyMetadata()
    admin?: shared.Admin;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

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
