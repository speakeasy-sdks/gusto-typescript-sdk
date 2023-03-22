/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Create a company location.
 */
export class PostV1CompaniesCompanyIdLocationsApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * Specify if this location is the company's filing address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "filing_address" })
  filingAddress?: boolean;

  /**
   * Specify if this location is the company's mailing address.
   */
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

export class PostV1CompaniesCompanyIdLocationsJsonRequest extends SpeakeasyBase {
  /**
   * Create a company location.
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PostV1CompaniesCompanyIdLocationsApplicationJSON;

  /**
   * The UUID of the company
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

export class PostV1CompaniesCompanyIdLocationsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Example response
   */
  @SpeakeasyMetadata()
  location?: shared.Location;

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
}
