import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class EmployeeStateTaxAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "valid_from" })
  validFrom?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "valid_up_to" })
  validUpTo?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
