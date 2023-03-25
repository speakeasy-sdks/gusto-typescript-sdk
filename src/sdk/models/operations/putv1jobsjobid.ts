/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * Update a job.
 */
export class PutV1JobsJobIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hire_date" })
  hireDate?: string;

  /**
   * The UUID of the job's location.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "location_uuid" })
  locationUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1JobsJobIdRequest extends SpeakeasyBase {
  /**
   * Update a job.
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutV1JobsJobIdRequestBody;

  /**
   * The UUID of the job
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=job_id",
  })
  jobId: string;
}

export class PutV1JobsJobIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Example response
   */
  @SpeakeasyMetadata()
  job?: shared.Job;

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
