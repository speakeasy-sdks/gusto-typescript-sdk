/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ContractorPayment } from "./contractorpayment";
import { Expose, Type } from "class-transformer";

export class ContractorPaymentSummaryContractorPayments extends SpeakeasyBase {
    /**
     * The UUID of the contractor.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contractor_uuid" })
    contractorUuid?: number;

    /**
     * The contractor’s payments within a given time period.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: ContractorPayment })
    @Expose({ name: "payments" })
    @Type(() => ContractorPayment)
    payments?: ContractorPayment[];

    /**
     * The total reimbursements for the contractor within a given time period.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reimbursement_total" })
    reimbursementTotal?: string;

    /**
     * The total wages for the contractor within a given time period.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "wage_total" })
    wageTotal?: string;
}

/**
 * The wage and reimbursement totals for all contractor payments within a given time period.
 */
export class ContractorPaymentSummaryTotal extends SpeakeasyBase {
    /**
     * The total reimbursements for contractor payments within a given time period.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reimbursements" })
    reimbursements?: string;

    /**
     * The total wages for contractor payments within a given time period.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "wages" })
    wages?: string;
}

/**
 * The representation of the summary of contractor payments for a given company in a given time period.
 */
export class ContractorPaymentSummary extends SpeakeasyBase {
    /**
     * The individual contractor payments, within a given time period, grouped by contractor.
     */
    @SpeakeasyMetadata({ elemType: ContractorPaymentSummaryContractorPayments })
    @Expose({ name: "contractor_payments" })
    @Type(() => ContractorPaymentSummaryContractorPayments)
    contractorPayments?: ContractorPaymentSummaryContractorPayments[];

    /**
     * The wage and reimbursement totals for all contractor payments within a given time period.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    @Type(() => ContractorPaymentSummaryTotal)
    total?: ContractorPaymentSummaryTotal;
}
