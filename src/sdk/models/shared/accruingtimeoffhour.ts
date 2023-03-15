import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// AccruingTimeOffHour
/**
 * The representation of an unprocessed termination pay period.
 **/
export class AccruingTimeOffHour extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hours" })
  hours?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "time_off_policy_uuid" })
  timeOffPolicyUuid?: string;
}
