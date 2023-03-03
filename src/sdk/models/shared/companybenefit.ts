import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


// CompanyBenefitEmployeeBenefitsContributionValue2Tiers
/** 
 * A single tier of a tiered matching scheme.
**/
export class CompanyBenefitEmployeeBenefitsContributionValue2Tiers extends SpeakeasyBase {
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

export class CompanyBenefitEmployeeBenefitsContributionValue2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CompanyBenefitEmployeeBenefitsContributionValue2Tiers })
  @Expose({ name: "tiers" })
  @Type(() => CompanyBenefitEmployeeBenefitsContributionValue2Tiers)
  tiers?: CompanyBenefitEmployeeBenefitsContributionValue2Tiers[];
}

// CompanyBenefitEmployeeBenefitsContribution
/** 
 * An object representing the type and value of the company contribution.
**/
export class CompanyBenefitEmployeeBenefitsContribution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: any;
}

export class CompanyBenefitEmployeeBenefits extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "company_benefit_uuid" })
  companyBenefitUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_contribution" })
  companyContribution?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contribution" })
  @Type(() => CompanyBenefitEmployeeBenefitsContribution)
  contribution?: CompanyBenefitEmployeeBenefitsContribution;

  @SpeakeasyMetadata()
  @Expose({ name: "deduct_as_percentage" })
  deductAsPercentage?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_deduction" })
  employeeDeduction?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}

// CompanyBenefit
/** 
 * The representation of a company benefit.
**/
export class CompanyBenefit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "benefit_type" })
  benefitType?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "deletable" })
  deletable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata({ elemType: CompanyBenefitEmployeeBenefits })
  @Expose({ name: "employee_benefits" })
  @Type(() => CompanyBenefitEmployeeBenefits)
  employeeBenefits?: CompanyBenefitEmployeeBenefits[];

  @SpeakeasyMetadata()
  @Expose({ name: "responsible_for_employee_w2" })
  responsibleForEmployeeW2?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "responsible_for_employer_taxes" })
  responsibleForEmployerTaxes?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "supports_percentage_amounts" })
  supportsPercentageAmounts?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}