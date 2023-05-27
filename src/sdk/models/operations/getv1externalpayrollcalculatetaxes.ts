/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
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
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata({ elemType: shared.ExternalPayrollTaxSuggestions })
    externalPayrollTaxSuggestions?: shared.ExternalPayrollTaxSuggestions[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
