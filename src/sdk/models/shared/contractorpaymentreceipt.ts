import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export class ContractorPaymentReceiptContractorPayments extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bonus" })
  bonus?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contractor_business_name" })
  contractorBusinessName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contractor_first_name" })
  contractorFirstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contractor_last_name" })
  contractorLastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contractor_type" })
  contractorType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contractor_uuid" })
  contractorUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_method" })
  paymentMethod?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reimbursement" })
  reimbursement?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "wage" })
  wage?: string;
}

// ContractorPaymentReceiptLicensee
/**
 * The licensed payroll processor
 **/
export class ContractorPaymentReceiptLicensee extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  address?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;
}

// ContractorPaymentReceiptTotals
/**
 * The subtotals for the contractor payment.
 **/
export class ContractorPaymentReceiptTotals extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company_debit" })
  companyDebit?: string;
}

export class ContractorPaymentReceipt extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contractor_payment_uuid" })
  contractorPaymentUuid?: string;

  @SpeakeasyMetadata({ elemType: ContractorPaymentReceiptContractorPayments })
  @Expose({ name: "contractor_payments" })
  @Type(() => ContractorPaymentReceiptContractorPayments)
  contractorPayments?: ContractorPaymentReceiptContractorPayments[];

  @SpeakeasyMetadata()
  @Expose({ name: "debit_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  debitDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "liability_of_licensee" })
  liabilityOfLicensee?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "license" })
  license?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "license_uri" })
  licenseUri?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "licensee" })
  @Type(() => ContractorPaymentReceiptLicensee)
  licensee?: ContractorPaymentReceiptLicensee;

  @SpeakeasyMetadata()
  @Expose({ name: "name_of_recipient" })
  nameOfRecipient?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name_of_sender" })
  nameOfSender?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "right_to_refund" })
  rightToRefund?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "totals" })
  @Type(() => ContractorPaymentReceiptTotals)
  totals?: ContractorPaymentReceiptTotals;
}
