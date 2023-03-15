import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class TimeOffPolicyEmployees extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}

// TimeOffPolicy
/**
 * Representation of a Time Off Policy
 **/
export class TimeOffPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accrual_method" })
  accrualMethod: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accrual_rate" })
  accrualRate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accrual_rate_unit" })
  accrualRateUnit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accrual_waiting_period_days" })
  accrualWaitingPeriodDays?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "carryover_limit_hours" })
  carryoverLimitHours?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid: string;

  @SpeakeasyMetadata()
  @Expose({ name: "complete" })
  complete?: boolean;

  @SpeakeasyMetadata({ elemType: TimeOffPolicyEmployees })
  @Expose({ name: "employees" })
  @Type(() => TimeOffPolicyEmployees)
  employees: TimeOffPolicyEmployees[];

  @SpeakeasyMetadata()
  @Expose({ name: "is_active" })
  isActive: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "max_accrual_hours_per_year" })
  maxAccrualHoursPerYear?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "max_hours" })
  maxHours?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "paid_out_on_termination" })
  paidOutOnTermination?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "policy_type" })
  policyType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}
