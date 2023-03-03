import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PostV1ContractorsContractorUuidBankAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contractor_uuid" })
  contractorUuid: string;
}
export enum PostV1ContractorsContractorUuidBankAccountsRequestBodyAccountTypeEnum {
    Checking = "Checking",
    Savings = "Savings"
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
  @SpeakeasyMetadata()
  pathParams: PostV1ContractorsContractorUuidBankAccountsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1ContractorsContractorUuidBankAccountsRequestBody;
}

export class PostV1ContractorsContractorUuidBankAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  contractorBankAccount?: shared.ContractorBankAccount;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}