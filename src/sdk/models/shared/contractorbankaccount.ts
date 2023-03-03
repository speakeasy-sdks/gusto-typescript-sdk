import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ContractorBankAccountAccountTypeEnum {
    Checking = "Checking",
    Savings = "Savings"
}

export class ContractorBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "account_type" })
  accountType?: ContractorBankAccountAccountTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "contractor_uuid" })
  contractorUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "hidden_account_number" })
  hiddenAccountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "routing_number" })
  routingNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}