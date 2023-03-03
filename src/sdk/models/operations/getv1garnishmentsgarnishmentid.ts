import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1GarnishmentsGarnishmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=garnishment_id" })
  garnishmentId: string;
}

export class GetV1GarnishmentsGarnishmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1GarnishmentsGarnishmentIdPathParams;
}

export class GetV1GarnishmentsGarnishmentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  garnishment?: shared.Garnishment;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}