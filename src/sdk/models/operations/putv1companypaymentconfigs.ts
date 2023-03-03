import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PutV1CompanyPaymentConfigsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;
}
export enum PutV1CompanyPaymentConfigsRequestBodyPaymentSpeedEnum {
    TwoDay = "2-day",
    FourDay = "4-day"
}

export class PutV1CompanyPaymentConfigsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "fast_payment_limit" })
  fastPaymentLimit: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_speed" })
  paymentSpeed: PutV1CompanyPaymentConfigsRequestBodyPaymentSpeedEnum;
}

export class PutV1CompanyPaymentConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1CompanyPaymentConfigsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1CompanyPaymentConfigsRequestBody;
}

export class PutV1CompanyPaymentConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentConfigs?: shared.PaymentConfigs;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}