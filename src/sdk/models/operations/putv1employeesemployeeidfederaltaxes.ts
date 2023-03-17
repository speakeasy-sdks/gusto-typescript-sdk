import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1EmployeesEmployeeIdFederalTaxesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "deductions" })
  deductions?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dependents_amount" })
  dependentsAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "extra_withholding" })
  extraWithholding?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "filing_status" })
  filingStatus?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "other_income" })
  otherIncome?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "two_jobs" })
  twoJobs?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;

  @SpeakeasyMetadata()
  @Expose({ name: "w4_data_type" })
  w4DataType?: string;
}

export class PutV1EmployeesEmployeeIdFederalTaxesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutV1EmployeesEmployeeIdFederalTaxesRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_uuid",
  })
  employeeUuid: string;
}

export class PutV1EmployeesEmployeeIdFederalTaxesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeeFederalTax?: shared.EmployeeFederalTax;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
