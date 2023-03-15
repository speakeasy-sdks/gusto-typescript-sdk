import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=bank_account_uuid",
  })
  bankAccountUuid: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_id",
  })
  employeeId: string;
}

export class DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdPathParams;
}

export class DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
