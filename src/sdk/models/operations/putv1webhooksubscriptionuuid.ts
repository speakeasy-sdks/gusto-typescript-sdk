/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export enum PutV1WebhookSubscriptionUuidSubscriptionTypes {
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

export class PutV1WebhookSubscriptionUuidRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "subscription_types" })
    subscriptionTypes: PutV1WebhookSubscriptionUuidSubscriptionTypes[];
}

export class PutV1WebhookSubscriptionUuidRequest extends SpeakeasyBase {
    /**
     * The webhook subscription UUID.
     */
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=webhook_subscription_uuid",
    })
    webhookSubscriptionUuid: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutV1WebhookSubscriptionUuidRequestBody;
}

export class PutV1WebhookSubscriptionUuidResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Unprocessable Entity
     *
     * @remarks
     *
     * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
     *
     */
    @SpeakeasyMetadata()
    unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    webhookSubscription?: shared.WebhookSubscription;
}
