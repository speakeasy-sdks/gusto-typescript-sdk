import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PutDepartmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=department_uuid" })
  departmentUuid: string;
}

export class PutDepartmentsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutDepartmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDepartmentsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutDepartmentsRequestBody;
}

export class PutDepartmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  department?: shared.Department;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}