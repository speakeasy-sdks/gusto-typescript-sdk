/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetV1CompanyOnboardingStatusRequest extends SpeakeasyBase {
  /**
   * The UUID of the company
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_uuid",
  })
  companyUuid: string;
}

export class GetV1CompanyOnboardingStatusResponse extends SpeakeasyBase {
  /**
   * Example response
   */
  @SpeakeasyMetadata()
  companyOnboardingStatus?: shared.CompanyOnboardingStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
