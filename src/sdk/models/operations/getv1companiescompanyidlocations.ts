import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1CompaniesCompanyIdLocationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;
}

export class GetV1CompaniesCompanyIdLocationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per" })
  per?: number;
}

export class GetV1CompaniesCompanyIdLocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompaniesCompanyIdLocationsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1CompaniesCompanyIdLocationsQueryParams;
}

export class GetV1CompaniesCompanyIdLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Location })
  locations?: shared.Location[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}