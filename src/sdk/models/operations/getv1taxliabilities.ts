import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1TaxLiabilitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;
}

export class GetV1TaxLiabilitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1TaxLiabilitiesPathParams;
}

export class GetV1TaxLiabilitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata({ elemType: shared.TaxLiabilitiesSelections })
  taxLiabilitiesSelections?: shared.TaxLiabilitiesSelections[];
}