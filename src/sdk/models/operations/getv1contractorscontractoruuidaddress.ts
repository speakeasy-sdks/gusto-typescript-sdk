import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetV1ContractorsContractorUuidAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=contractor_uuid",
  })
  contractorUuid: string;
}

export class GetV1ContractorsContractorUuidAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1ContractorsContractorUuidAddressPathParams;
}

export class GetV1ContractorsContractorUuidAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  contractorAddress?: shared.ContractorAddress1;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
