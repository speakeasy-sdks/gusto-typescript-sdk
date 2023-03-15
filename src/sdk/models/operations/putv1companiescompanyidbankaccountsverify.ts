import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1CompaniesCompanyIdBankAccountsVerifyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=bank_account_uuid",
  })
  bankAccountUuid: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

export class PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "deposit_1" })
  deposit1?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "deposit_2" })
  deposit2?: number;
}

export class PutV1CompaniesCompanyIdBankAccountsVerifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1CompaniesCompanyIdBankAccountsVerifyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody;
}

export class PutV1CompaniesCompanyIdBankAccountsVerifyResponse extends SpeakeasyBase {
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
