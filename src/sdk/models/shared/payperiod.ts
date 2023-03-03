import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class PayPeriodEligibleEmployees extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "job_uuids" })
  jobUuids?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}

// PayPeriodPayroll
/** 
 * Information about the payroll for the pay period.
**/
export class PayPeriodPayroll extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "payroll_deadline" })
  payrollDeadline?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "processed" })
  processed?: boolean;
}

// PayPeriod
/** 
 * The representation of a pay period.
**/
export class PayPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PayPeriodEligibleEmployees })
  @Expose({ name: "eligible_employees" })
  @Type(() => PayPeriodEligibleEmployees)
  eligibleEmployees?: PayPeriodEligibleEmployees[];

  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  endDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pay_schedule_uuid" })
  payScheduleUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payroll" })
  @Type(() => PayPeriodPayroll)
  payroll?: PayPeriodPayroll;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  startDate?: string;
}