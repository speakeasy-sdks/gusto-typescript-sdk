import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


// ContractorAddress
/** 
 * The contractor’s home address.
**/
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
export enum ContractorOnboardingStatusEnum {
    OnboardingCompleted = "onboarding_completed",
    AdminOnboardingReview = "admin_onboarding_review",
    AdminOnboardingIncomplete = "admin_onboarding_incomplete"
}
export enum ContractorTypeEnum {
    Individual = "Individual",
    Business = "Business"
}
export enum ContractorWageTypeEnum {
    Fixed = "Fixed",
    Hourly = "Hourly"
}

// Contractor
/** 
 * The representation of a contractor (individual or business) in Gusto.
**/
export class Contractor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => ContractorAddress)
  address?: ContractorAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "business_name" })
  businessName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ein" })
  ein?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "file_new_hire_report" })
  fileNewHireReport?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "has_ein" })
  hasEin?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "hourly_rate" })
  hourlyRate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "middle_initial" })
  middleInitial?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "onboarded" })
  onboarded?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "onboarding_status" })
  onboardingStatus?: ContractorOnboardingStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  startDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: ContractorTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "wage_type" })
  wageType?: ContractorWageTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "work_state" })
  workState?: string;
}