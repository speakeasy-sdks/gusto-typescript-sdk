import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ContractorPayment } from "./contractorpayment";
import { Expose, Type } from "class-transformer";

export class ContractorPaymentSummaryContractorPayments extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contractor_uuid" })
  contractorUuid?: number;

  @SpeakeasyMetadata({ elemType: ContractorPayment })
  @Expose({ name: "payments" })
  @Type(() => ContractorPayment)
  payments?: ContractorPayment[];

  @SpeakeasyMetadata()
  @Expose({ name: "reimbursement_total" })
  reimbursementTotal?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "wage_total" })
  wageTotal?: string;
}

// ContractorPaymentSummaryTotal
/**
 * The wage and reimbursement totals for all contractor payments within a given time period.
 **/
export class ContractorPaymentSummaryTotal extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "reimbursements" })
  reimbursements?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "wages" })
  wages?: string;
}

// ContractorPaymentSummary
/**
 * The representation of the summary of contractor payments for a given company in a given time period.
 **/
export class ContractorPaymentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ContractorPaymentSummaryContractorPayments })
  @Expose({ name: "contractor_payments" })
  @Type(() => ContractorPaymentSummaryContractorPayments)
  contractorPayments?: ContractorPaymentSummaryContractorPayments[];

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  @Type(() => ContractorPaymentSummaryTotal)
  total?: ContractorPaymentSummaryTotal;
}
