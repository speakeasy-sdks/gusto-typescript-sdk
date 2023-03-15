import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetV1CompaniesCompanyIdEarningTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

export class GetV1CompaniesCompanyIdEarningTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompaniesCompanyIdEarningTypesPathParams;
}

export class GetV1CompaniesCompanyIdEarningTypes200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.EarningType })
  @Expose({ name: "custom" })
  @Type(() => shared.EarningType)
  custom?: shared.EarningType[];

  @SpeakeasyMetadata({ elemType: shared.EarningType })
  @Expose({ name: "default" })
  @Type(() => shared.EarningType)
  default?: shared.EarningType[];
}

export class GetV1CompaniesCompanyIdEarningTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getV1CompaniesCompanyIdEarningTypes200ApplicationJSONObject?: GetV1CompaniesCompanyIdEarningTypes200ApplicationJSON;
}
