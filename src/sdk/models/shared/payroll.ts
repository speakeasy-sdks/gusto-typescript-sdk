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
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "job_uuid" })
  jobUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PayrollEmployeeCompensationsHourlyCompensations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "compensation_multiplier" })
  compensationMultiplier?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "hours" })
  hours?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "job_uuid" })
  jobUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PayrollEmployeeCompensationsPaidTimeOff extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "final_payout_unused_hours_input" })
  finalPayoutUnusedHoursInput?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "hours" })
  hours?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
export enum PayrollEmployeeCompensationsPaymentMethodEnum {
    Check = "Check",
    DirectDeposit = "Direct Deposit"
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
  @SpeakeasyMetadata({ elemType: PayrollEmployeeCompensationsBenefits })
  @Expose({ name: "benefits" })
  @Type(() => PayrollEmployeeCompensationsBenefits)
  benefits?: PayrollEmployeeCompensationsBenefits[];

  @SpeakeasyMetadata({ elemType: PayrollEmployeeCompensationsDeductions })
  @Expose({ name: "deductions" })
  @Type(() => PayrollEmployeeCompensationsDeductions)
  deductions?: PayrollEmployeeCompensationsDeductions[];

  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "excluded" })
  excluded?: boolean;

  @SpeakeasyMetadata({ elemType: PayrollEmployeeCompensationsFixedCompensations })
  @Expose({ name: "fixed_compensations" })
  @Type(() => PayrollEmployeeCompensationsFixedCompensations)
  fixedCompensations?: PayrollEmployeeCompensationsFixedCompensations[];

  @SpeakeasyMetadata()
  @Expose({ name: "gross_pay" })
  grossPay?: string;

  @SpeakeasyMetadata({ elemType: PayrollEmployeeCompensationsHourlyCompensations })
  @Expose({ name: "hourly_compensations" })
  @Type(() => PayrollEmployeeCompensationsHourlyCompensations)
  hourlyCompensations?: PayrollEmployeeCompensationsHourlyCompensations[];

  @SpeakeasyMetadata()
  @Expose({ name: "net_pay" })
  netPay?: string;

  @SpeakeasyMetadata({ elemType: PayrollEmployeeCompensationsPaidTimeOff })
  @Expose({ name: "paid_time_off" })
  @Type(() => PayrollEmployeeCompensationsPaidTimeOff)
  paidTimeOff?: PayrollEmployeeCompensationsPaidTimeOff[];

  @SpeakeasyMetadata()
  @Expose({ name: "payment_method" })
  paymentMethod?: PayrollEmployeeCompensationsPaymentMethodEnum;

  @SpeakeasyMetadata({ elemType: PayrollEmployeeCompensationsTaxes })
  @Expose({ name: "taxes" })
  @Type(() => PayrollEmployeeCompensationsTaxes)
  taxes?: PayrollEmployeeCompensationsTaxes[];
}
export enum PayrollOffCycleReasonEnum {
    BenefitReversal = "Benefit reversal",
    Bonus = "Bonus",
    Correction = "Correction",
    DismissedEmployee = "Dismissed employee",
    HiredEmployee = "Hired employee",
    WageCorrection = "Wage correction",
    TaxReconciliation = "Tax Reconciliation"
}

export class PayrollPayPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  endDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pay_schedule_uuid" })
  payScheduleUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  startDate?: string;
}

// PayrollPaymentSpeedChanged
/** 
 * Only applicable when a payroll is moved to four day processing instead of fast ach.
**/
export class PayrollPaymentSpeedChanged extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current_check_date" })
  currentCheckDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "current_debit_date" })
  currentDebitDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "original_check_date" })
  originalCheckDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "original_debit_date" })
  originalDebitDate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason?: string;
}

// PayrollPayrollStatusMeta
/** 
 * Information about the payroll's status and expected dates
**/
export class PayrollPayrollStatusMeta extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cancellable" })
  cancellable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "expected_check_date" })
  expectedCheckDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "expected_debit_time" })
  expectedDebitTime?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "initial_check_date" })
  initialCheckDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "initial_debit_cutoff_time" })
  initialDebitCutoffTime?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payroll_late" })
  payrollLate?: boolean;
}

// PayrollTotals
/** 
 * The subtotals for the payroll.
**/
export class PayrollTotals extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additional_earnings" })
  additionalEarnings?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "benefits" })
  benefits?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "check_amount" })
  checkAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "child_support_debit" })
  childSupportDebit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_debit" })
  companyDebit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "deferred_payroll_taxes" })
  deferredPayrollTaxes?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_benefits_deductions" })
  employeeBenefitsDeductions?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_bonuses" })
  employeeBonuses?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_cash_tips" })
  employeeCashTips?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_commissions" })
  employeeCommissions?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_paycheck_tips" })
  employeePaycheckTips?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_taxes" })
  employeeTaxes?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employer_taxes" })
  employerTaxes?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "gross_pay" })
  grossPay?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "net_pay" })
  netPay?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "net_pay_debit" })
  netPayDebit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "owners_draw" })
  ownersDraw?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reimbursement_debit" })
  reimbursementDebit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reimbursements" })
  reimbursements?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_debit" })
  taxDebit?: string;
}
export enum PayrollWithholdingPayPeriodEnum {
    EveryWeek = "Every week",
    EveryOtherWeek = "Every other week",
    TwicePerMonth = "Twice per month",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Semiannually = "Semiannually",
    Annually = "Annually"
}

export class Payroll extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "calculated_at" })
  calculatedAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "check_date" })
  checkDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata({ elemType: PayrollEmployeeCompensations })
  @Expose({ name: "employee_compensations" })
  @Type(() => PayrollEmployeeCompensations)
  employeeCompensations?: PayrollEmployeeCompensations[];

  @SpeakeasyMetadata()
  @Expose({ name: "final_termination_payroll" })
  finalTerminationPayroll?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "fixed_withholding_rate" })
  fixedWithholdingRate?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "off_cycle" })
  offCycle?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "off_cycle_reason" })
  offCycleReason?: PayrollOffCycleReasonEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "pay_period" })
  @Type(() => PayrollPayPeriod)
  payPeriod?: PayrollPayPeriod;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_speed_changed" })
  @Type(() => PayrollPaymentSpeedChanged)
  paymentSpeedChanged?: PayrollPaymentSpeedChanged;

  @SpeakeasyMetadata()
  @Expose({ name: "payroll_deadline" })
  payrollDeadline?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payroll_status_meta" })
  @Type(() => PayrollPayrollStatusMeta)
  payrollStatusMeta?: PayrollPayrollStatusMeta;

  @SpeakeasyMetadata()
  @Expose({ name: "payroll_uuid" })
  payrollUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "processed" })
  processed?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "processed_date" })
  processedDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "skip_regular_deductions" })
  skipRegularDeductions?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "totals" })
  @Type(() => PayrollTotals)
  totals?: PayrollTotals;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "withholding_pay_period" })
  withholdingPayPeriod?: PayrollWithholdingPayPeriodEnum;
}