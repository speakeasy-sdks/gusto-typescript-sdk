/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * Attributes related to federal tax details that can be updated via this endpoint include:
 */
export class PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody extends SpeakeasyBase {
  /**
   * The EIN of of the company
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ein" })
  ein?: string;

  /**
   * The form used by the company for federal tax filing. One of:
   *
   * @remarks
   * - 941 (Quarterly federal tax return)
   * - 944 (Annual federal tax return)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "filing_form" })
  filingForm?: string;

  /**
   * The legal name of the company
   */
  @SpeakeasyMetadata()
  @Expose({ name: "legal_name" })
  legalName?: string;

  /**
   * What type of tax entity the company is
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tax_payer_type" })
  taxPayerType?: string;

  /**
   * Whether this company should be taxed as an S-Corporation
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxable_as_scorp" })
  taxableAsScorp?: boolean;

  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1CompaniesCompanyIdFederalTaxDetailsRequest extends SpeakeasyBase {
  /**
   * Attributes related to federal tax details that can be updated via this endpoint include:
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody;

  /**
   * The UUID of the company
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

export class PutV1CompaniesCompanyIdFederalTaxDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Example response
   */
  @SpeakeasyMetadata()
  federalTaxDetails?: shared.FederalTaxDetails;

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
