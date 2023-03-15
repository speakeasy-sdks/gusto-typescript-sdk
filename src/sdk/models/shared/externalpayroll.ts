import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class ExternalPayrollApplicableBenefits extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;
}

export class ExternalPayrollApplicableEarnings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "category" })
  category?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "earning_id" })
  earningId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "earning_type" })
  earningType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "input_type" })
  inputType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ExternalPayrollApplicableTaxes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ExternalPayrollExternalPayrollItemsBenefits extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "benefit_id" })
  benefitId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "company_contribution_amount" })
  companyContributionAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_deduction_amount" })
  employeeDeductionAmount?: string;
}

export class ExternalPayrollExternalPayrollItemsEarnings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "earning_id" })
  earningId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "earning_type" })
  earningType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "hours" })
  hours?: string;
}

export class ExternalPayrollExternalPayrollItemsTaxes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_id" })
  taxId?: number;
}

export class ExternalPayrollExternalPayrollItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ExternalPayrollExternalPayrollItemsBenefits })
  @Expose({ name: "benefits" })
  @Type(() => ExternalPayrollExternalPayrollItemsBenefits)
  benefits?: ExternalPayrollExternalPayrollItemsBenefits[];

  @SpeakeasyMetadata({ elemType: ExternalPayrollExternalPayrollItemsEarnings })
  @Expose({ name: "earnings" })
  @Type(() => ExternalPayrollExternalPayrollItemsEarnings)
  earnings?: ExternalPayrollExternalPayrollItemsEarnings[];

  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: string;

  @SpeakeasyMetadata({ elemType: ExternalPayrollExternalPayrollItemsTaxes })
  @Expose({ name: "taxes" })
  @Type(() => ExternalPayrollExternalPayrollItemsTaxes)
  taxes?: ExternalPayrollExternalPayrollItemsTaxes[];
}

// ExternalPayrollMetadata
/**
 * Stores metadata of the external payroll.
 **/
export class ExternalPayrollMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "deletable" })
  deletable?: boolean;
}

// ExternalPayroll
/**
 * The representation of an external payroll.
 **/
export class ExternalPayroll extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ExternalPayrollApplicableBenefits })
  @Expose({ name: "applicable_benefits" })
  @Type(() => ExternalPayrollApplicableBenefits)
  applicableBenefits?: ExternalPayrollApplicableBenefits[];

  @SpeakeasyMetadata({ elemType: ExternalPayrollApplicableEarnings })
  @Expose({ name: "applicable_earnings" })
  @Type(() => ExternalPayrollApplicableEarnings)
  applicableEarnings?: ExternalPayrollApplicableEarnings[];

  @SpeakeasyMetadata({ elemType: ExternalPayrollApplicableTaxes })
  @Expose({ name: "applicable_taxes" })
  @Type(() => ExternalPayrollApplicableTaxes)
  applicableTaxes?: ExternalPayrollApplicableTaxes[];

  @SpeakeasyMetadata()
  @Expose({ name: "check_date" })
  checkDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata({ elemType: ExternalPayrollExternalPayrollItems })
  @Expose({ name: "external_payroll_items" })
  @Type(() => ExternalPayrollExternalPayrollItems)
  externalPayrollItems?: ExternalPayrollExternalPayrollItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ExternalPayrollMetadata)
  metadata?: ExternalPayrollMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_period_end_date" })
  paymentPeriodEndDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_period_start_date" })
  paymentPeriodStartDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}
