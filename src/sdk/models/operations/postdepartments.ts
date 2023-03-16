import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostDepartmentsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;
}

export class PostDepartmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PostDepartmentsRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_uuid",
  })
  companyUuid: string;
}

export class PostDepartmentsResponse extends SpeakeasyBase {
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
