import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum WebhookSubscriptionStatusEnum {
  Pending = "pending",
  Verified = "verified",
  Removed = "removed",
}
export enum WebhookSubscriptionSubscriptionTypesEnum {
  BankAccount = "BankAccount",
  Company = "Company",
  CompanyBenefit = "CompanyBenefit",
  Contractor = "Contractor",
  ContractorPayment = "ContractorPayment",
  Employee = "Employee",
  EmployeeBenefit = "EmployeeBenefit",
  EmployeeJobCompensation = "EmployeeJobCompensation",
  ExternalPayroll = "ExternalPayroll",
  Form = "Form",
  Location = "Location",
  Payroll = "Payroll",
  PaySchedule = "PaySchedule",
  Signatory = "Signatory",
}

// WebhookSubscription
/**
 * The representation of webhook subscription.
 **/
export class WebhookSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: WebhookSubscriptionStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subscription_types" })
  subscriptionTypes?: WebhookSubscriptionSubscriptionTypesEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}
