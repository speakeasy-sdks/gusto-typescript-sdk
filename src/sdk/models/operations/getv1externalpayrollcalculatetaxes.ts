/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetV1ExternalPayrollCalculateTaxesRequest extends SpeakeasyBase {
    /**
     * The UUID of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
    companyUuid: string;

    /**
     * The UUID of the external payroll
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_payroll_id" })
    externalPayrollId: string;
}

export class GetV1ExternalPayrollCalculateTaxesResponse extends SpeakeasyBase {
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
     * Example response
     */
    @SpeakeasyMetadata({ elemType: shared.ExternalPayrollTaxSuggestions })
    classes?: shared.ExternalPayrollTaxSuggestions[];
}
