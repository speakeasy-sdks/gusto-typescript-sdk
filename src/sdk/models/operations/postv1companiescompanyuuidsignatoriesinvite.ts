import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PostV1CompaniesCompanyUuidSignatoriesInvitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;
}

export class PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;
}

export class PostV1CompaniesCompanyUuidSignatoriesInviteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1CompaniesCompanyUuidSignatoriesInvitePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody;
}

export class PostV1CompaniesCompanyUuidSignatoriesInviteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  signatory?: shared.Signatory;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}