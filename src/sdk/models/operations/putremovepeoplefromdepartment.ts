import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutRemovePeopleFromDepartmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contractors" })
  contractors?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "employees" })
  employees?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}

export class PutRemovePeopleFromDepartmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutRemovePeopleFromDepartmentRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=department_uuid",
  })
  departmentUuid: string;
}

export class PutRemovePeopleFromDepartmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  department?: shared.Department;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
