/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostV1ProvisionRequestBodyCompanyAddresses extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  /**
   * Whether or not this is a primary address for the company. If set to true, the address will be used as the mailing and filing address for the company and will be added as a work location. If set to false or not included, the address will only be added as a work location for the company. If multiple addresses are included, only one should be marked as primary.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "is_primary" })
  isPrimary?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

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

export class PostV1ProvisionRequestBodyCompany extends SpeakeasyBase {
  /**
   * The locations for the company. This includes mailing, work, and filing addresses.
   */
  @SpeakeasyMetadata({ elemType: PostV1ProvisionRequestBodyCompanyAddresses })
  @Expose({ name: "addresses" })
  @Type(() => PostV1ProvisionRequestBodyCompanyAddresses)
  addresses?: PostV1ProvisionRequestBodyCompanyAddresses[];

  /**
   * The employer identification number (EIN) of the company.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ein" })
  ein?: string;

  /**
   * The legal name of the company.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * The number of employees in the company.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "number_employees" })
  numberEmployees?: number;

  /**
   * The states in which the company operates. States should be included by their two letter code, i.e. NY for New York.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "states" })
  states?: string[];

  /**
   * The name of the company.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "trade_name" })
  tradeName?: string;
}

/**
 * Information for the user who will be the primary payroll administrator for the new company.
 */
export class PostV1ProvisionRequestBodyUser extends SpeakeasyBase {
  /**
   * The email of the user who will be the primary payroll admin.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  /**
   * The first name of the user who will be the primary payroll admin.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName: string;

  /**
   * The last name of the user who will be the primary payroll admin.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName: string;

  /**
   * The phone number of the user who will be the primary payroll admin.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;
}

export class PostV1ProvisionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company" })
  @Type(() => PostV1ProvisionRequestBodyCompany)
  company: PostV1ProvisionRequestBodyCompany;

  /**
   * Information for the user who will be the primary payroll administrator for the new company.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  @Type(() => PostV1ProvisionRequestBodyUser)
  user: PostV1ProvisionRequestBodyUser;
}

/**
 * OK
 */
export class PostV1Provision200ApplicationJSON extends SpeakeasyBase {
  /**
   * A URL where the user should be redirected to complete their account setup inside of Gusto.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "account_claim_url" })
  accountClaimUrl?: string;
}

export class PostV1ProvisionResponse extends SpeakeasyBase {
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
   * OK
   */
  @SpeakeasyMetadata()
  postV1Provision200ApplicationJSONObject?: PostV1Provision200ApplicationJSON;
}
