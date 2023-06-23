/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1TaxLiabilitiesRequestBodyLiabilitySelections extends SpeakeasyBase {
    /**
     * The UUID of the last unpaid external payroll uuid. It should be null when the full amount of tax liability has been paid.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_unpaid_external_payroll_uuid" })
    lastUnpaidExternalPayrollUuid?: string;

    /**
     * The ID of the tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_id" })
    taxId?: number;

    /**
     * A selection of unpaid liability amount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unpaid_liability_amount" })
    unpaidLiabilityAmount?: number;
}

export class PutV1TaxLiabilitiesRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: PutV1TaxLiabilitiesRequestBodyLiabilitySelections })
    @Expose({ name: "liability_selections" })
    @Type(() => PutV1TaxLiabilitiesRequestBodyLiabilitySelections)
    liabilitySelections?: PutV1TaxLiabilitiesRequestBodyLiabilitySelections[];
}

export class PutV1TaxLiabilitiesRequest extends SpeakeasyBase {
    /**
     * The UUID of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
    companyUuid: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutV1TaxLiabilitiesRequestBody;
}

export class PutV1TaxLiabilitiesResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Example response
     */
    @SpeakeasyMetadata({ elemType: shared.TaxLiabilitiesSelections })
    taxLiabilitiesSelections?: shared.TaxLiabilitiesSelections[];

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
