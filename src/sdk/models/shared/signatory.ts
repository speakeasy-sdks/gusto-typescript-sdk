import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class SignatoryHomeAddress extends SpeakeasyBase {
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
export enum SignatoryIdentityVerificationStatusEnum {
  Pass = "Pass",
  Fail = "Fail",
  Skipped = "Skipped",
}

// Signatory
/**
 * The representation of a company's signatory
 **/
export class Signatory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "birthday" })
  birthday?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "has_ssn" })
  hasSsn?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "home_address" })
  @Type(() => SignatoryHomeAddress)
  homeAddress?: SignatoryHomeAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "identity_verification_status" })
  identityVerificationStatus?: SignatoryIdentityVerificationStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "is_admin" })
  isAdmin?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}
