import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class SupportedBenefit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "benefit_type" })
  benefitType?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "category" })
  category?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "healthcare" })
  healthcare?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "imputed" })
  imputed?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "posttax" })
  posttax?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "pretax" })
  pretax?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "retirement" })
  retirement?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "yearly_limit" })
  yearlyLimit?: boolean;
}