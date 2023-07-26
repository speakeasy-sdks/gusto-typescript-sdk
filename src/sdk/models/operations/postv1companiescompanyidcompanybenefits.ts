/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostV1CompaniesCompanyIdCompanyBenefitsRequestBody extends SpeakeasyBase {
    /**
     * Whether this benefit is active for employee participation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "active" })
    active?: boolean;

    /**
     * The ID of the benefit to which the company benefit belongs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "benefit_type" })
    benefitType?: number;

    /**
     * The description of the company benefit.For example, a company may offer multiple benefits with an ID of 1 (for Medical Insurance). The description would show something more specific like “Kaiser Permanente” or “Blue Cross/ Blue Shield”.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * Whether the employer is subject to file W-2 forms for an employee on leave. Only applicable to third party sick pay benefits.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "responsible_for_employee_w2" })
    responsibleForEmployeeW2?: boolean;

    /**
     * Whether the employer is subject to pay employer taxes when an employee is on leave. Only applicable to third party sick pay benefits.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "responsible_for_employer_taxes" })
    responsibleForEmployerTaxes?: boolean;
}

export class PostV1CompaniesCompanyIdCompanyBenefitsRequest extends SpeakeasyBase {
    /**
     * The UUID of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
    companyId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PostV1CompaniesCompanyIdCompanyBenefitsRequestBody;
}

export class PostV1CompaniesCompanyIdCompanyBenefitsResponse extends SpeakeasyBase {
    /**
     * Example response
     */
    @SpeakeasyMetadata()
    companyBenefit?: shared.CompanyBenefit;

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
