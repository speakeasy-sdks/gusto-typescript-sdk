import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PostV1EmployeesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;
}

export class PostV1EmployeesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "date_of_birth" })
  dateOfBirth?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "middle_initial" })
  middleInitial?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "self_onboarding" })
  selfOnboarding?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "ssn" })
  ssn?: string;
}

export class PostV1EmployeesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1EmployeesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1EmployeesRequestBody;
}

export class PostV1EmployeesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employee?: shared.Employee;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}