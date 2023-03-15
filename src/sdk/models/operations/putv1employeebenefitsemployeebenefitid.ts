import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1EmployeeBenefitsEmployeeBenefitIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_benefit_id",
  })
  employeeBenefitId: string;
}
export enum PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContributionTypeEnum {
  Amount = "amount",
  Percentage = "percentage",
  Tiered = "tiered",
}

// PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContributionValue2
/**
 * A single tier of a tiered matching scheme.
 **/
export class PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContributionValue2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "rate" })
  rate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "threshold" })
  threshold?: string;
}

// PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContribution
/**
 * An object representing the type and value of the company contribution.
 **/
export class PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContribution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContributionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: any;
}
export enum PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyDeductionReducesTaxableIncomeEnum {
  Unset = "unset",
  ReducesTaxableIncome = "reduces_taxable_income",
  DoesNotReduceTaxableIncome = "does_not_reduce_taxable_income",
  Unknown = "",
}

export class PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "catch_up" })
  catchUp?: boolean;

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
  @Type(() => PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContribution)
  contribution?: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyContribution;

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
  deductionReducesTaxableIncome?: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBodyDeductionReducesTaxableIncomeEnum;

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

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1EmployeeBenefitsEmployeeBenefitIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1EmployeeBenefitsEmployeeBenefitIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody;
}

export class PutV1EmployeeBenefitsEmployeeBenefitIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeeBenefit?: shared.EmployeeBenefit;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
