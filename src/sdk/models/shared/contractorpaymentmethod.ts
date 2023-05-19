/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentMethodBankAccount } from "./paymentmethodbankaccount";
import { Expose, Type } from "class-transformer";

/**
 * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
 */
export enum ContractorPaymentMethodSplitBy {
  Amount = "Amount",
  Percentage = "Percentage",
}

/**
 * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
 */
export enum ContractorPaymentMethodType {
  DirectDeposit = "Direct Deposit",
  Check = "Check",
}

/**
 * Example response
 */
export class ContractorPaymentMethod extends SpeakeasyBase {
  /**
   * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "split_by" })
  splitBy?: ContractorPaymentMethodSplitBy;

  @SpeakeasyMetadata({ elemType: PaymentMethodBankAccount })
  @Expose({ name: "splits" })
  @Type(() => PaymentMethodBankAccount)
  splits?: PaymentMethodBankAccount[];

  /**
   * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: ContractorPaymentMethodType;

  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}
