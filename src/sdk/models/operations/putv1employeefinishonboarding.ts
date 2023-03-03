import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PutV1EmployeeFinishOnboardingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}

export class PutV1EmployeeFinishOnboardingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1EmployeeFinishOnboardingPathParams;
}

export class PutV1EmployeeFinishOnboardingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employee?: shared.Employee;

  @SpeakeasyMetadata()
  statusCode: number;
}