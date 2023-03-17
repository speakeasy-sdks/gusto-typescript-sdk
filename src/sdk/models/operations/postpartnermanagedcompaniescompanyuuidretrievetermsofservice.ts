import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;
}

export class PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_uuid",
  })
  companyUuid: string;
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
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

  @SpeakeasyMetadata()
  postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService200ApplicationJSONObject?: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService200ApplicationJSON;
}
