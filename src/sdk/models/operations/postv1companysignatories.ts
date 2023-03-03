import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PostV1CompanySignatoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;
}

// PostV1CompanySignatoriesRequestBodyHomeAddress
/** 
 * The signatory's home address
**/
export class PostV1CompanySignatoriesRequestBodyHomeAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city: string;

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

export class PostV1CompanySignatoriesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "birthday" })
  birthday: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "home_address" })
  @Type(() => PostV1CompanySignatoriesRequestBodyHomeAddress)
  homeAddress: PostV1CompanySignatoriesRequestBodyHomeAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "middle_initial" })
  middleInitial?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ssn" })
  ssn: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class PostV1CompanySignatoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1CompanySignatoriesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1CompanySignatoriesRequestBody;
}

export class PostV1CompanySignatoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  signatory?: shared.Signatory;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}