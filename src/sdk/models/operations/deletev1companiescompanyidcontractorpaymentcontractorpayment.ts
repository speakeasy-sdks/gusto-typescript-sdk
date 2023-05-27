/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest extends SpeakeasyBase {
    /**
     * The UUID of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
    companyId: string;

    /**
     * The UUID of the contractor payment
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contractor_payment_id" })
    contractorPaymentId: string;
}

export class DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
