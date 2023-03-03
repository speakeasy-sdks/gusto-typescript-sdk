import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


// EmployeeBenefitContributionValue2Tiers
/** 
 * A single tier of a tiered matching scheme.
**/
export class EmployeeBenefitContributionValue2Tiers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "rate" })
  rate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "threshold" })
  threshold?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "threshold_delta" })
  thresholdDelta?: string;
}

export class EmployeeBenefitContributionValue2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EmployeeBenefitContributionValue2Tiers })
  @Expose({ name: "tiers" })
  @Type(() => EmployeeBenefitContributionValue2Tiers)
  tiers?: EmployeeBenefitContributionValue2Tiers[];
}

// EmployeeBenefitContribution
/** 
 * An object representing the type and value of the company contribution.
**/
export class EmployeeBenefitContribution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: any;
}
export enum EmployeeBenefitDeductionReducesTaxableIncomeEnum {
    Unset = "unset",
    ReducesTaxableIncome = "reduces_taxable_income",
    DoesNotReduceTaxableIncome = "does_not_reduce_taxable_income",
    Unknown = ""
}

// EmployeeBenefit
/** 
 * The representation of an employee benefit.
**/
export class EmployeeBenefit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "catch_up" })
  catchUp?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "company_benefit_uuid" })
  companyBenefitUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_contribution" })
  companyContribution?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_contribution_annual_maximum" })
  companyContributionAnnualMaximum?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contribute_as_percentage" })
  contributeAsPercentage?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "contribution" })
  @Type(() => EmployeeBenefitContribution)
  contribution?: EmployeeBenefitContribution;

  @SpeakeasyMetadata()
  @Expose({ name: "coverage_amount" })
  coverageAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "coverage_salary_multiplier" })
  coverageSalaryMultiplier?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "deduct_as_percentage" })
  deductAsPercentage?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "deduction_reduces_taxable_income" })
  deductionReducesTaxableIncome?: EmployeeBenefitDeductionReducesTaxableIncomeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "elective" })
  elective?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_deduction" })
  employeeDeduction?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_deduction_annual_maximum" })
  employeeDeductionAnnualMaximum?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "limit_option" })
  limitOption?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "retirement_loan_identifier" })
  retirementLoanIdentifier?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}