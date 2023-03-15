import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// PaymentMethodBankAccount
/**
 * Representation of a bank account item
 **/
export class PaymentMethodBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hidden_account_number" })
  hiddenAccountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "priority" })
  priority?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "split_amount" })
  splitAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}
