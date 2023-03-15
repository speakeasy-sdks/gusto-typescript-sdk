import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentMethodBankAccount } from "./paymentmethodbankaccount";
import { Expose, Type } from "class-transformer";

export enum EmployeePaymentMethodSplitByEnum {
  Amount = "Amount",
  Percentage = "Percentage",
}
export enum EmployeePaymentMethodTypeEnum {
  DirectDeposit = "Direct Deposit",
  Check = "Check",
}

export class EmployeePaymentMethod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "split_by" })
  splitBy?: EmployeePaymentMethodSplitByEnum;

  @SpeakeasyMetadata({ elemType: PaymentMethodBankAccount })
  @Expose({ name: "splits" })
  @Type(() => PaymentMethodBankAccount)
  splits?: PaymentMethodBankAccount[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: EmployeePaymentMethodTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}
