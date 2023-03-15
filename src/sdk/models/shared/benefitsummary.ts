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

  @SpeakeasyMetadata()
  @Expose({ name: "payroll_type" })
  payrollType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payroll_uuid" })
  payrollUuid?: string;
}

export class BenefitSummaryEmployees extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "benefit_contribution" })
  benefitContribution?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "benefit_deduction" })
  benefitDeduction?: string;

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
  @Expose({ name: "payroll_benefits" })
  @Type(() => BenefitSummaryEmployeesPayrollBenefits)
  payrollBenefits?: BenefitSummaryEmployeesPayrollBenefits;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}

export class BenefitSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company_benefit_contribution" })
  companyBenefitContribution?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_benefit_deduction" })
  companyBenefitDeduction?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employees" })
  @Type(() => BenefitSummaryEmployees)
  employees?: BenefitSummaryEmployees;

  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  endDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  startDate?: string;
}
