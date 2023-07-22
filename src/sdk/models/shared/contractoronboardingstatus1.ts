/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * One of the "onboarding_status" enum values.
 */
export enum ContractorOnboardingStatusOnboardingStatus {
    OnboardingCompleted = "onboarding_completed",
    AdminOnboardingReview = "admin_onboarding_review",
    AdminOnboardingIncomplete = "admin_onboarding_incomplete",
}

export class ContractorOnboardingStatusOnboardingStep extends SpeakeasyBase {
    /**
     * When true, this step has been completed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "completed" })
    completed?: boolean;

    /**
     * String identifier for the onboarding step.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * When true, this step is required.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "required" })
    required?: boolean;

    /**
     * A list of onboarding steps required to begin this step.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requirements" })
    requirements?: string[];

    /**
     * User-friendly description of the onboarding step.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;
}

/**
 * The representation of an contractor's onboarding status.
 */
export class ContractorOnboardingStatus1 extends SpeakeasyBase {
    /**
     * One of the "onboarding_status" enum values.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "onboarding_status" })
    onboardingStatus?: ContractorOnboardingStatusOnboardingStatus;

    /**
     * List of steps required to onboard a contractor.
     */
    @SpeakeasyMetadata({ elemType: ContractorOnboardingStatusOnboardingStep })
    @Expose({ name: "onboarding_steps" })
    @Type(() => ContractorOnboardingStatusOnboardingStep)
    onboardingSteps?: ContractorOnboardingStatusOnboardingStep[];

    /**
     * Unique identifier for this contractor.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;
}
