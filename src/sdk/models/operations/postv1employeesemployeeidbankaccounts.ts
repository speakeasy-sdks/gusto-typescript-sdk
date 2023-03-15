import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostV1EmployeesEmployeeIdBankAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_id",
  })
  employeeId: string;
}
export enum PostV1EmployeesEmployeeIdBankAccountsRequestBodyAccountTypeEnum {
  Checking = "Checking",
  Savings = "Savings",
}

export class PostV1EmployeesEmployeeIdBankAccountsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "account_number" })
  accountNumber: string;

  @SpeakeasyMetadata()
  @Expose({ name: "account_type" })
  accountType: PostV1EmployeesEmployeeIdBankAccountsRequestBodyAccountTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "routing_number" })
  routingNumber: string;
}

export class PostV1EmployeesEmployeeIdBankAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1EmployeesEmployeeIdBankAccountsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1EmployeesEmployeeIdBankAccountsRequestBody;
}

export class PostV1EmployeesEmployeeIdBankAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeeBankAccount?: shared.EmployeeBankAccount;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
