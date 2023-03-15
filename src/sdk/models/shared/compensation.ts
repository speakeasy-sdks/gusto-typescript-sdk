import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum CompensationFlsaStatusEnum {
  Exempt = "Exempt",
  SalariedNonexempt = "Salaried Nonexempt",
  Nonexempt = "Nonexempt",
  CommissionOnlyExempt = "Commission Only Exempt",
  CommissionOnlyNonexempt = "Commission Only Nonexempt",
  Owner = "Owner",
}
export enum CompensationPaymentUnitEnum {
  Hour = "Hour",
  Week = "Week",
  Month = "Month",
  Year = "Year",
  Paycheck = "Paycheck",
}

// Compensation
/**
 * The representation of compensation in Gusto.
 **/
export class Compensation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "adjust_for_minimum_wage" })
  adjustForMinimumWage?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "effective_date" })
  effectiveDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "flsa_status" })
  flsaStatus?: CompensationFlsaStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "job_uuid" })
  jobUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_unit" })
  paymentUnit?: CompensationPaymentUnitEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "rate" })
  rate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}
