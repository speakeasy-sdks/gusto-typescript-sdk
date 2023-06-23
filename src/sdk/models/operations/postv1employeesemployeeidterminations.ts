/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostV1EmployeesEmployeeIdTerminationsRequestBody extends SpeakeasyBase {
    /**
     * The employee's last day of work.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "effective_date" })
    effectiveDate: string;

    /**
     * If true, the employee should receive their final wages via an off-cycle payroll. If false, they should receive their final wages on their current pay schedule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "run_termination_payroll" })
    runTerminationPayroll?: boolean;
}

export class PostV1EmployeesEmployeeIdTerminationsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PostV1EmployeesEmployeeIdTerminationsRequestBody;

    /**
     * The UUID of the employee
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
    employeeId: string;
}

export class PostV1EmployeesEmployeeIdTerminationsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    termination?: shared.Termination;

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
