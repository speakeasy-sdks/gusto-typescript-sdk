/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetV1CompaniesCompanyIdEarningTypesRequest extends SpeakeasyBase {
  /**
   * The UUID of the company
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

/**
 * Example response
 */
export class GetV1CompaniesCompanyIdEarningTypes200ApplicationJSON extends SpeakeasyBase {
  /**
   * The custom earning types for the company.
   */
  @SpeakeasyMetadata({ elemType: shared.EarningType })
  @Expose({ name: "custom" })
  @Type(() => shared.EarningType)
  custom?: shared.EarningType[];

  /**
   * The default earning types for the company.
   */
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

  /**
   * Example response
   */
  @SpeakeasyMetadata()
  getV1CompaniesCompanyIdEarningTypes200ApplicationJSONObject?: GetV1CompaniesCompanyIdEarningTypes200ApplicationJSON;
}
