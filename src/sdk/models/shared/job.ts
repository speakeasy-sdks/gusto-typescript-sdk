import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Compensation } from "./compensation";
import { Expose, Type } from "class-transformer";

export class JobLocation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "inactive" })
  inactive?: boolean;

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
  @Expose({ name: "uuid" })
  uuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "zip" })
  zip?: string;
}

// Job
/**
 * The representation of a job in Gusto.
 **/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Compensation })
  @Expose({ name: "compensations" })
  @Type(() => Compensation)
  compensations?: Compensation[];

  @SpeakeasyMetadata()
  @Expose({ name: "current_compensation_uuid" })
  currentCompensationUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "hire_date" })
  hireDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  @Type(() => JobLocation)
  location?: JobLocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_unit" })
  paymentUnit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "primary" })
  primary?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "rate" })
  rate?: string;

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
