/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * An object representing the type and value of the company contribution.
 */
export class EmployeeBenefitContribution extends SpeakeasyBase {
    /**
     * The company contribution scheme.
     *
     * @remarks
     *
     * "amount": The company contributes a fixed amount per payroll. If elective is true, the contribution is matching, dollar-for-dollar.
     *
     * "percentage": The company contributes a percentage of the payroll amount per payroll period. If elective is true, the contribution is matching, dollar-for-dollar.
     *
     * "tiered": The company contribution varies according to the size of the employee deduction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    /**
     * For the `amount` and `percentage` contribution types, the value of the corresponding amount or percentage.
     *
     * @remarks
     *
     * For the `tiered` contribution type, an array of tiers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: any;
}

/**
 * Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.
 */
export enum EmployeeBenefitDeductionReducesTaxableIncome {
    Unset = "unset",
    ReducesTaxableIncome = "reduces_taxable_income",
    DoesNotReduceTaxableIncome = "does_not_reduce_taxable_income",
    LessThanNilGreaterThan = "<nil>",
}

/**
 * The representation of an employee benefit.
 */
export class EmployeeBenefit extends SpeakeasyBase {
    /**
     * Whether the employee benefit is active.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "active" })
    active?: boolean;

    /**
     * Whether the employee should use a benefit’s "catch up" rate. Only Roth 401k and 401k benefits use this value for employees over 50.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "catch_up" })
    catchUp?: boolean;

    /**
     * The UUID of the company benefit.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company_benefit_uuid" })
    companyBenefitUuid?: string;

    /**
     * The amount to be paid, per pay period, by the company. This field will not appear for tiered contribution types.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company_contribution" })
    companyContribution?: string;

    /**
     * The maximum company contribution amount per year. A null value signifies no limit.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company_contribution_annual_maximum" })
    companyContributionAnnualMaximum?: string;

    /**
     * Whether the company_contribution value should be treated as a percentage to be added to each payroll. This field will not appear for tiered contribution types.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contribute_as_percentage" })
    contributeAsPercentage?: boolean;

    /**
     * An object representing the type and value of the company contribution.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contribution" })
    @Type(() => EmployeeBenefitContribution)
    contribution?: EmployeeBenefitContribution;

    /**
     * The amount that the employee is insured for. Note: company contribution cannot be present if coverage amount is set.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "coverage_amount" })
    coverageAmount?: string;

    /**
     * The coverage amount as a multiple of the employee’s salary. Only applicable for Group Term Life benefits. Note: cannot be set if coverage amount is also set.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "coverage_salary_multiplier" })
    coverageSalaryMultiplier?: string;

    /**
     * Whether the employee deduction amount should be treated as a percentage to be deducted from each payroll.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deduct_as_percentage" })
    deductAsPercentage?: boolean;

    /**
     * Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deduction_reduces_taxable_income" })
    deductionReducesTaxableIncome?: EmployeeBenefitDeductionReducesTaxableIncome;

    /**
     * Whether the company contribution is elective (aka matching). For "tiered" contribution types, this is always true.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "elective" })
    elective?: boolean;

    /**
     * The amount to be deducted, per pay period, from the employee's pay.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employee_deduction" })
    employeeDeduction?: string;

    /**
     * The maximum employee deduction amount per year. A null value signifies no limit.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employee_deduction_annual_maximum" })
    employeeDeductionAnnualMaximum?: string;

    /**
     * The UUID of the employee to which the benefit belongs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employee_uuid" })
    employeeUuid?: string;

    /**
     * Some benefits require additional information to determine their limit. For example, for an HSA benefit, the limit option should be either "Family" or "Individual". For a Dependent Care FSA benefit, the limit option should be either "Joint Filing or Single" or "Married and Filing Separately".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "limit_option" })
    limitOption?: string;

    /**
     * Identifier for a 401(k) loan assigned by the 401(k) provider
     */
    @SpeakeasyMetadata()
    @Expose({ name: "retirement_loan_identifier" })
    retirementLoanIdentifier?: string;

    /**
     * The UUID of the employee benefit.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;

    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}
