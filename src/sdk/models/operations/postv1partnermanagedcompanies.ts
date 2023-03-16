import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostV1PartnerManagedCompaniesRequestBodyCompany extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ein" })
  ein?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "trade_name" })
  tradeName?: string;
}

// PostV1PartnerManagedCompaniesRequestBodyUser
/**
 * Information for the user who will be the primary payroll administrator for the new company.
 **/
export class PostV1PartnerManagedCompaniesRequestBodyUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;
}

export class PostV1PartnerManagedCompaniesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company" })
  @Type(() => PostV1PartnerManagedCompaniesRequestBodyCompany)
  company: PostV1PartnerManagedCompaniesRequestBodyCompany;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  @Type(() => PostV1PartnerManagedCompaniesRequestBodyUser)
  user: PostV1PartnerManagedCompaniesRequestBodyUser;
}

// PostV1PartnerManagedCompanies200ApplicationJSON
/**
 * Object returned when creating a partner managed company
 **/
export class PostV1PartnerManagedCompanies200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "access_token" })
  accessToken?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "refresh_token" })
  refreshToken?: string;
}

export class PostV1PartnerManagedCompaniesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

  @SpeakeasyMetadata()
  postV1PartnerManagedCompanies200ApplicationJSONObject?: PostV1PartnerManagedCompanies200ApplicationJSON;
}
