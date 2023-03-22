/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest extends SpeakeasyBase {
  /**
   * The UUID of the company
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;

  /**
   * The UUID of the earning type
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=earning_type_uuid",
  })
  earningTypeUuid: string;
}

export class DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
