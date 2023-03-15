import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum ContractorOnboardingStatusOnboardingStatusEnum {
  OnboardingCompleted = "onboarding_completed",
  AdminOnboardingReview = "admin_onboarding_review",
  AdminOnboardingIncomplete = "admin_onboarding_incomplete",
}

export class ContractorOnboardingStatusOnboardingStep extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "completed" })
  completed?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "requirements" })
  requirements?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;
}

// ContractorOnboardingStatus
/**
 * The representation of an contractor's onboarding status.
 **/
export class ContractorOnboardingStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "onboarding_status" })
  onboardingStatus?: ContractorOnboardingStatusOnboardingStatusEnum;

  @SpeakeasyMetadata({ elemType: ContractorOnboardingStatusOnboardingStep })
  @Expose({ name: "onboarding_steps" })
  @Type(() => ContractorOnboardingStatusOnboardingStep)
  onboardingSteps?: ContractorOnboardingStatusOnboardingStep[];

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}
