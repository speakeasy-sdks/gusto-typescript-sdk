/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The representation of an external payroll with minimal information.
 */
export class ExternalPayrollBasic extends SpeakeasyBase {
    /**
     * External payroll's check date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "check_date" })
    checkDate?: string;

    /**
     * The UUID of the company.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company_uuid" })
    companyUuid?: string;

    /**
     * External payroll's pay period end date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payment_period_end_date" })
    paymentPeriodEndDate?: string;

    /**
     * External payroll's pay period start date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payment_period_start_date" })
    paymentPeriodStartDate?: string;

    /**
     * The UUID of the external payroll.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;
}
