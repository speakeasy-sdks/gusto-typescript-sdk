/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetV1ContractorsContractorUuidOnboardingStatusRequest extends SpeakeasyBase {
  /**
   * The UUID of the contractor
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=contractor_uuid",
  })
  contractorUuid: string;
}

export class GetV1ContractorsContractorUuidOnboardingStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Example response.
   */
  @SpeakeasyMetadata()
  contractorOnboardingStatus?: shared.ContractorOnboardingStatus;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
