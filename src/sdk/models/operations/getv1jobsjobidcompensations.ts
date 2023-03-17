import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export enum GetV1JobsJobIdCompensationsIncludeEnum {
  AllCompensations = "all_compensations",
}

export class GetV1JobsJobIdCompensationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=include",
  })
  include?: GetV1JobsJobIdCompensationsIncludeEnum;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=job_id",
  })
  jobId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per" })
  per?: number;
}

export class GetV1JobsJobIdCompensationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Compensation })
  compensations?: shared.Compensation[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
