import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1LocationsLocationIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;
}

export class GetV1LocationsLocationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1LocationsLocationIdPathParams;
}

export class GetV1LocationsLocationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  location?: shared.Location;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}