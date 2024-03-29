/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody extends SpeakeasyBase {
    /**
     * The type of check stock being printed. Check this [link](https://support.gusto.com/article/999877761000000/Pay-your-team-by-check) for more info on check types
     */
    @SpeakeasyMetadata()
    @Expose({ name: "printing_format" })
    printingFormat: string;

    /**
     * The starting check number for the checks being generated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "starting_check_number" })
    startingCheckNumber?: number;
}

export class PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest extends SpeakeasyBase {
    /**
     * The UUID of the payroll
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payroll_id" })
    payrollId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody;
}

export class PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    payrollCheck?: shared.PayrollCheck;

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
