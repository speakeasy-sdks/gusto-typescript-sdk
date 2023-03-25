/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

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

  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
   */
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

  /**
   * The UUID of the employee
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_uuid",
  })
  employeeUuid: string;
}

export class PutV1EmployeesEmployeeIdFederalTaxesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Example response
   */
  @SpeakeasyMetadata()
  employeeFederalTax?: shared.EmployeeFederalTax;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Unprocessable Entity
   *
   * @remarks
   *
   * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
   *
   */
  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
