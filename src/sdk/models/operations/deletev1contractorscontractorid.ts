import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class DeleteV1ContractorsContractorIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contractor_id" })
  contractorId: string;
}

export class DeleteV1ContractorsContractorIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV1ContractorsContractorIdPathParams;
}

export class DeleteV1ContractorsContractorIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}