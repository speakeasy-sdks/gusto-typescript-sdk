import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1EmployeesEmployeeIdJobsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}
export enum GetV1EmployeesEmployeeIdJobsIncludeEnum {
    AllCompensations = "all_compensations"
}

export class GetV1EmployeesEmployeeIdJobsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: GetV1EmployeesEmployeeIdJobsIncludeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per" })
  per?: number;
}

export class GetV1EmployeesEmployeeIdJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1EmployeesEmployeeIdJobsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1EmployeesEmployeeIdJobsQueryParams;
}

export class GetV1EmployeesEmployeeIdJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Job })
  jobs?: shared.Job[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}