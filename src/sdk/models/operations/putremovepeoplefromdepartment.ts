/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutRemovePeopleFromDepartmentContractors extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;
}

export class PutRemovePeopleFromDepartmentEmployees extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;
}

export class PutRemovePeopleFromDepartmentRequestBody extends SpeakeasyBase {
    /**
     * Array of contractors to remove from a department
     */
    @SpeakeasyMetadata({ elemType: PutRemovePeopleFromDepartmentContractors })
    @Expose({ name: "contractors" })
    @Type(() => PutRemovePeopleFromDepartmentContractors)
    contractors?: PutRemovePeopleFromDepartmentContractors[];

    /**
     * Array of employees to remove from a department
     */
    @SpeakeasyMetadata({ elemType: PutRemovePeopleFromDepartmentEmployees })
    @Expose({ name: "employees" })
    @Type(() => PutRemovePeopleFromDepartmentEmployees)
    employees?: PutRemovePeopleFromDepartmentEmployees[];

    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class PutRemovePeopleFromDepartmentRequest extends SpeakeasyBase {
    /**
     * The UUID of the department
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=department_uuid" })
    departmentUuid: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutRemovePeopleFromDepartmentRequestBody;
}

export class PutRemovePeopleFromDepartmentResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Department Object Example
     */
    @SpeakeasyMetadata()
    department?: shared.Department;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
