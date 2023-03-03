import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PostV1CompaniesCompanyIdLocationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;
}

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

export class PostV1CompaniesCompanyIdLocationsApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "filing_address" })
  filingAddress?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "mailing_address" })
  mailingAddress?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "phone_number" })
  phoneNumber: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_1" })
  street1: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_2" })
  street2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "zip" })
  zip: string;
}

export class PostV1CompaniesCompanyIdLocationsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: PostV1CompaniesCompanyIdLocationsApplicationJSON;
}

export class PostV1CompaniesCompanyIdLocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1CompaniesCompanyIdLocationsPathParams;

  @SpeakeasyMetadata()
  request?: PostV1CompaniesCompanyIdLocationsRequests;
}

export class PostV1CompaniesCompanyIdLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  location?: shared.Location;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}