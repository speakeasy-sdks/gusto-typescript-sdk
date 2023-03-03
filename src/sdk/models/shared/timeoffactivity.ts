import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// TimeOffActivity
/** 
 * Representation of a Time Off Activity
**/
export class TimeOffActivity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "balance_change" })
  balanceChange?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "effective_time" })
  effectiveTime?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "event_description" })
  eventDescription?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "event_type" })
  eventType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "policy_name" })
  policyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "policy_uuid" })
  policyUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "time_off_type" })
  timeOffType?: string;
}