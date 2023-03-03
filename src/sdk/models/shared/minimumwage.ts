import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


// MinimumWage
/** 
 * Representation of a Minimum Wage
**/
export class MinimumWage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "authority" })
  authority: string;

  @SpeakeasyMetadata()
  @Expose({ name: "effective_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  effectiveDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "notes" })
  notes?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid: string;

  @SpeakeasyMetadata()
  @Expose({ name: "wage" })
  wage: string;

  @SpeakeasyMetadata()
  @Expose({ name: "wage_type" })
  wageType: string;
}