import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum PostV1CompaniesCompanyIdBankAccountsRequestBodyAccountTypeEnum {
  Checking = "Checking",
  Savings = "Savings",
}

export class PostV1CompaniesCompanyIdBankAccountsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "account_number" })
  accountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "account_type" })
  accountType?: PostV1CompaniesCompanyIdBankAccountsRequestBodyAccountTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "routing_number" })
  routingNumber?: string;
}

export class PostV1CompaniesCompanyIdBankAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PostV1CompaniesCompanyIdBankAccountsRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

export class PostV1CompaniesCompanyIdBankAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyBankAccount?: shared.CompanyBankAccount;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
