import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class DeleteV1JobsJobIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job_id" })
  jobId: string;
}

export class DeleteV1JobsJobIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV1JobsJobIdPathParams;
}

export class DeleteV1JobsJobIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}