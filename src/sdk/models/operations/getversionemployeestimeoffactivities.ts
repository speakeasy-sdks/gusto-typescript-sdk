import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetVersionEmployeesTimeOffActivitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_uuid",
  })
  employeeUuid: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=time_off_type",
  })
  timeOffType?: string;
}

export class GetVersionEmployeesTimeOffActivitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  timeOffActivity?: shared.TimeOffActivity;
}
