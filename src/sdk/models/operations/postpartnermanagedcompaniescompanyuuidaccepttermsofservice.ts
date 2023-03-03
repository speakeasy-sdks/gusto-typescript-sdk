import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;
}

export class PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "external_user_id" })
  externalUserId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ip_address" })
  ipAddress: string;
}

export class PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody;
}

export class PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfService200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "latest_terms_accepted" })
  latestTermsAccepted?: boolean;
}

export class PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

  @SpeakeasyMetadata()
  postPartnerManagedCompaniesCompanyUuidAcceptTermsOfService200ApplicationJSONObject?: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfService200ApplicationJSON;
}