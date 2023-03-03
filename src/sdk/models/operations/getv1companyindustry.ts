import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1CompanyIndustryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;
}

export class GetV1CompanyIndustryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompanyIndustryPathParams;
}

export class GetV1CompanyIndustryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  industry?: shared.Industry;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}