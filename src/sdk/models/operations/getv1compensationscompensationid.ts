import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1CompensationsCompensationIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=compensation_id" })
  compensationId: string;
}

export class GetV1CompensationsCompensationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompensationsCompensationIdPathParams;
}

export class GetV1CompensationsCompensationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  compensation?: shared.Compensation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}