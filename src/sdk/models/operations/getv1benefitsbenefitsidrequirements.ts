import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1BenefitsBenefitsIdRequirementsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=benefit_id" })
  benefitId: string;
}

export class GetV1BenefitsBenefitsIdRequirementsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1BenefitsBenefitsIdRequirementsPathParams;
}

export class GetV1BenefitsBenefitsIdRequirementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  benefitTypeRequirements?: shared.BenefitTypeRequirements;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}