/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The representation of an unprocessed termination pay period.
 */
export class AccruingTimeOffHour extends SpeakeasyBase {
  /**
   * Hours accrued during this pay period.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "hours" })
  hours?: string;

  /**
   * A unique identifier of the time off policy.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "time_off_policy_uuid" })
  timeOffPolicyUuid?: string;
}
