import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum PayScheduleFrequencyEnum {
  EveryWeek = "Every week",
  EveryOtherWeek = "Every other week",
  TwicePerMonth = "Twice per month",
  Monthly = "Monthly",
}

// PaySchedule
/**
 * The representation of a pay schedule.
 **/
export class PaySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "anchor_end_of_pay_period" })
  anchorEndOfPayPeriod?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "anchor_pay_date" })
  anchorPayDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "auto_pilot" })
  autoPilot?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "day_1" })
  day1?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "day_2" })
  day2?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "frequency" })
  frequency?: PayScheduleFrequencyEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}
