import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostV1JobsJobIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_id",
  })
  employeeId: string;
}

export class PostV1JobsJobIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hire_date" })
  hireDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "location_uuid" })
  locationUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;
}

export class PostV1JobsJobIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1JobsJobIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1JobsJobIdRequestBody;
}

export class PostV1JobsJobIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  job?: shared.Job;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
