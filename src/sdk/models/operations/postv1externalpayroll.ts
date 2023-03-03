import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PostV1ExternalPayrollPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;
}

export class PostV1ExternalPayrollRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "check_date" })
  checkDate: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_period_end_date" })
  paymentPeriodEndDate: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_period_start_date" })
  paymentPeriodStartDate: string;
}

export class PostV1ExternalPayrollRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1ExternalPayrollPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1ExternalPayrollRequestBody;
}

export class PostV1ExternalPayrollResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  externalPayroll?: shared.ExternalPayroll;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}