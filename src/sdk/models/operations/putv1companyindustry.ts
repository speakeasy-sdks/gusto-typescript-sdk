import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PutV1CompanyIndustryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;
}

export class PutV1CompanyIndustryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "naics_code" })
  naicsCode: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sic_codes" })
  sicCodes: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class PutV1CompanyIndustryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1CompanyIndustryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1CompanyIndustryRequestBody;
}

export class PutV1CompanyIndustryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  industry?: shared.Industry;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}