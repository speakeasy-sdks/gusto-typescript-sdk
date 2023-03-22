/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class BenefitSummaryEmployeesPayrollBenefitsPayPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  endDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  startDate?: string;
}

export class BenefitSummaryEmployeesPayrollBenefits extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "check_date" })
  checkDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_benefit_contribution" })
  companyBenefitContribution?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_benefit_deduction" })
  companyBenefitDeduction?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "gross_pay" })
  grossPay?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pay_period" })
  @Type(() => BenefitSummaryEmployeesPayrollBenefitsPayPeriod)
  payPeriod?: BenefitSummaryEmployeesPayrollBenefitsPayPeriod;

  /**
   * Whether it is regular or bonus payroll
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payroll_type" })
  payrollType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payroll_uuid" })
  payrollUuid?: string;
}

export class BenefitSummaryEmployees extends SpeakeasyBase {
  /**
   * Sum of company contribution given the period of time for this specific employee.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "benefit_contribution" })
  benefitContribution?: string;

  /**
   * Sum of employee benefit deduction given the period of time for this specific employee.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "benefit_deduction" })
  benefitDeduction?: string;

  /**
   * The aggregate of company contribution for all employees given the period of time and benefit type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "company_benefit_contribution" })
  companyBenefitContribution?: string;

  /**
   * The aggregate of employee deduction for all employees given the period of time and benefit type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "company_benefit_deduction" })
  companyBenefitDeduction?: string;

  /**
   * Gross pay of this pay check.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "gross_pay" })
  grossPay?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payroll_benefits" })
  @Type(() => BenefitSummaryEmployeesPayrollBenefits)
  payrollBenefits?: BenefitSummaryEmployeesPayrollBenefits;

  /**
   * The UUID of the employee
   */
  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}

/**
 * Benefit summary response
 */
export class BenefitSummary extends SpeakeasyBase {
  /**
   * The aggregate of company contribution for all employees given the period of time and benefit type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "company_benefit_contribution" })
  companyBenefitContribution?: string;

  /**
   * The aggregate of employee deduction for all employees given the period of time and benefit type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "company_benefit_deduction" })
  companyBenefitDeduction?: string;

  /**
   * Description of the benefit.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employees" })
  @Type(() => BenefitSummaryEmployees)
  employees?: BenefitSummaryEmployees;

  /**
   * The end date of benefit summary.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  endDate?: string;

  /**
   * The start date of benefit summary.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  startDate?: string;
}
