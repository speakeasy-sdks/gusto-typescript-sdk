import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "double_overtime_hours_worked" })
  doubleOvertimeHoursWorked?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "overtime_hours_worked" })
  overtimeHoursWorked?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pto_hours_used" })
  ptoHoursUsed?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "regular_hours_worked" })
  regularHoursWorked?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sick_hours_used" })
  sickHoursUsed?: number;
}

export class PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_id",
  })
  employeeId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=payroll_id",
  })
  payrollId: string;
}

export class PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AccruingTimeOffHour })
  accruingTimeOffHours?: shared.AccruingTimeOffHour[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
