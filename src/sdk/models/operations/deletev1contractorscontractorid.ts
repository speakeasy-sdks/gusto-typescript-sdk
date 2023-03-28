/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteV1ContractorsContractorIdRequest extends SpeakeasyBase {
  /**
   * The ID or UUID of the contractor
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=contractor_id",
  })
  contractorId: string;
}

export class DeleteV1ContractorsContractorIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
