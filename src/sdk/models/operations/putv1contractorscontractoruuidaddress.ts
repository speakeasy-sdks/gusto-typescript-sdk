import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1ContractorsContractorUuidAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=contractor_uuid",
  })
  contractorUuid: string;
}

export class PutV1ContractorsContractorUuidAddressRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_1" })
  street1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_2" })
  street2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;

  @SpeakeasyMetadata()
  @Expose({ name: "zip" })
  zip?: string;
}

export class PutV1ContractorsContractorUuidAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1ContractorsContractorUuidAddressPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1ContractorsContractorUuidAddressRequestBody;
}

export class PutV1ContractorsContractorUuidAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  contractorAddress?: shared.ContractorAddress1;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
