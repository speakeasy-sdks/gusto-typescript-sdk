/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetDepartmentRequest extends SpeakeasyBase {
    /**
     * The UUID of the department
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=department_uuid" })
    departmentUuid: string;
}

export class GetDepartmentResponse extends SpeakeasyBase {
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
