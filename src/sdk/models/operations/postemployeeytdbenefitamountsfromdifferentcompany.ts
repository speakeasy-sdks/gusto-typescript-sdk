/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest extends SpeakeasyBase {
    /**
     * The UUID of the employee
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
    employeeId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    postEmployeeYtdBenefitAmountsFromDifferentCompany?: shared.PostEmployeeYtdBenefitAmountsFromDifferentCompany;
}

export class PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse extends SpeakeasyBase {
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
