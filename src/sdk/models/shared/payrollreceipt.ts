import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class PayrollReceiptEmployeeCompensations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "child_support_garnishment" })
  childSupportGarnishment?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_first_name" })
  employeeFirstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_last_name" })
  employeeLastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "net_pay" })
  netPay?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_method" })
  paymentMethod?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "total_garnishments" })
  totalGarnishments?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "total_reimbursement" })
  totalReimbursement?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "total_tax" })
  totalTax?: string;
}

// PayrollReceiptLicensee
/** 
 * The licensed payroll processor
**/
export class PayrollReceiptLicensee extends SpeakeasyBase {
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

export class PayrollReceiptTaxes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PayrollReceiptTotals
/** 
 * The subtotals for the payroll.
**/
export class PayrollReceiptTotals extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "child_support_debit" })
  childSupportDebit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_debit" })
  companyDebit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "net_pay_debit" })
  netPayDebit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reimbursement_debit" })
  reimbursementDebit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_debit" })
  taxDebit?: string;
}

export class PayrollReceipt extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "debit_date" })
  debitDate?: string;

  @SpeakeasyMetadata({ elemType: PayrollReceiptEmployeeCompensations })
  @Expose({ name: "employee_compensations" })
  @Type(() => PayrollReceiptEmployeeCompensations)
  employeeCompensations?: PayrollReceiptEmployeeCompensations[];

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
  @Type(() => PayrollReceiptLicensee)
  licensee?: PayrollReceiptLicensee;

  @SpeakeasyMetadata()
  @Expose({ name: "name_of_recipient" })
  nameOfRecipient?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name_of_sender" })
  nameOfSender?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payroll_uuid" })
  payrollUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recipient_notice" })
  recipientNotice?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "right_to_refund" })
  rightToRefund?: string;

  @SpeakeasyMetadata({ elemType: PayrollReceiptTaxes })
  @Expose({ name: "taxes" })
  @Type(() => PayrollReceiptTaxes)
  taxes?: PayrollReceiptTaxes[];

  @SpeakeasyMetadata()
  @Expose({ name: "totals" })
  @Type(() => PayrollReceiptTotals)
  totals?: PayrollReceiptTotals;
}