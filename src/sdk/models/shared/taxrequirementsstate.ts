import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaxRequirementSet } from "./taxrequirementset";
import { Expose, Type } from "class-transformer";


export class TaxRequirementsState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata({ elemType: TaxRequirementSet })
  @Expose({ name: "requirement_sets" })
  @Type(() => TaxRequirementSet)
  requirementSets?: TaxRequirementSet[];

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;
}