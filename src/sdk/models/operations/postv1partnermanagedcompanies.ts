/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostV1PartnerManagedCompaniesRequestBodyCompany extends SpeakeasyBase {
    /**
     * The employer identification number (EIN) of the company.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ein" })
    ein?: string;

    /**
     * The legal name of the company.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The name of the company.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trade_name" })
    tradeName?: string;
}

/**
 * Information for the user who will be the primary payroll administrator for the new company.
 */
export class PostV1PartnerManagedCompaniesRequestBodyUser extends SpeakeasyBase {
    /**
     * The email of the user who will be the primary payroll admin.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * The first name of the user who will be the primary payroll admin.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName: string;

    /**
     * The last name of the user who will be the primary payroll admin.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName: string;

    /**
     * The phone number of the user who will be the primary payroll admin.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;
}

export class PostV1PartnerManagedCompaniesRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    @Type(() => PostV1PartnerManagedCompaniesRequestBodyCompany)
    company: PostV1PartnerManagedCompaniesRequestBodyCompany;

    /**
     * Information for the user who will be the primary payroll administrator for the new company.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => PostV1PartnerManagedCompaniesRequestBodyUser)
    user: PostV1PartnerManagedCompaniesRequestBodyUser;
}

/**
 * Object returned when creating a partner managed company
 */
export class PostV1PartnerManagedCompanies200ApplicationJSON extends SpeakeasyBase {
    /**
     * Access token that can be used for OAuth access to the account. Access tokens expire 2 hours after they are issued.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "access_token" })
    accessToken?: string;

    /**
     * Gusto’s UUID for the company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company_uuid" })
    companyUuid?: string;

    /**
     * Refresh token that can be exchanged for a new access token.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "refresh_token" })
    refreshToken?: string;
}

export class PostV1PartnerManagedCompaniesResponse extends SpeakeasyBase {
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
     * OK
     */
    @SpeakeasyMetadata()
    postV1PartnerManagedCompanies200ApplicationJSONObject?: PostV1PartnerManagedCompanies200ApplicationJSON;
}
