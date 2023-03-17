import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1JobsJobIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hire_date" })
  hireDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "location_uuid" })
  locationUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1JobsJobIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutV1JobsJobIdRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=job_id",
  })
  jobId: string;
}

export class PutV1JobsJobIdResponse extends SpeakeasyBase {
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
