/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export enum PostV1ContractorsContractorUuidBankAccountsRequestBodyAccountTypeEnum {
  Checking = "Checking",
  Savings = "Savings",
}

export class PostV1ContractorsContractorUuidBankAccountsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "account_number" })
  accountNumber: string;

  @SpeakeasyMetadata()
  @Expose({ name: "account_type" })
  accountType: PostV1ContractorsContractorUuidBankAccountsRequestBodyAccountTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "routing_number" })
  routingNumber: string;
}

export class PostV1ContractorsContractorUuidBankAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PostV1ContractorsContractorUuidBankAccountsRequestBody;

  /**
   * The UUID of the contractor
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=contractor_uuid",
  })
  contractorUuid: string;
}

export class PostV1ContractorsContractorUuidBankAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Example response
   */
  @SpeakeasyMetadata()
  contractorBankAccount?: shared.ContractorBankAccount;

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
