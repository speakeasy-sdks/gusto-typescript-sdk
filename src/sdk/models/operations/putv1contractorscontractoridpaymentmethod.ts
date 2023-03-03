import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PutV1ContractorsContractorIdPaymentMethodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contractor_uuid" })
  contractorUuid: string;
}
export enum PutV1ContractorsContractorIdPaymentMethodRequestBodyTypeEnum {
    DirectDeposit = "Direct Deposit",
    Check = "Check"
}

export class PutV1ContractorsContractorIdPaymentMethodRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: PutV1ContractorsContractorIdPaymentMethodRequestBodyTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1ContractorsContractorIdPaymentMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1ContractorsContractorIdPaymentMethodPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1ContractorsContractorIdPaymentMethodRequestBody;
}

export class PutV1ContractorsContractorIdPaymentMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  contractorPaymentMethod?: shared.ContractorPaymentMethod;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}