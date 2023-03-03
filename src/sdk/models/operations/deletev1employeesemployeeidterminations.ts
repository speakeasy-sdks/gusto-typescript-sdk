import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class DeleteV1EmployeesEmployeeIdTerminationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}

export class DeleteV1EmployeesEmployeeIdTerminationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV1EmployeesEmployeeIdTerminationsPathParams;
}

export class DeleteV1EmployeesEmployeeIdTerminationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}