import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1CompaniesCompanyIdFederalTaxDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;
}

export class GetV1CompaniesCompanyIdFederalTaxDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  authorization: shared.SchemeAuthorization;
}

export class GetV1CompaniesCompanyIdFederalTaxDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompaniesCompanyIdFederalTaxDetailsPathParams;

  @SpeakeasyMetadata()
  security: GetV1CompaniesCompanyIdFederalTaxDetailsSecurity;
}

export class GetV1CompaniesCompanyIdFederalTaxDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  federalTaxDetails?: shared.FederalTaxDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}