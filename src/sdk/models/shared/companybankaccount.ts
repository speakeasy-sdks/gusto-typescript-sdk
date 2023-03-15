import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum CompanyBankAccountAccountTypeEnum {
  Checking = "Checking",
  Savings = "Savings",
}
export enum CompanyBankAccountPlaidStatusEnum {
  Connected = "connected",
  Disconnected = "disconnected",
}
export enum CompanyBankAccountVerificationStatusEnum {
  AwaitingDeposits = "awaiting_deposits",
  ReadyForVerification = "ready_for_verification",
  Verified = "verified",
}
export enum CompanyBankAccountVerificationTypeEnum {
  BankDeposits = "bank_deposits",
  Plaid = "plaid",
  PlaidExternal = "plaid_external",
}

// CompanyBankAccount
/**
 * The company bank account
 **/
export class CompanyBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "account_type" })
  accountType?: CompanyBankAccountAccountTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "balance_fetched_date" })
  balanceFetchedDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "hidden_account_number" })
  hiddenAccountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_cached_balance" })
  lastCachedBalance?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "plaid_status" })
  plaidStatus?: CompanyBankAccountPlaidStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "routing_number" })
  routingNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "verification_status" })
  verificationStatus?: CompanyBankAccountVerificationStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "verification_type" })
  verificationType?: CompanyBankAccountVerificationTypeEnum;
}
