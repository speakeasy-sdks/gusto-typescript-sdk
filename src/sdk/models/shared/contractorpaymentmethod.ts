import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentMethodBankAccount } from "./paymentmethodbankaccount";
import { Expose, Type } from "class-transformer";

export enum ContractorPaymentMethodSplitByEnum {
  Amount = "Amount",
  Percentage = "Percentage",
}
export enum ContractorPaymentMethodTypeEnum {
  DirectDeposit = "Direct Deposit",
  Check = "Check",
}

export class ContractorPaymentMethod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "split_by" })
  splitBy?: ContractorPaymentMethodSplitByEnum;

  @SpeakeasyMetadata({ elemType: PaymentMethodBankAccount })
  @Expose({ name: "splits" })
  @Type(() => PaymentMethodBankAccount)
  splits?: PaymentMethodBankAccount[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: ContractorPaymentMethodTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}
