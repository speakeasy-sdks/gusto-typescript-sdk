import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PostV1CompaniesCompanyIdPaySchedulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;
}
export enum PostV1CompaniesCompanyIdPaySchedulesRequestBodyFrequencyEnum {
    EveryWeek = "Every week",
    EveryOtherWeek = "Every other week",
    TwicePerMonth = "Twice per month",
    Monthly = "Monthly"
}

export class PostV1CompaniesCompanyIdPaySchedulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "anchor_end_of_pay_period" })
  anchorEndOfPayPeriod: string;

  @SpeakeasyMetadata()
  @Expose({ name: "anchor_pay_date" })
  anchorPayDate: string;

  @SpeakeasyMetadata()
  @Expose({ name: "day_1" })
  day1?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "day_2" })
  day2?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "frequency" })
  frequency: PostV1CompaniesCompanyIdPaySchedulesRequestBodyFrequencyEnum;
}

export class PostV1CompaniesCompanyIdPaySchedulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1CompaniesCompanyIdPaySchedulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1CompaniesCompanyIdPaySchedulesRequestBody;
}

export class PostV1CompaniesCompanyIdPaySchedulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paySchedule?: shared.PaySchedule;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}