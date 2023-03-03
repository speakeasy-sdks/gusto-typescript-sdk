import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pay_schedule_id" })
  payScheduleId: string;
}

export class GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdPathParams;
}

export class GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paySchedule?: shared.PaySchedule;

  @SpeakeasyMetadata()
  statusCode: number;
}