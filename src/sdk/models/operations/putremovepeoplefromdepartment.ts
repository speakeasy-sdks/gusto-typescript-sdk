/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PutRemovePeopleFromDepartmentRequestBody extends SpeakeasyBase {
  /**
   * Array of contractors to remove from a department
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contractors" })
  contractors?: any[];

  /**
   * Array of employees to remove from a department
   */
  @SpeakeasyMetadata()
  @Expose({ name: "employees" })
  employees?: any[];

  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}

export class PutRemovePeopleFromDepartmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutRemovePeopleFromDepartmentRequestBody;

  /**
   * The UUID of the department
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=department_uuid",
  })
  departmentUuid: string;
}

export class PutRemovePeopleFromDepartmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Department Object Example
   */
  @SpeakeasyMetadata()
  department?: shared.Department;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
