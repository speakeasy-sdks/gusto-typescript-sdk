import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export enum GetV1EmployeesIncludeEnum {
  AllCompensations = "all_compensations",
  CustomFields = "custom_fields",
}

export class GetV1EmployeesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_id",
  })
  employeeId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=include",
  })
  include?: GetV1EmployeesIncludeEnum;
}

export class GetV1EmployeesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employee?: shared.Employee;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
