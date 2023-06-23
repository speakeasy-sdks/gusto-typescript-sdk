/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
 */
export enum PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplitBy {
    Amount = "Amount",
    Percentage = "Percentage",
}

export class PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplits extends SpeakeasyBase {
    /**
     * The bank account name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The order of priority for each payment split, with priority 1 being the first bank account paid. Priority must be unique and sequential.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "priority" })
    priority?: number;

    /**
     * The cents amount allocated for each payment split
     */
    @SpeakeasyMetadata()
    @Expose({ name: "split_amount" })
    splitAmount?: number;

    /**
     * The bank account ID
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;
}

/**
 * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
 */
export enum PutV1EmployeesEmployeeIdPaymentMethodRequestBodyType {
    DirectDeposit = "Direct Deposit",
    Check = "Check",
}

export class PutV1EmployeesEmployeeIdPaymentMethodRequestBody extends SpeakeasyBase {
    /**
     * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "split_by" })
    splitBy?: PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplitBy;

    @SpeakeasyMetadata({ elemType: PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplits })
    @Expose({ name: "splits" })
    @Type(() => PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplits)
    splits?: PutV1EmployeesEmployeeIdPaymentMethodRequestBodySplits[];

    /**
     * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: PutV1EmployeesEmployeeIdPaymentMethodRequestBodyType;

    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version: string;
}

export class PutV1EmployeesEmployeeIdPaymentMethodRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PutV1EmployeesEmployeeIdPaymentMethodRequestBody;

    /**
     * The UUID of the employee
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
    employeeId: string;
}

export class PutV1EmployeesEmployeeIdPaymentMethodResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Example response
     */
    @SpeakeasyMetadata()
    employeePaymentMethod?: shared.EmployeePaymentMethod1;

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
