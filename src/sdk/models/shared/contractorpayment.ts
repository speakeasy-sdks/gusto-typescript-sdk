import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ContractorPaymentPaymentMethodEnum {
    DirectDeposit = "Direct Deposit",
    Check = "Check",
    HistoricalPayment = "Historical Payment",
    CorrectionPayment = "Correction Payment"
}
export enum ContractorPaymentStatusEnum {
    Funded = "Funded",
    Unfunded = "Unfunded"
}
export enum ContractorPaymentWageTypeEnum {
    Hourly = "Hourly",
    Fixed = "Fixed"
}

// ContractorPayment
/** 
 * The representation of a single contractor payment.
**/
export class ContractorPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bonus" })
  bonus?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contractor_uuid" })
  contractorUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  date?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "hourly_rate" })
  hourlyRate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "hours" })
  hours?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "may_cancel" })
  mayCancel?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_method" })
  paymentMethod?: ContractorPaymentPaymentMethodEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "reimbursement" })
  reimbursement?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ContractorPaymentStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "wage" })
  wage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "wage_total" })
  wageTotal?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "wage_type" })
  wageType?: ContractorPaymentWageTypeEnum;
}