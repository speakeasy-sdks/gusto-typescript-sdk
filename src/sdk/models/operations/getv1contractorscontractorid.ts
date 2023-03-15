import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetV1ContractorsContractorIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=contractor_id",
  })
  contractorId: string;
}

export class GetV1ContractorsContractorIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1ContractorsContractorIdPathParams;
}

export class GetV1ContractorsContractorIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  contractor?: shared.Contractor;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
