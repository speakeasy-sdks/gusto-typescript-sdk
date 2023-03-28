/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody extends SpeakeasyBase {
  /**
   * The user's email address on Gusto. You can retrieve the user's email via company's `/admins`, `/employees`, `/signatories`, and `/contractors` endpoints.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  /**
   * The user ID on your platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "external_user_id" })
  externalUserId: string;

  /**
   * The IP address of the user who viewed and accepted the Terms of Service.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ip_address" })
  ipAddress: string;
}

export class PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody;

  /**
   * The UUID of the company
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_uuid",
  })
  companyUuid: string;
}

/**
 * Example response
 */
export class PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfService200ApplicationJSON extends SpeakeasyBase {
  /**
   * Whether the latest terms have been accepted by the user.
   */
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

  /**
   * Unprocessable Entity
   *
   * @remarks
   *
   * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
   *
   */
  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

  /**
   * Example response
   */
  @SpeakeasyMetadata()
  postPartnerManagedCompaniesCompanyUuidAcceptTermsOfService200ApplicationJSONObject?: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfService200ApplicationJSON;
}
