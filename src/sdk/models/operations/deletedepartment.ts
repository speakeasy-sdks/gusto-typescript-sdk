import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class DeleteDepartmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=department_uuid" })
  departmentUuid: string;
}

export class DeleteDepartmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDepartmentPathParams;
}

export class DeleteDepartmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}