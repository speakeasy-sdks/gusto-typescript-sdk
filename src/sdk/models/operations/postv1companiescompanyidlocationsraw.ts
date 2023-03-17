import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class PostV1CompaniesCompanyIdLocationsApplicationXML extends SpeakeasyBase {
  @SpeakeasyMetadata()
  city: string;

  @SpeakeasyMetadata()
  country: string;

  @SpeakeasyMetadata()
  phoneNumber: string;

  @SpeakeasyMetadata()
  state: string;

  @SpeakeasyMetadata()
  street1: string;

  @SpeakeasyMetadata()
  street2: string;

  @SpeakeasyMetadata()
  zip: string;
}

export class PostV1CompaniesCompanyIdLocationsRawRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  requestBody?: Uint8Array;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

export class PostV1CompaniesCompanyIdLocationsRawResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  location?: shared.Location;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
