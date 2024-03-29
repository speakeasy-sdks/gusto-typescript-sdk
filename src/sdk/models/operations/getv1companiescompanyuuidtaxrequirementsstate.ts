/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
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
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    taxRequirementsState?: shared.TaxRequirementsState;
}
