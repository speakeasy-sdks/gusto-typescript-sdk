/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostV1EmployeesEmployeeIdGarnishmentsRequestBody extends SpeakeasyBase {
    /**
     * Whether or not this garnishment is currently active.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "active" })
    active?: boolean;

    /**
     * The amount of the garnishment. Either a percentage or a fixed dollar amount. Represented as a float, e.g. "8.00".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: string;

    /**
     * The maximum deduction per annum. A null value indicates no maximum. Represented as a float, e.g. "200.00".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "annual_maximum" })
    annualMaximum?: string;

    /**
     * Whether the garnishment is court ordered.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "court_ordered" })
    courtOrdered: boolean;

    /**
     * Whether the amount should be treated as a percentage to be deducted per pay period.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deduct_as_percentage" })
    deductAsPercentage?: boolean;

    /**
     * The description of the garnishment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * The maximum deduction per pay period. A null value indicates no maximum. Represented as a float, e.g. "16.00".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pay_period_maximum" })
    payPeriodMaximum?: string;

    /**
     * Whether the garnishment should recur indefinitely.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recurring" })
    recurring?: boolean;

    /**
     * The number of times to apply the garnishment. Ignored if recurring is true.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "times" })
    times?: number;
}

export class PostV1EmployeesEmployeeIdGarnishmentsRequest extends SpeakeasyBase {
    /**
     * The UUID of the employee
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
    employeeId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PostV1EmployeesEmployeeIdGarnishmentsRequestBody;
}

export class PostV1EmployeesEmployeeIdGarnishmentsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    garnishment?: shared.Garnishment;

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
