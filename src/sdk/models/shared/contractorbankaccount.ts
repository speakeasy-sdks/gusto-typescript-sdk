/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Bank account type
 */
export enum ContractorBankAccountAccountTypeEnum {
  Checking = "Checking",
  Savings = "Savings",
}

/**
 * Example response
 */
export class ContractorBankAccount extends SpeakeasyBase {
  /**
   * Bank account type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "account_type" })
  accountType?: ContractorBankAccountAccountTypeEnum;

  /**
   * UUID of the employee
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contractor_uuid" })
  contractorUuid?: string;

  /**
   * Masked bank account number
   */
  @SpeakeasyMetadata()
  @Expose({ name: "hidden_account_number" })
  hiddenAccountNumber?: string;

  /**
   * Name for the bank account
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The bank account's routing number
   */
  @SpeakeasyMetadata()
  @Expose({ name: "routing_number" })
  routingNumber?: string;

  /**
   * UUID of the bank account
   */
  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}
