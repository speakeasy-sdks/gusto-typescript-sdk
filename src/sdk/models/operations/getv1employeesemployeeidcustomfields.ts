import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class GetV1EmployeesEmployeeIdCustomFieldsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}

export class GetV1EmployeesEmployeeIdCustomFieldsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per" })
  per?: number;
}

export class GetV1EmployeesEmployeeIdCustomFieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1EmployeesEmployeeIdCustomFieldsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1EmployeesEmployeeIdCustomFieldsQueryParams;
}

export class GetV1EmployeesEmployeeIdCustomFields200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.EmployeeCustomField })
  @Expose({ name: "custom_fields" })
  @Type(() => shared.EmployeeCustomField)
  customFields?: shared.EmployeeCustomField[];
}

export class GetV1EmployeesEmployeeIdCustomFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getV1EmployeesEmployeeIdCustomFields200ApplicationJSONObject?: GetV1EmployeesEmployeeIdCustomFields200ApplicationJSON;
}