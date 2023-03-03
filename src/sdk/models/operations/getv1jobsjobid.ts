import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1JobsJobIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job_id" })
  jobId: string;
}
export enum GetV1JobsJobIdIncludeEnum {
    AllCompensations = "all_compensations"
}

export class GetV1JobsJobIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: GetV1JobsJobIdIncludeEnum;
}

export class GetV1JobsJobIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1JobsJobIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1JobsJobIdQueryParams;
}

export class GetV1JobsJobIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  job?: shared.Job;

  @SpeakeasyMetadata()
  statusCode: number;
}