import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EmployeeAddress } from "./employeeaddress";
import { EmployeeCustomField } from "./employeecustomfield";
import { Garnishment } from "./garnishment";
import { Job } from "./job";
import { PaidTimeOff } from "./paidtimeoff";
import { Termination } from "./termination";
import { Expose, Type } from "class-transformer";

export enum EmployeeCurrentEmploymentStatusEnum {
    FullTime = "full_time",
    PartTimeUnderTwentyHours = "part_time_under_twenty_hours",
    PartTimeTwentyPlusHours = "part_time_twenty_plus_hours",
    Variable = "variable",
    Seasonal = "seasonal"
}
export enum EmployeePaymentMethodEnum {
    DirectDeposit = "Direct Deposit",
    Check = "Check"
}

// Employee
/** 
 * The representation of an employee in Gusto.
**/
export class Employee extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "current_employment_status" })
  currentEmploymentStatus?: EmployeeCurrentEmploymentStatusEnum;

  @SpeakeasyMetadata({ elemType: EmployeeCustomField })
  @Expose({ name: "custom_fields" })
  @Type(() => EmployeeCustomField)
  customFields?: EmployeeCustomField[];

  @SpeakeasyMetadata()
  @Expose({ name: "date_of_birth" })
  dateOfBirth?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "department" })
  department?: string;

  @SpeakeasyMetadata({ elemType: PaidTimeOff })
  @Expose({ name: "eligible_paid_time_off" })
  @Type(() => PaidTimeOff)
  eligiblePaidTimeOff?: PaidTimeOff[];

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ elemType: Garnishment })
  @Expose({ name: "garnishments" })
  @Type(() => Garnishment)
  garnishments?: Garnishment[];

  @SpeakeasyMetadata()
  @Expose({ name: "has_ssn" })
  hasSsn?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "home_address" })
  @Type(() => EmployeeAddress)
  homeAddress?: EmployeeAddress;

  @SpeakeasyMetadata({ elemType: Job })
  @Expose({ name: "jobs" })
  @Type(() => Job)
  jobs?: Job[];

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "manager_uuid" })
  managerUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "middle_initial" })
  middleInitial?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "onboarded" })
  onboarded?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_method" })
  paymentMethod?: EmployeePaymentMethodEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "preferred_first_name" })
  preferredFirstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ssn" })
  ssn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "terminated" })
  terminated?: boolean;

  @SpeakeasyMetadata({ elemType: Termination })
  @Expose({ name: "terminations" })
  @Type(() => Termination)
  terminations?: Termination[];

  @SpeakeasyMetadata()
  @Expose({ name: "two_percent_shareholder" })
  twoPercentShareholder?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "work_email" })
  workEmail?: string;
}