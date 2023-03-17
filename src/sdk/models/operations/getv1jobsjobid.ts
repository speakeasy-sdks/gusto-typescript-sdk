import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export enum GetV1JobsJobIdIncludeEnum {
  AllCompensations = "all_compensations",
}

export class GetV1JobsJobIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=include",
  })
  include?: GetV1JobsJobIdIncludeEnum;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=job_id",
  })
  jobId: string;
}

export class GetV1JobsJobIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  job?: shared.Job;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
