/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The payment method.
 */
export enum ContractorPaymentPaymentMethod {
    DirectDeposit = "Direct Deposit",
    Check = "Check",
    HistoricalPayment = "Historical Payment",
    CorrectionPayment = "Correction Payment",
}

/**
 * Contractor payment status
 */
export enum ContractorPaymentStatus {
    Funded = "Funded",
    Unfunded = "Unfunded",
}

/**
 * The wage type for the payment.
 */
export enum ContractorPaymentWageType {
    Hourly = "Hourly",
    Fixed = "Fixed",
}

/**
 * The representation of a single contractor payment.
 */
export class ContractorPayment extends SpeakeasyBase {
    /**
     * The bonus amount in the payment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bonus" })
    bonus?: string;

    /**
     * The UUID of the contractor.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contractor_uuid" })
    contractorUuid?: string;

    /**
     * The payment date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    date?: string;

    /**
     * The rate per hour worked for the payment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hourly_rate" })
    hourlyRate?: string;

    /**
     * The number of hours worked for the payment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hours" })
    hours?: string;

    /**
     * Determine if the contractor payment can be cancelled.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "may_cancel" })
    mayCancel?: boolean;

    /**
     * The payment method.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payment_method" })
    paymentMethod?: ContractorPaymentPaymentMethod;

    /**
     * The reimbursement amount in the payment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reimbursement" })
    reimbursement?: string;

    /**
     * Contractor payment status
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: ContractorPaymentStatus;

    /**
     * The unique identifier of the contractor payment in Gusto.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;

    /**
     * The fixed wage of the payment, regardless of hours worked.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "wage" })
    wage?: string;

    /**
     * (hours * hourly_rate) + wage + bonus
     */
    @SpeakeasyMetadata()
    @Expose({ name: "wage_total" })
    wageTotal?: string;

    /**
     * The wage type for the payment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "wage_type" })
    wageType?: ContractorPaymentWageType;
}
