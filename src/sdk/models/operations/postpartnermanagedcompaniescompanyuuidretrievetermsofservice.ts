import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;
}

export class PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;
}

export class PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody;
}

export class PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "latest_terms_accepted" })
  latestTermsAccepted?: boolean;
}

export class PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

  @SpeakeasyMetadata()
  postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService200ApplicationJSONObject?: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService200ApplicationJSON;
}