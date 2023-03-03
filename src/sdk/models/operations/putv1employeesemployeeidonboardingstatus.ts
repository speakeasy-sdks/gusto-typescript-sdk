import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PutV1EmployeesEmployeeIdOnboardingStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}

export class PutV1EmployeesEmployeeIdOnboardingStatusRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "onboarding_status" })
  onboardingStatus: string;
}

export class PutV1EmployeesEmployeeIdOnboardingStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1EmployeesEmployeeIdOnboardingStatusPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1EmployeesEmployeeIdOnboardingStatusRequestBody;
}

export class PutV1EmployeesEmployeeIdOnboardingStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeeOnboardingStatus?: shared.EmployeeOnboardingStatus;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}