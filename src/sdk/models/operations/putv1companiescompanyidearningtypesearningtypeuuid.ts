/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody extends SpeakeasyBase {
    /**
     * The name of the custom earning type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest extends SpeakeasyBase {
    /**
     * The UUID of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
    companyId: string;

    /**
     * The UUID of the earning type
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=earning_type_uuid" })
    earningTypeUuid: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody;
}

export class PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    earningType?: shared.EarningType;

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
