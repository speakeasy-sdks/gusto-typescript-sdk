import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1BenefitsBenefitIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=benefit_id" })
  benefitId: string;
}

export class GetV1BenefitsBenefitIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1BenefitsBenefitIdPathParams;
}

export class GetV1BenefitsBenefitIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supportedBenefit?: shared.SupportedBenefit;
}