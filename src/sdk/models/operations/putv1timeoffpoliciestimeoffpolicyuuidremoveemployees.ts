/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;
}

/**
 * A list of employee objects containing the employee uuid
 */
export class PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees })
    @Expose({ name: "employees" })
    @Type(() => PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees)
    employees?: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees[];
}

export class PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest extends SpeakeasyBase {
    /**
     * The UUID of the company time off policy
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=time_off_policy_uuid" })
    timeOffPolicyUuid: string;

    /**
     * A list of employee objects containing the employee uuid
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody;
}

export class PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse extends SpeakeasyBase {
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
    timeOffPolicy?: shared.TimeOffPolicy;

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
