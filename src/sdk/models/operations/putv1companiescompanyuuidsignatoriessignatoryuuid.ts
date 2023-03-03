import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=signatory_uuid" })
  signatoryUuid: string;
}

export class PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBodyHomeAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_1" })
  street1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_2" })
  street2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "zip" })
  zip?: string;
}

export class PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "birthday" })
  birthday?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "home_address" })
  @Type(() => PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBodyHomeAddress)
  homeAddress?: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBodyHomeAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "middle_initial" })
  middleInitial?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ssn" })
  ssn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}

export class PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody;
}

export class PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  signatory?: shared.Signatory;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}