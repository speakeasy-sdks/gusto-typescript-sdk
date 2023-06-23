/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Available options:
 *
 * @remarks
 * - all_compensations: Include all effective dated compensations for the job instead of only the current compensation
 */
export enum GetV1JobsJobIdInclude {
    AllCompensations = "all_compensations",
}

export class GetV1JobsJobIdRequest extends SpeakeasyBase {
    /**
     * The UUID of the job
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job_id" })
    jobId: string;

    /**
     * Available options:
     *
     * @remarks
     * - all_compensations: Include all effective dated compensations for the job instead of only the current compensation
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
    include?: GetV1JobsJobIdInclude;
}

export class GetV1JobsJobIdResponse extends SpeakeasyBase {
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
}
