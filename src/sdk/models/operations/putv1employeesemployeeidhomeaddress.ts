import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PutV1EmployeesEmployeeIdHomeAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}

export class PutV1EmployeesEmployeeIdHomeAddressRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_1" })
  street1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_2" })
  street2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;

  @SpeakeasyMetadata()
  @Expose({ name: "zip" })
  zip?: string;
}

export class PutV1EmployeesEmployeeIdHomeAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1EmployeesEmployeeIdHomeAddressPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1EmployeesEmployeeIdHomeAddressRequestBody;
}

export class PutV1EmployeesEmployeeIdHomeAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeeAddress?: shared.EmployeeAddress;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}