/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The company contribution scheme.
 *
 * @remarks
 *
 * `amount`: The company contributes a fixed amount per payroll. If elective is true, the contribution is matching, dollar-for-dollar.
 *
 * `percentage`: The company contributes a percentage of the payroll amount per payroll period. If elective is true, the contribution is matching, dollar-for-dollar.
 *
 * `tiered`: The size of the company contribution corresponds to the size of the employee deduction relative to a tiered matching scheme.
 */
export enum PostV1EmployeesEmployeeIdEmployeeBenefitsType {
    Tiered = "tiered",
    Percentage = "percentage",
    Amount = "amount",
}

/**
 * An object representing the company contribution type and value.
 */
export class Contribution extends SpeakeasyBase {
    /**
     * The company contribution scheme.
     *
     * @remarks
     *
     * `amount`: The company contributes a fixed amount per payroll. If elective is true, the contribution is matching, dollar-for-dollar.
     *
     * `percentage`: The company contributes a percentage of the payroll amount per payroll period. If elective is true, the contribution is matching, dollar-for-dollar.
     *
     * `tiered`: The size of the company contribution corresponds to the size of the employee deduction relative to a tiered matching scheme.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: PostV1EmployeesEmployeeIdEmployeeBenefitsType;

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
export enum DeductionReducesTaxableIncome {
    Unset = "unset",
    ReducesTaxableIncome = "reduces_taxable_income",
    DoesNotReduceTaxableIncome = "does_not_reduce_taxable_income",
    LessThanNilGreaterThan = "<nil>",
}

export class PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody extends SpeakeasyBase {
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
     * The UUID of the company to which the benefit belongs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company_benefit_uuid" })
    companyBenefitUuid: string;

    /**
     * The amount to be paid, per pay period, by the company.
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
     * Whether the company contribution amount should be treated as a percentage to be deducted from each payroll.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contribute_as_percentage" })
    contributeAsPercentage?: boolean;

    /**
     * An object representing the company contribution type and value.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contribution" })
    @Type(() => Contribution)
    contribution?: Contribution;

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
    deductionReducesTaxableIncome?: DeductionReducesTaxableIncome;

    /**
     * Whether the company contribution is elective (aka "matching"). For `tiered`, `elective_amount`, and `elective_percentage` contribution types this is ignored and assumed to be `true`.
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
     * Some benefits require additional information to determine their limit. For example, for an HSA benefit, the limit option should be either "Family" or "Individual". For a Dependent Care FSA benefit, the limit option should be either "Joint Filing or Single" or "Married and Filing Separately".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "limit_option" })
    limitOption?: string;
}

export class PostV1EmployeesEmployeeIdEmployeeBenefitsRequest extends SpeakeasyBase {
    /**
     * The UUID of the employee
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
    employeeId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody;
}

export class PostV1EmployeesEmployeeIdEmployeeBenefitsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    employeeBenefit?: shared.EmployeeBenefit;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * Unprocessable Entity
     *
     * @remarks
     *
     * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
     *
     */
    @SpeakeasyMetadata()
    unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
