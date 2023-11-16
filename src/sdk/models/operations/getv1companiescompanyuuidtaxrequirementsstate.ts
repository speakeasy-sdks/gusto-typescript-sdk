/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetV1CompaniesCompanyUuidTaxRequirementsStateRequest extends SpeakeasyBase {
    /**
     * The UUID of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
    companyUuid: string;

    /**
     * 2-letter US state abbreviation
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=state" })
    state: string;

    /**
     * When true, return "new" requirement sets with valid `effective_from` dates that are available to save new effective dated values.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scheduling" })
    scheduling?: boolean;
}

export class GetV1CompaniesCompanyUuidTaxRequirementsStateResponse extends SpeakeasyBase {
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
     * OK
     */
    @SpeakeasyMetadata()
    taxRequirementsState?: shared.TaxRequirementsState;
}
