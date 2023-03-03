import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PostV1EmployeesEmployeeIdGarnishmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}

export class PostV1EmployeesEmployeeIdGarnishmentsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "annual_maximum" })
  annualMaximum?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "court_ordered" })
  courtOrdered: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "deduct_as_percentage" })
  deductAsPercentage?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pay_period_maximum" })
  payPeriodMaximum?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recurring" })
  recurring?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "times" })
  times?: number;
}

export class PostV1EmployeesEmployeeIdGarnishmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1EmployeesEmployeeIdGarnishmentsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1EmployeesEmployeeIdGarnishmentsRequestBody;
}

export class PostV1EmployeesEmployeeIdGarnishmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  garnishment?: shared.Garnishment;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}