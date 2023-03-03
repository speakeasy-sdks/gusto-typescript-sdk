import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaxRequirementMetadata } from "./taxrequirementmetadata";
import { Expose, Type } from "class-transformer";


export class TaxRequirementApplicableIf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: any;
}

export class TaxRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TaxRequirementApplicableIf })
  @Expose({ name: "applicable_if" })
  @Type(() => TaxRequirementApplicableIf)
  applicableIf?: TaxRequirementApplicableIf[];

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => TaxRequirementMetadata)
  metadata?: TaxRequirementMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}