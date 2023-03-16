import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ein" })
  ein?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "filing_form" })
  filingForm?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "legal_name" })
  legalName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_payer_type" })
  taxPayerType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxable_as_scorp" })
  taxableAsScorp?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1CompaniesCompanyIdFederalTaxDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

export class PutV1CompaniesCompanyIdFederalTaxDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  federalTaxDetails?: shared.FederalTaxDetails;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
