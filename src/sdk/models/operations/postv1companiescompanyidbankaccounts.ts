/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The bank account type
 */
export enum PostV1CompaniesCompanyIdBankAccountsRequestBodyAccountTypeEnum {
  Checking = "Checking",
  Savings = "Savings",
}

export class PostV1CompaniesCompanyIdBankAccountsRequestBody extends SpeakeasyBase {
  /**
   * The bank account number
   */
  @SpeakeasyMetadata()
  @Expose({ name: "account_number" })
  accountNumber?: string;

  /**
   * The bank account type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "account_type" })
  accountType?: PostV1CompaniesCompanyIdBankAccountsRequestBodyAccountTypeEnum;

  /**
   * The bank routing number
   */
  @SpeakeasyMetadata()
  @Expose({ name: "routing_number" })
  routingNumber?: string;
}

export class PostV1CompaniesCompanyIdBankAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PostV1CompaniesCompanyIdBankAccountsRequestBody;

  /**
   * The UUID of the company
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

export class PostV1CompaniesCompanyIdBankAccountsResponse extends SpeakeasyBase {
  /**
   * Example response
   */
  @SpeakeasyMetadata()
  companyBankAccount?: shared.CompanyBankAccount;

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
}
