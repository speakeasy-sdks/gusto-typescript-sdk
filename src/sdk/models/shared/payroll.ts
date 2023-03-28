/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class PayrollEmployeeCompensationsBenefits extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company_contribution" })
  companyContribution?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_deduction" })
  employeeDeduction?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "imputed" })
  imputed?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PayrollEmployeeCompensationsDeductions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PayrollEmployeeCompensationsFixedCompensations extends SpeakeasyBase {
  /**
   * The amount of the compensation for the pay period.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  /**
   * The UUID of the job for the compensation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "job_uuid" })
  jobUuid?: string;

  /**
   * The name of the compensation. This also serves as the unique, immutable identifier for this compensation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PayrollEmployeeCompensationsHourlyCompensations extends SpeakeasyBase {
  /**
   * The amount multiplied by the base rate to calculate total compensation per hour worked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "compensation_multiplier" })
  compensationMultiplier?: number;

  /**
   * The number of hours to be compensated for this pay period.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "hours" })
  hours?: string;

  /**
   * The UUID of the job for the compensation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "job_uuid" })
  jobUuid?: string;

  /**
   * The name of the compensation. This also serves as the unique, immutable identifier for this compensation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PayrollEmployeeCompensationsPaidTimeOff extends SpeakeasyBase {
  /**
   * The outstanding hours paid upon termination. This field is only applicable for termination payrolls.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "final_payout_unused_hours_input" })
  finalPayoutUnusedHoursInput?: string;

  /**
   * The hours of this PTO taken during the pay period.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "hours" })
  hours?: string;

  /**
   * The name of the PTO. This also serves as the unique, immutable identifier for the PTO.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * The employee's compensation payment method.
 */
export enum PayrollEmployeeCompensationsPaymentMethodEnum {
  Check = "Check",
  DirectDeposit = "Direct Deposit",
}

export class PayrollEmployeeCompensationsTaxes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employer" })
  employer: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

export class PayrollEmployeeCompensations extends SpeakeasyBase {
  /**
   * An array of employee benefits for the pay period. Benefits are only included for processed payroll when the include parameter is present.
   */
  @SpeakeasyMetadata({ elemType: PayrollEmployeeCompensationsBenefits })
  @Expose({ name: "benefits" })
  @Type(() => PayrollEmployeeCompensationsBenefits)
  benefits?: PayrollEmployeeCompensationsBenefits[];

  /**
   * An array of employee deductions for the pay period. Deductions are only included for processed payroll when the include parameter is present.
   */
  @SpeakeasyMetadata({ elemType: PayrollEmployeeCompensationsDeductions })
  @Expose({ name: "deductions" })
  @Type(() => PayrollEmployeeCompensationsDeductions)
  deductions?: PayrollEmployeeCompensationsDeductions[];

  /**
   * The UUID of the employee.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: string;

  /**
   * This employee will be excluded from payroll calculation and will not be paid for the payroll. Cancelling a payroll would reset all employees' excluded back to false.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "excluded" })
  excluded?: boolean;

  /**
   * An array of fixed compensations for the employee. Fixed compensations include tips, bonuses, and one time reimbursements. If this payroll has been processed, only fixed compensations with a value greater than 0.00 are returned. For an unprocessed payroll, all active fixed compensations are returned.
   */
  @SpeakeasyMetadata({
    elemType: PayrollEmployeeCompensationsFixedCompensations,
  })
  @Expose({ name: "fixed_compensations" })
  @Type(() => PayrollEmployeeCompensationsFixedCompensations)
  fixedCompensations?: PayrollEmployeeCompensationsFixedCompensations[];

  /**
   * The employee's gross pay. This value is only available for processed payrolls.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "gross_pay" })
  grossPay?: string;

  /**
   * An array of hourly compensations for the employee. Hourly compensations include regular, overtime, and double overtime hours. If this payroll has been processed, only hourly compensations with a value greater than 0.00 are returned. For an unprocessed payroll, all active hourly compensations are returned.
   */
  @SpeakeasyMetadata({
    elemType: PayrollEmployeeCompensationsHourlyCompensations,
  })
  @Expose({ name: "hourly_compensations" })
  @Type(() => PayrollEmployeeCompensationsHourlyCompensations)
  hourlyCompensations?: PayrollEmployeeCompensationsHourlyCompensations[];

  /**
   * The employee's net pay. This value is only available for processed payrolls.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "net_pay" })
  netPay?: string;

  /**
   * An array of all paid time off the employee is eligible for this pay period.
   */
  @SpeakeasyMetadata({ elemType: PayrollEmployeeCompensationsPaidTimeOff })
  @Expose({ name: "paid_time_off" })
  @Type(() => PayrollEmployeeCompensationsPaidTimeOff)
  paidTimeOff?: PayrollEmployeeCompensationsPaidTimeOff[];

  /**
   * The employee's compensation payment method.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payment_method" })
  paymentMethod?: PayrollEmployeeCompensationsPaymentMethodEnum;

  /**
   * An array of employer and employee taxes for the pay period. Taxes are only included for processed payroll when the include parameter is present.
   */
  @SpeakeasyMetadata({ elemType: PayrollEmployeeCompensationsTaxes })
  @Expose({ name: "taxes" })
  @Type(() => PayrollEmployeeCompensationsTaxes)
  taxes?: PayrollEmployeeCompensationsTaxes[];
}

/**
 * The off-cycle reason
 */
export enum PayrollOffCycleReasonEnum {
  BenefitReversal = "Benefit reversal",
  Bonus = "Bonus",
  Correction = "Correction",
  DismissedEmployee = "Dismissed employee",
  HiredEmployee = "Hired employee",
  WageCorrection = "Wage correction",
  TaxReconciliation = "Tax Reconciliation",
}

export class PayrollPayPeriod extends SpeakeasyBase {
  /**
   * The start date, inclusive, of the pay period.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  endDate?: string;

  /**
   * The UUID of the pay schedule for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pay_schedule_uuid" })
  payScheduleUuid?: string;

  /**
   * The start date, inclusive, of the pay period.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  startDate?: string;
}

/**
 * Only applicable when a payroll is moved to four day processing instead of fast ach.
 */
export class PayrollPaymentSpeedChanged extends SpeakeasyBase {
  /**
   * Current check date.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "current_check_date" })
  currentCheckDate?: string;

  /**
   * Current check date.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "current_debit_date" })
  currentDebitDate?: string;

  /**
   * Original check date when fast ach applies.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "original_check_date" })
  originalCheckDate?: string;

  /**
   * Original debit date when fast ach applies.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "original_debit_date" })
  originalDebitDate?: number;

  /**
   * The reason why the payroll is moved to four day.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason?: string;
}

/**
 * Information about the payroll's status and expected dates
 */
export class PayrollPayrollStatusMeta extends SpeakeasyBase {
  /**
   * true if the payroll may be cancelled
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cancellable" })
  cancellable?: boolean;

  /**
   * The date an employee will be paid if the payroll is submitted now
   */
  @SpeakeasyMetadata()
  @Expose({ name: "expected_check_date" })
  expectedCheckDate?: string;

  /**
   * The time the employer's account will be debited if the payroll is submitted now
   */
  @SpeakeasyMetadata()
  @Expose({ name: "expected_debit_time" })
  expectedDebitTime?: string;

  /**
   * The normal check date for the associated pay period
   */
  @SpeakeasyMetadata()
  @Expose({ name: "initial_check_date" })
  initialCheckDate?: string;

  /**
   * Payroll must be submitted at or before this time to avoid late payroll
   */
  @SpeakeasyMetadata()
  @Expose({ name: "initial_debit_cutoff_time" })
  initialDebitCutoffTime?: string;

  /**
   * expected_check_date > initial_check_date
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payroll_late" })
  payrollLate?: boolean;
}

/**
 * The subtotals for the payroll.
 */
export class PayrollTotals extends SpeakeasyBase {
  /**
   * The total additional earnings amount for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "additional_earnings" })
  additionalEarnings?: string;

  /**
   * The total amount of company contributed benefits for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "benefits" })
  benefits?: string;

  /**
   * The total check amount for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "check_amount" })
  checkAmount?: string;

  /**
   * The total child support debit for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "child_support_debit" })
  childSupportDebit?: string;

  /**
   * The total company debit for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "company_debit" })
  companyDebit?: string;

  /**
   * The total amount of payroll taxes deferred for the payroll, such as allowed by the CARES act.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deferred_payroll_taxes" })
  deferredPayrollTaxes?: string;

  /**
   * The total amount of employee deducted benefits for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "employee_benefits_deductions" })
  employeeBenefitsDeductions?: string;

  /**
   * The total employee bonuses amount for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "employee_bonuses" })
  employeeBonuses?: string;

  /**
   * The total employee cash tips amount for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "employee_cash_tips" })
  employeeCashTips?: string;

  /**
   * The total employee commissions amount for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "employee_commissions" })
  employeeCommissions?: string;

  /**
   * The total employee paycheck tips amount for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "employee_paycheck_tips" })
  employeePaycheckTips?: string;

  /**
   * The total amount of employee paid taxes for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "employee_taxes" })
  employeeTaxes?: string;

  /**
   * The total amount of employer paid taxes for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "employer_taxes" })
  employerTaxes?: string;

  /**
   * The gross pay amount for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "gross_pay" })
  grossPay?: string;

  /**
   * The net pay amount for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "net_pay" })
  netPay?: string;

  /**
   * The total company net pay for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "net_pay_debit" })
  netPayDebit?: string;

  /**
   * The total owner's draw for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "owners_draw" })
  ownersDraw?: string;

  /**
   * The total reimbursement debit for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reimbursement_debit" })
  reimbursementDebit?: string;

  /**
   * The total reimbursements for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reimbursements" })
  reimbursements?: string;

  /**
   * The total tax debit for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tax_debit" })
  taxDebit?: string;
}

/**
 * The payment schedule tax rate the payroll is based on
 */
export enum PayrollWithholdingPayPeriodEnum {
  EveryWeek = "Every week",
  EveryOtherWeek = "Every other week",
  TwicePerMonth = "Twice per month",
  Monthly = "Monthly",
  Quarterly = "Quarterly",
  Semiannually = "Semiannually",
  Annually = "Annually",
}

/**
 * Example response
 */
export class Payroll extends SpeakeasyBase {
  /**
   * A timestamp of the last valid payroll calculation. Null is there isn't a valid calculation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "calculated_at" })
  calculatedAt?: string;

  /**
   * The date on which employees will be paid for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "check_date" })
  checkDate?: string;

  /**
   * The UUID of the company for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata({ elemType: PayrollEmployeeCompensations })
  @Expose({ name: "employee_compensations" })
  @Type(() => PayrollEmployeeCompensations)
  employeeCompensations?: PayrollEmployeeCompensations[];

  /**
   * Indicates whether the payroll is the final payroll for a terminated employee
   */
  @SpeakeasyMetadata()
  @Expose({ name: "final_termination_payroll" })
  finalTerminationPayroll?: boolean;

  /**
   * Enable taxes to be withheld at the IRS's required rate of 22% for federal income taxes. State income taxes will be taxed at the state's supplemental tax rate. Otherwise, we'll sum the entirety of the employee's wages and withhold taxes on the entire amount at the rate for regular wages.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fixed_withholding_rate" })
  fixedWithholdingRate?: boolean;

  /**
   * Indicates whether the payroll is an off-cycle payroll
   */
  @SpeakeasyMetadata()
  @Expose({ name: "off_cycle" })
  offCycle?: boolean;

  /**
   * The off-cycle reason
   */
  @SpeakeasyMetadata()
  @Expose({ name: "off_cycle_reason" })
  offCycleReason?: PayrollOffCycleReasonEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "pay_period" })
  @Type(() => PayrollPayPeriod)
  payPeriod?: PayrollPayPeriod;

  /**
   * Only applicable when a payroll is moved to four day processing instead of fast ach.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payment_speed_changed" })
  @Type(() => PayrollPaymentSpeedChanged)
  paymentSpeedChanged?: PayrollPaymentSpeedChanged;

  /**
   * The deadline for the payroll to be run in order for employees to be paid on time.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payroll_deadline" })
  payrollDeadline?: string;

  /**
   * Information about the payroll's status and expected dates
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payroll_status_meta" })
  @Type(() => PayrollPayrollStatusMeta)
  payrollStatusMeta?: PayrollPayrollStatusMeta;

  /**
   * The UUID of the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payroll_uuid" })
  payrollUuid?: string;

  /**
   * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. Additionally, a payroll is not guaranteed to be processed just because the payroll deadline has passed. Late payrolls are not uncommon. Conversely, users may choose to run payroll before the payroll deadline.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "processed" })
  processed?: boolean;

  /**
   * The date at which the payroll was processed. Null if the payroll isn't processed yet.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "processed_date" })
  processedDate?: string;

  /**
   * Block regular deductions and contributions for this payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "skip_regular_deductions" })
  skipRegularDeductions?: boolean;

  /**
   * The subtotals for the payroll.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totals" })
  @Type(() => PayrollTotals)
  totals?: PayrollTotals;

  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;

  /**
   * The payment schedule tax rate the payroll is based on
   */
  @SpeakeasyMetadata()
  @Expose({ name: "withholding_pay_period" })
  withholdingPayPeriod?: PayrollWithholdingPayPeriodEnum;
}
