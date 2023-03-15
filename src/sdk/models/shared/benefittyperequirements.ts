import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class BenefitTypeRequirementsCatchUpDefaultValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class BenefitTypeRequirementsCatchUp extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "choices" })
  choices?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "default_value" })
  @Type(() => BenefitTypeRequirementsCatchUpDefaultValue)
  defaultValue?: BenefitTypeRequirementsCatchUpDefaultValue;

  @SpeakeasyMetadata()
  @Expose({ name: "editable" })
  editable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;
}

export class BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class BenefitTypeRequirementsCompanyContributionAnnualMaximum extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "choices" })
  choices?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "default_value" })
  @Type(
    () => BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue
  )
  defaultValue?: BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue;

  @SpeakeasyMetadata()
  @Expose({ name: "editable" })
  editable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;
}

export class BenefitTypeRequirementsContributionDefaultValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class BenefitTypeRequirementsContribution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "choices" })
  choices?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "default_value" })
  @Type(() => BenefitTypeRequirementsContributionDefaultValue)
  defaultValue?: BenefitTypeRequirementsContributionDefaultValue;

  @SpeakeasyMetadata()
  @Expose({ name: "editable" })
  editable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;
}

export class BenefitTypeRequirementsCoverageAmountDefaultValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class BenefitTypeRequirementsCoverageAmount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "choices" })
  choices?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "default_value" })
  @Type(() => BenefitTypeRequirementsCoverageAmountDefaultValue)
  defaultValue?: BenefitTypeRequirementsCoverageAmountDefaultValue;

  @SpeakeasyMetadata()
  @Expose({ name: "editable" })
  editable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;
}

export class BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class BenefitTypeRequirementsCoverageSalaryMultiplier extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "choices" })
  choices?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "default_value" })
  @Type(() => BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue)
  defaultValue?: BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue;

  @SpeakeasyMetadata()
  @Expose({ name: "editable" })
  editable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;
}

export class BenefitTypeRequirementsDeductAsPercentageDefaultValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class BenefitTypeRequirementsDeductAsPercentage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "choices" })
  choices?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "default_value" })
  @Type(() => BenefitTypeRequirementsDeductAsPercentageDefaultValue)
  defaultValue?: BenefitTypeRequirementsDeductAsPercentageDefaultValue;

  @SpeakeasyMetadata()
  @Expose({ name: "editable" })
  editable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;
}

export class BenefitTypeRequirementsEmployeeDeductionDefaultValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class BenefitTypeRequirementsEmployeeDeduction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "choices" })
  choices?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "default_value" })
  @Type(() => BenefitTypeRequirementsEmployeeDeductionDefaultValue)
  defaultValue?: BenefitTypeRequirementsEmployeeDeductionDefaultValue;

  @SpeakeasyMetadata()
  @Expose({ name: "editable" })
  editable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;
}

export class BenefitTypeRequirementsLimitOptionDefaultValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class BenefitTypeRequirementsLimitOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "choices" })
  choices?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "default_value" })
  @Type(() => BenefitTypeRequirementsLimitOptionDefaultValue)
  defaultValue?: BenefitTypeRequirementsLimitOptionDefaultValue;

  @SpeakeasyMetadata()
  @Expose({ name: "editable" })
  editable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;
}

export class BenefitTypeRequirements extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "catch_up" })
  @Type(() => BenefitTypeRequirementsCatchUp)
  catchUp?: BenefitTypeRequirementsCatchUp;

  @SpeakeasyMetadata()
  @Expose({ name: "company_contribution_annual_maximum" })
  @Type(() => BenefitTypeRequirementsCompanyContributionAnnualMaximum)
  companyContributionAnnualMaximum?: BenefitTypeRequirementsCompanyContributionAnnualMaximum;

  @SpeakeasyMetadata()
  @Expose({ name: "contribution" })
  @Type(() => BenefitTypeRequirementsContribution)
  contribution?: BenefitTypeRequirementsContribution;

  @SpeakeasyMetadata()
  @Expose({ name: "coverage_amount" })
  @Type(() => BenefitTypeRequirementsCoverageAmount)
  coverageAmount?: BenefitTypeRequirementsCoverageAmount;

  @SpeakeasyMetadata()
  @Expose({ name: "coverage_salary_multiplier" })
  @Type(() => BenefitTypeRequirementsCoverageSalaryMultiplier)
  coverageSalaryMultiplier?: BenefitTypeRequirementsCoverageSalaryMultiplier;

  @SpeakeasyMetadata()
  @Expose({ name: "deduct_as_percentage" })
  @Type(() => BenefitTypeRequirementsDeductAsPercentage)
  deductAsPercentage?: BenefitTypeRequirementsDeductAsPercentage;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_deduction" })
  @Type(() => BenefitTypeRequirementsEmployeeDeduction)
  employeeDeduction?: BenefitTypeRequirementsEmployeeDeduction;

  @SpeakeasyMetadata()
  @Expose({ name: "limit_option" })
  @Type(() => BenefitTypeRequirementsLimitOption)
  limitOption?: BenefitTypeRequirementsLimitOption;
}
