import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1EmployeesEmployeeIdGarnishmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}

export class GetV1EmployeesEmployeeIdGarnishmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per" })
  per?: number;
}

export class GetV1EmployeesEmployeeIdGarnishmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1EmployeesEmployeeIdGarnishmentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1EmployeesEmployeeIdGarnishmentsQueryParams;
}

export class GetV1EmployeesEmployeeIdGarnishmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Garnishment })
  garnishments?: shared.Garnishment[];

  @SpeakeasyMetadata()
  statusCode: number;
}