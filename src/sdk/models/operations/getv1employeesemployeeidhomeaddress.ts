import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1EmployeesEmployeeIdHomeAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}

export class GetV1EmployeesEmployeeIdHomeAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1EmployeesEmployeeIdHomeAddressPathParams;
}

export class GetV1EmployeesEmployeeIdHomeAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeeAddress?: shared.EmployeeAddress;

  @SpeakeasyMetadata()
  statusCode: number;
}