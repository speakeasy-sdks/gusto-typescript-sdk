/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Include the requested attribute(s) in each employee response, multiple options are comma separated. Available options:
 *
 * @remarks
 * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
 * - custom_fields: Include employees' custom fields
 */
export enum GetV1EmployeesIncludeEnum {
  AllCompensations = "all_compensations",
  CustomFields = "custom_fields",
}

export class GetV1EmployeesRequest extends SpeakeasyBase {
  /**
   * The UUID of the employee
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_id",
  })
  employeeId: string;

  /**
   * Include the requested attribute(s) in each employee response, multiple options are comma separated. Available options:
   *
   * @remarks
   * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
   * - custom_fields: Include employees' custom fields
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=include",
  })
  include?: GetV1EmployeesIncludeEnum;
}

export class GetV1EmployeesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Example response
   */
  @SpeakeasyMetadata()
  employee?: shared.Employee;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
