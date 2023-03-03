import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaxRequirement } from "./taxrequirement";
import { Expose, Type } from "class-transformer";


export class TaxRequirementSet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "effective_from" })
  effectiveFrom?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label?: string;

  @SpeakeasyMetadata({ elemType: TaxRequirement })
  @Expose({ name: "requirements" })
  @Type(() => TaxRequirement)
  requirements?: TaxRequirement[];

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;
}