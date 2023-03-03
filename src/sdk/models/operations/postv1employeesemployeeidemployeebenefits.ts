import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PostV1EmployeesEmployeeIdEmployeeBenefitsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}
export enum PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContributionTypeEnum {
    Tiered = "tiered",
    Percentage = "percentage",
    Amount = "amount"
}

// PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContributionValue2
/** 
 * A single tier of a tiered matching scheme.
**/
export class PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContributionValue2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "rate" })
  rate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "threshold" })
  threshold?: string;
}

// PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContribution
/** 
 * An object representing the company contribution type and value.
**/
export class PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContribution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContributionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: any;
}
export enum PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyDeductionReducesTaxableIncomeEnum {
    Unset = "unset",
    ReducesTaxableIncome = "reduces_taxable_income",
    DoesNotReduceTaxableIncome = "does_not_reduce_taxable_income",
    Unknown = ""
}

export class PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "catch_up" })
  catchUp?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "company_benefit_uuid" })
  companyBenefitUuid: string;

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
  @Type(() => PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContribution)
  contribution?: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyContribution;

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
  deductionReducesTaxableIncome?: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyDeductionReducesTaxableIncomeEnum;

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
  @Expose({ name: "limit_option" })
  limitOption?: string;
}

export class PostV1EmployeesEmployeeIdEmployeeBenefitsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1EmployeesEmployeeIdEmployeeBenefitsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody;
}

export class PostV1EmployeesEmployeeIdEmployeeBenefitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeeBenefit?: shared.EmployeeBenefit;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}