/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest extends SpeakeasyBase {
    /**
     * The UUID of the bank account
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bank_account_uuid" })
    bankAccountUuid: string;

    /**
     * The UUID of the employee
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
    employeeId: string;
}

export class DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
