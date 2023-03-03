import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class CompanyOnboardingStatusOnboardingStep extends SpeakeasyBase {
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

// CompanyOnboardingStatus
/** 
 * The representation of a company's onboarding status
**/
export class CompanyOnboardingStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "onboarding_completed" })
  onboardingCompleted?: boolean;

  @SpeakeasyMetadata({ elemType: CompanyOnboardingStatusOnboardingStep })
  @Expose({ name: "onboarding_steps" })
  @Type(() => CompanyOnboardingStatusOnboardingStep)
  onboardingSteps?: CompanyOnboardingStatusOnboardingStep[];

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}