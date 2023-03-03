import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1CompanyPaymentConfigsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;
}

export class GetV1CompanyPaymentConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompanyPaymentConfigsPathParams;
}

export class GetV1CompanyPaymentConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentConfigs?: shared.PaymentConfigs;

  @SpeakeasyMetadata()
  statusCode: number;
}