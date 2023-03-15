import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1EmployeesEmployeeIdPaymentMethodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_id",
  })
  employeeId: string;
}
export enum PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplitByEnum {
  Amount = "Amount",
  Percentage = "Percentage",
}

export class PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplits extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "priority" })
  priority?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "split_amount" })
  splitAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}
export enum PutV1EmployeesEmployeeIdPaymentMethodRequestBodyTypeEnum {
  DirectDeposit = "Direct Deposit",
  Check = "Check",
}

export class PutV1EmployeesEmployeeIdPaymentMethodRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "split_by" })
  splitBy?: PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplitByEnum;

  @SpeakeasyMetadata({
    elemType: PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplits,
  })
  @Expose({ name: "splits" })
  @Type(() => PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplits)
  splits?: PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplits[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: PutV1EmployeesEmployeeIdPaymentMethodRequestBodyTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1EmployeesEmployeeIdPaymentMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1EmployeesEmployeeIdPaymentMethodPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1EmployeesEmployeeIdPaymentMethodRequestBody;
}

export class PutV1EmployeesEmployeeIdPaymentMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeePaymentMethod?: shared.EmployeePaymentMethod;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
