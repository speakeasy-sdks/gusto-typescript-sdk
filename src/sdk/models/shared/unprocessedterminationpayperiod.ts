import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// UnprocessedTerminationPayPeriod
/**
 * The representation of an unprocessed termination pay period.
 **/
export class UnprocessedTerminationPayPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "check_date" })
  checkDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "debit_date" })
  debitDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_name" })
  employeeName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  endDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pay_schedule_uuid" })
  payScheduleUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  startDate?: string;
}
