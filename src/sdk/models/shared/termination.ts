import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// Termination
/**
 * The representation of a termination in Gusto.
 **/
export class Termination extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "cancelable" })
  cancelable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "effective_date" })
  effectiveDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "run_termination_payroll" })
  runTerminationPayroll?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}
