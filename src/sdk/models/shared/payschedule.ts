/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The frequency that employees on this pay schedule are paid with Gusto.
 */
export enum PayScheduleFrequency {
  EveryWeek = "Every week",
  EveryOtherWeek = "Every other week",
  TwicePerMonth = "Twice per month",
  Monthly = "Monthly",
}

/**
 * The representation of a pay schedule.
 */
export class PaySchedule extends SpeakeasyBase {
  /**
   * The last date of the first pay period. This can be the same date as the anchor pay date.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "anchor_end_of_pay_period" })
  anchorEndOfPayPeriod?: string;

  /**
   * The first date that employees on this pay schedule are paid with Gusto.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "anchor_pay_date" })
  anchorPayDate?: string;

  /**
   * With Autopilot® enabled, payroll will run automatically one day before your payroll deadlines.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "auto_pilot" })
  autoPilot?: boolean;

  /**
   * An integer between 1 and 31 indicating the first day of the month that employees are paid. This field is only relevant for pay schedules with the “Twice per month” and “Monthly” frequencies. It will be null for pay schedules with other frequencies.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "day_1" })
  day1?: number;

  /**
   * An integer between 1 and 31 indicating the second day of the month that employees are paid. This field is the second pay date for pay schedules with the “Twice per month” frequency. It will be null for pay schedules with other frequencies.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "day_2" })
  day2?: number;

  /**
   * The frequency that employees on this pay schedule are paid with Gusto.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "frequency" })
  frequency?: PayScheduleFrequency;

  /**
   * Hourly when the pay schedule is for hourly employees. Salaried when the pay schedule is for salaried employees. It will be null when the pay schedule is for all employees.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The unique identifier of the pay schedule in Gusto.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}
