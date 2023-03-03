import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1CompaniesCompanyUuidTaxRequirementsStatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=state" })
  state: string;
}

export class GetV1CompaniesCompanyUuidTaxRequirementsStateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scheduling" })
  scheduling?: boolean;
}

export class GetV1CompaniesCompanyUuidTaxRequirementsStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompaniesCompanyUuidTaxRequirementsStatePathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1CompaniesCompanyUuidTaxRequirementsStateQueryParams;
}

export class GetV1CompaniesCompanyUuidTaxRequirementsStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  taxRequirementsState?: shared.TaxRequirementsState;
}