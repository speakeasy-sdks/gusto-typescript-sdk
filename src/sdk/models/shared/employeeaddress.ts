/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Example response
 */
export class EmployeeAddress extends SpeakeasyBase {
  /**
   * The status of the location. Inactive locations have been deleted, but may still have historical data associated with them.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * The UUID of the employee
   */
  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_1" })
  street1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_2" })
  street2?: string;

  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;

  @SpeakeasyMetadata()
  @Expose({ name: "zip" })
  zip?: string;
}
