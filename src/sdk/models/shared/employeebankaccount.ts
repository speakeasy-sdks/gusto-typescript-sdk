import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum EmployeeBankAccountAccountTypeEnum {
    Checking = "Checking",
    Savings = "Savings"
}

export class EmployeeBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "account_type" })
  accountType?: EmployeeBankAccountAccountTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: string;

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