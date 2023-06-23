/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBodyEmployees extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "balance" })
    balance?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;
}

/**
 * A list of employee objects containing the employee uuid
 */
export class PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBodyEmployees,
    })
    @Expose({ name: "employees" })
    @Type(() => PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBodyEmployees)
    employees?: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBodyEmployees[];
}

export class PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest extends SpeakeasyBase {
    /**
     * A list of employee objects containing the employee uuid
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody;

    /**
     * The UUID of the company time off policy
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=time_off_policy_uuid" })
    timeOffPolicyUuid: string;
}

export class PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse extends SpeakeasyBase {
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
