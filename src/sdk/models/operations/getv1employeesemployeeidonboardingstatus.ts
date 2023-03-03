import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1EmployeesEmployeeIdOnboardingStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}

export class GetV1EmployeesEmployeeIdOnboardingStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1EmployeesEmployeeIdOnboardingStatusPathParams;
}

export class GetV1EmployeesEmployeeIdOnboardingStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeeOnboardingStatus?: shared.EmployeeOnboardingStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}