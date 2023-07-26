/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PutV1EmployeesEmployeeIdHomeAddressRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city?: string;

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
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version: string;

    @SpeakeasyMetadata()
    @Expose({ name: "zip" })
    zip?: string;
}

export class PutV1EmployeesEmployeeIdHomeAddressRequest extends SpeakeasyBase {
    /**
     * The UUID of the employee
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
    employeeId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutV1EmployeesEmployeeIdHomeAddressRequestBody;
}

export class PutV1EmployeesEmployeeIdHomeAddressResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    employeeAddress?: shared.EmployeeAddress;

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
