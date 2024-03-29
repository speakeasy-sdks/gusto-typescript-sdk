/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The contractor type.
 */
export enum PostV1CompaniesCompanyIdContractorsRequestBodyType {
    Individual = "Individual",
    Business = "Business",
}

/**
 * The contractor’s wage type.
 *
 * @remarks
 *
 */
export enum PostV1CompaniesCompanyIdContractorsRequestBodyWageType {
    Fixed = "Fixed",
    Hourly = "Hourly",
}

/**
 * Create an individual or business contractor.
 */
export class PostV1CompaniesCompanyIdContractorsRequestBody extends SpeakeasyBase {
    /**
     * The name of the contractor business. This attribute is required for `Business` contractors and will be ignored for `Individual` contractors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "business_name" })
    businessName?: string;

    /**
     * The employer identification number of the contractor business.
     *
     * @remarks
     * This attribute is optional for `Business` contractors and will be ignored for `Individual` contractors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ein" })
    ein?: string;

    /**
     * The contractor’s email address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * The boolean flag indicating whether Gusto will file a new hire report for the contractor.
     *
     * @remarks
     * This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "file_new_hire_report" })
    fileNewHireReport?: boolean;

    /**
     * The contractor’s first name.
     *
     * @remarks
     * This attribute is required for `Individual` contractors and will be ignored for `Business` contractors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName?: string;

    /**
     * The contractor’s hourly rate. This attribute is required if the wage_type is `Hourly`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hourly_rate" })
    hourlyRate?: string;

    /**
     * The status of the contractor.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive?: boolean;

    /**
     * The contractor’s last name.
     *
     * @remarks
     * This attribute is required for `Individual` contractors and will be ignored for `Business` contractors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName?: string;

    /**
     * The contractor’s middle initial.
     *
     * @remarks
     * This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "middle_initial" })
    middleInitial?: string;

    /**
     * Whether the contractor or the payroll admin will complete onboarding in Gusto.
     *
     * @remarks
     * Self-onboarding is recommended so that contractors receive Gusto accounts.
     * If self_onboarding is true, then email is required.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "self_onboarding" })
    selfOnboarding?: boolean;

    /**
     * This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors.
     *
     * @remarks
     * Social security number is needed to file the annual 1099 tax form.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ssn" })
    ssn?: string;

    /**
     * The day when the contractor will start working for the company.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    startDate: string;

    /**
     * The contractor type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: PostV1CompaniesCompanyIdContractorsRequestBodyType;

    /**
     * The contractor’s wage type.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "wage_type" })
    wageType: PostV1CompaniesCompanyIdContractorsRequestBodyWageType;

    /**
     * State where the contractor will be conducting the majority of their work for the company.
     *
     * @remarks
     * This value is used when generating the new hire report.
     * This attribute is required for `Individual` contractors if `file_new_hire_report` is true and will be ignored for `Business` contractors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "work_state" })
    workState?: string;
}

export class PostV1CompaniesCompanyIdContractorsRequest extends SpeakeasyBase {
    /**
     * The UUID of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
    companyId: string;

    /**
     * Create an individual or business contractor.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PostV1CompaniesCompanyIdContractorsRequestBody;
}

export class PostV1CompaniesCompanyIdContractorsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    contractor?: shared.Contractor;

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
