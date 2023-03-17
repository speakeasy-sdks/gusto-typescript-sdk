import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

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
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutV1CompanyIndustryRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

export class PutV1CompanyIndustryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  industry?: shared.Industry;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
