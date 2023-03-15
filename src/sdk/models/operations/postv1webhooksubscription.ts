import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum PostV1WebhookSubscriptionRequestBodySubscriptionTypesEnum {
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

export class PostV1WebhookSubscriptionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "subscription_types" })
  subscriptionTypes: PostV1WebhookSubscriptionRequestBodySubscriptionTypesEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;
}

export class PostV1WebhookSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1WebhookSubscriptionRequestBody;
}

export class PostV1WebhookSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

  @SpeakeasyMetadata()
  webhookSubscription?: shared.WebhookSubscription;
}
