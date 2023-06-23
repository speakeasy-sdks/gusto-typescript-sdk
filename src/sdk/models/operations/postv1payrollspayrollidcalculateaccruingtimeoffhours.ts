/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody extends SpeakeasyBase {
    /**
     * double overtime hours worked in this pay period
     */
    @SpeakeasyMetadata()
    @Expose({ name: "double_overtime_hours_worked" })
    doubleOvertimeHoursWorked?: number;

    /**
     * overtime hours worked in this pay period
     */
    @SpeakeasyMetadata()
    @Expose({ name: "overtime_hours_worked" })
    overtimeHoursWorked?: number;

    /**
     * paid time off hours used in this pay period
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pto_hours_used" })
    ptoHoursUsed?: number;

    /**
     * regular hours worked in this pay period
     */
    @SpeakeasyMetadata()
    @Expose({ name: "regular_hours_worked" })
    regularHoursWorked?: number;

    /**
     * sick hours used in this pay period
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sick_hours_used" })
    sickHoursUsed?: number;
}

export class PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest extends SpeakeasyBase {
    /**
     * The UUID of the employee
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
    employeeId: string;

    /**
     * The UUID of the payroll
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payroll_id" })
    payrollId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody;
}

export class PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse extends SpeakeasyBase {
    /**
     * Example response
     */
    @SpeakeasyMetadata({ elemType: shared.AccruingTimeOffHour })
    accruingTimeOffHours?: shared.AccruingTimeOffHour[];

    @SpeakeasyMetadata()
    contentType: string;

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
