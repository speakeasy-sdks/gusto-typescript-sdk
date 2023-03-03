import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PutV1WebhookSubscriptionUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook_subscription_uuid" })
  webhookSubscriptionUuid: string;
}
export enum PutV1WebhookSubscriptionUuidRequestBodySubscriptionTypesEnum {
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
    Signatory = "Signatory"
}

export class PutV1WebhookSubscriptionUuidRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "subscription_types" })
  subscriptionTypes: PutV1WebhookSubscriptionUuidRequestBodySubscriptionTypesEnum[];
}

export class PutV1WebhookSubscriptionUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1WebhookSubscriptionUuidPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1WebhookSubscriptionUuidRequestBody;
}

export class PutV1WebhookSubscriptionUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

  @SpeakeasyMetadata()
  webhookSubscription?: shared.WebhookSubscription;
}