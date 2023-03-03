import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetV1CompaniesCompanyIdCustomFieldsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;
}

export class GetV1CompaniesCompanyIdCustomFieldsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per" })
  per?: number;
}

export class GetV1CompaniesCompanyIdCustomFieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompaniesCompanyIdCustomFieldsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1CompaniesCompanyIdCustomFieldsQueryParams;
}

export class GetV1CompaniesCompanyIdCustomFields200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CompanyCustomField })
  @Expose({ name: "custom_fields" })
  @Type(() => shared.CompanyCustomField)
  customFields?: shared.CompanyCustomField[];
}

export class GetV1CompaniesCompanyIdCustomFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getV1CompaniesCompanyIdCustomFields200ApplicationJSONObject?: GetV1CompaniesCompanyIdCustomFields200ApplicationJSON;
}