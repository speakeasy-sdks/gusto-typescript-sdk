import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostV1EmployeesEmployeeIdTerminationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_id",
  })
  employeeId: string;
}

export class PostV1EmployeesEmployeeIdTerminationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "effective_date" })
  effectiveDate: string;

  @SpeakeasyMetadata()
  @Expose({ name: "run_termination_payroll" })
  runTerminationPayroll?: boolean;
}

export class PostV1EmployeesEmployeeIdTerminationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1EmployeesEmployeeIdTerminationsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1EmployeesEmployeeIdTerminationsRequestBody;
}

export class PostV1EmployeesEmployeeIdTerminationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  termination?: shared.Termination;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
