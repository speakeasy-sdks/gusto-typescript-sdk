import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostV1CompanyFlowsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_uuid",
  })
  companyUuid: string;
}
export enum PostV1CompanyFlowsRequestBodyEntityTypeEnum {
  Company = "Company",
  Employee = "Employee",
}

export class PostV1CompanyFlowsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "entity_type" })
  entityType?: PostV1CompanyFlowsRequestBodyEntityTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "entity_uuid" })
  entityUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "flow_type" })
  flowType: string;
}

export class PostV1CompanyFlowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1CompanyFlowsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1CompanyFlowsRequestBody;
}

export class PostV1CompanyFlowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flow?: shared.Flow;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
