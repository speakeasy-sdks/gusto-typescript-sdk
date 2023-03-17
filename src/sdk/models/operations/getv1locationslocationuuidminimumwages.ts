import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetV1LocationsLocationUuidMinimumWagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=effective_date",
  })
  effectiveDate?: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=location_uuid",
  })
  locationUuid: string;
}

export class GetV1LocationsLocationUuidMinimumWagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MinimumWage })
  minimumWages?: shared.MinimumWage[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
