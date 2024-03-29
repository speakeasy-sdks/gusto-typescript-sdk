/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * Accrual method of the time off policy
 */
export enum PutTimeOffPoliciesTimeOffPolicyUuidRequestBodyAccrualMethod {
    Unlimited = "unlimited",
    PerPayPeriod = "per_pay_period",
    PerCalendarYear = "per_calendar_year",
    PerAnniversaryYear = "per_anniversary_year",
    PerHourWorked = "per_hour_worked",
    PerHourWorkedNoOvertime = "per_hour_worked_no_overtime",
    PerHourPaid = "per_hour_paid",
    PerHourPaidNoOvertime = "per_hour_paid_no_overtime",
}

/**
 * Can update any attributes of the time off policy except policy_type, is_active, complete & employees
 */
export class PutTimeOffPoliciesTimeOffPolicyUuidRequestBody extends SpeakeasyBase {
    /**
     * Accrual method of the time off policy
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accrual_method" })
    accrualMethod?: PutTimeOffPoliciesTimeOffPolicyUuidRequestBodyAccrualMethod;

    /**
     * The rate at which the time off hours will accrue for an employee on the policy. Represented as a float, e.g. "40.0".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accrual_rate" })
    accrualRate?: string;

    /**
     * The number of hours an employee has to work or be paid for to accrue the number of hours set in the accrual rate. Only used for hourly policies (per_hour_paid, per_hour_paid_no_overtime, per_hour_work, per_hour_worked_no_overtime). Represented as a float, e.g. "40.0".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accrual_rate_unit" })
    accrualRateUnit?: string;

    /**
     * Number of days before an employee on the policy will begin accruing time off hours
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accrual_waiting_period_days" })
    accrualWaitingPeriodDays?: number;

    /**
     * The max number of hours and employee can carryover from one year to the next
     */
    @SpeakeasyMetadata()
    @Expose({ name: "carryover_limit_hours" })
    carryoverLimitHours?: string;

    /**
     * The max number of hours and employee can accrue in a year
     */
    @SpeakeasyMetadata()
    @Expose({ name: "max_accrual_hours_per_year" })
    maxAccrualHoursPerYear?: string;

    /**
     * The max number of hours an employee can accrue
     */
    @SpeakeasyMetadata()
    @Expose({ name: "max_hours" })
    maxHours?: string;

    /**
     * Name of the time off policy
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Boolean representing if an employees accrued time off hours will be paid out on termination
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paid_out_on_termination" })
    paidOutOnTermination?: boolean;
}

export class PutTimeOffPoliciesTimeOffPolicyUuidRequest extends SpeakeasyBase {
    /**
     * The UUID of the company time off policy
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=time_off_policy_uuid" })
    timeOffPolicyUuid: string;

    /**
     * Can update any attributes of the time off policy except policy_type, is_active, complete & employees
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutTimeOffPoliciesTimeOffPolicyUuidRequestBody;
}

export class PutTimeOffPoliciesTimeOffPolicyUuidResponse extends SpeakeasyBase {
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
