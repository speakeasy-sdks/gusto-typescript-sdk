import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PostV1CompaniesCompanyIdEarningTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;
}

export class PostV1CompaniesCompanyIdEarningTypesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

export class PostV1CompaniesCompanyIdEarningTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1CompaniesCompanyIdEarningTypesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1CompaniesCompanyIdEarningTypesRequestBody;
}

export class PostV1CompaniesCompanyIdEarningTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  earningType?: shared.EarningType;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}