import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ContractorPayment } from "./contractorpayment";
import { Expose, Type } from "class-transformer";

export class ContractorPaymentSummaryByDatesContractorPayments extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "check_date" })
  checkDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contractor_uuid" })
  contractorUuid?: string;

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

// ContractorPaymentSummaryByDatesTotal
/**
 * The wage and reimbursement totals for all contractor payments within a given time period.
 **/
export class ContractorPaymentSummaryByDatesTotal extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "reimbursements" })
  reimbursements?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "wages" })
  wages?: string;
}

// ContractorPaymentSummaryByDates
/**
 * The representation of the summary of contractor payments for a given company in a given time period.
 **/
export class ContractorPaymentSummaryByDates extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: ContractorPaymentSummaryByDatesContractorPayments,
  })
  @Expose({ name: "contractor_payments" })
  @Type(() => ContractorPaymentSummaryByDatesContractorPayments)
  contractorPayments?: ContractorPaymentSummaryByDatesContractorPayments[];

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  @Type(() => ContractorPaymentSummaryByDatesTotal)
  total?: ContractorPaymentSummaryByDatesTotal;
}
