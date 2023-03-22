/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

/**
 * Available options:
 *
 * @remarks
 * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
 */
export enum GetV1JobsJobIdCompensationsIncludeEnum {
  AllCompensations = "all_compensations",
}

export class GetV1JobsJobIdCompensationsRequest extends SpeakeasyBase {
  /**
   * Available options:
   *
   * @remarks
   * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=include",
  })
  include?: GetV1JobsJobIdCompensationsIncludeEnum;

  /**
   * The UUID of the job
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=job_id",
  })
  jobId: string;

  /**
   * The page that is requested. When unspecified, will load all objects.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  /**
   * Number of objects per page. When unspecified, will default to 25
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per" })
  per?: number;
}

export class GetV1JobsJobIdCompensationsResponse extends SpeakeasyBase {
  /**
   * Example response
   */
  @SpeakeasyMetadata({ elemType: shared.Compensation })
  compensations?: shared.Compensation[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
