/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * The contractor’s home address.
 */
export class ContractorAddress extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    state?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "street_1" })
    street1?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "street_2" })
    street2?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "zip" })
    zip?: string;
}

/**
 * One of the "onboarding_status" enum values.
 */
export enum ContractorOnboardingStatus {
    OnboardingCompleted = "onboarding_completed",
    AdminOnboardingReview = "admin_onboarding_review",
    AdminOnboardingIncomplete = "admin_onboarding_incomplete",
}

/**
 * The contractor's type, either "Individual" or "Business".
 */
export enum ContractorType {
    Individual = "Individual",
    Business = "Business",
}

/**
 * The contractor's wage type, either "Fixed" or "Hourly".
 */
export enum ContractorWageType {
    Fixed = "Fixed",
    Hourly = "Hourly",
}

/**
 * The representation of a contractor (individual or business) in Gusto.
 */
export class Contractor extends SpeakeasyBase {
    /**
     * The contractor’s home address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => ContractorAddress)
    address?: ContractorAddress;

    /**
     * The name of the contractor business. This attribute is required for “Business” contractors and will be ignored for “Individual” contractors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "business_name" })
    businessName?: string;

    /**
     * The UUID of the company the contractor is employed by.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company_uuid" })
    companyUuid?: string;

    /**
     * The Federal Employer Identification Number of the contractor business. This attribute is optional for “Business” contractors and will be ignored for “Individual” contractors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ein" })
    ein?: string;

    /**
     * The contractor’s email address. This attribute is optional for “Individual” contractors and will be ignored for “Business” contractors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * The boolean flag indicating whether Gusto will file a new hire report for the contractor
     */
    @SpeakeasyMetadata()
    @Expose({ name: "file_new_hire_report" })
    fileNewHireReport?: boolean;

    /**
     * The contractor’s first name. This attribute is required for “Individual” contractors and will be ignored for “Business” contractors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName?: string;

    /**
     * Whether company's Employer Identification Number (EIN) is present
     */
    @SpeakeasyMetadata()
    @Expose({ name: "has_ein" })
    hasEin?: boolean;

    /**
     * The contractor’s hourly rate. This attribute is required if the wage_type is “Hourly”.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hourly_rate" })
    hourlyRate?: string;

    /**
     * The status of the contractor with the company.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive?: boolean;

    /**
     * The contractor’s last name. This attribute is required for “Individual” contractors and will be ignored for “Business” contractors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName?: string;

    /**
     * The contractor’s middle initial. This attribute is optional for “Individual” contractors and will be ignored for “Business” contractors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "middle_initial" })
    middleInitial?: string;

    /**
     * The updated onboarding status for the contractor
     */
    @SpeakeasyMetadata()
    @Expose({ name: "onboarded" })
    onboarded?: boolean;

    /**
     * One of the "onboarding_status" enum values.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "onboarding_status" })
    onboardingStatus?: ContractorOnboardingStatus;

    /**
     * The contractor's start date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    startDate?: string;

    /**
     * The contractor's type, either "Individual" or "Business".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: ContractorType;

    /**
     * The UUID of the contractor in Gusto.
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

    /**
     * The contractor's wage type, either "Fixed" or "Hourly".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "wage_type" })
    wageType?: ContractorWageType;

    /**
     * State where the contractor will be conducting the majority of their work for the company.
     *
     * @remarks
     * This value is used when generating the new hire report.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "work_state" })
    workState?: string;
}
