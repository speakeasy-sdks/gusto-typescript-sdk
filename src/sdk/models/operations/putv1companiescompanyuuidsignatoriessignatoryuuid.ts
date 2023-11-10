/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    state?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "street_1" })
    street1?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "street_2" })
    street2?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "zip" })
    zip?: string;
}

export class PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "birthday" })
    birthday?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "home_address" })
    @Type(() => PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress)
    homeAddress?: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress;

    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "middle_initial" })
    middleInitial?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ssn" })
    ssn?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    /**
     * The current version of the object. See the versioning guide for information on how to use this field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest extends SpeakeasyBase {
    /**
     * The UUID of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
    companyUuid: string;

    /**
     * The UUID of the signatory
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=signatory_uuid" })
    signatoryUuid: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody;
}

export class PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    signatory?: shared.Signatory;

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
