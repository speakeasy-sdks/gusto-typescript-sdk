import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pay_schedule_id" })
  payScheduleId: string;
}

export class PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "auto_pilot" })
  autoPilot?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody;
}

export class PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paySchedule?: shared.PaySchedule;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}