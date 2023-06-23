/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class EmployeePaymentMethod {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete an employee bank account
     *
     * @remarks
     * Deletes an employee bank account. To update an employee's bank account details, delete the bank account first and create a new one.
     */
    async deleteV1EmployeesEmployeeIdBankAccountsBankAccountId(
        bankAccountUuid: string,
        employeeId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse> {
        const req = new operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest({
            bankAccountUuid: bankAccountUuid,
            employeeId: employeeId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/employees/{employee_id}/bank_accounts/{bank_account_uuid}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse =
            new operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case [204, 404].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * Get an employee's payment method
     *
     * @remarks
     * Fetches an employee's payment method. An employee payment method describes how the payment should be split across the employee's associated bank accounts.
     */
    async getV1EmployeesEmployeeIdPaymentMethod(
        employeeId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1EmployeesEmployeeIdPaymentMethodResponse> {
        const req = new operations.GetV1EmployeesEmployeeIdPaymentMethodRequest({
            employeeId: employeeId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/employees/{employee_id}/payment_method",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetV1EmployeesEmployeeIdPaymentMethodResponse =
            new operations.GetV1EmployeesEmployeeIdPaymentMethodResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.employeePaymentMethod = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.EmployeePaymentMethod1
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * Create an employee bank account
     *
     * @remarks
     * Creates an employee bank account. An employee can have multiple bank accounts. Note that creating an employee bank account will also update the employee's payment method.
     */
    async postV1EmployeesEmployeeIdBankAccounts(
        employeeId: string,
        requestBody?: operations.PostV1EmployeesEmployeeIdBankAccountsRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.PostV1EmployeesEmployeeIdBankAccountsResponse> {
        const req = new operations.PostV1EmployeesEmployeeIdBankAccountsRequest({
            employeeId: employeeId,
            requestBody: requestBody,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/employees/{employee_id}/bank_accounts",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostV1EmployeesEmployeeIdBankAccountsResponse =
            new operations.PostV1EmployeesEmployeeIdBankAccountsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.employeeBankAccount = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.EmployeeBankAccount
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.unprocessableEntityErrorObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.UnprocessableEntityErrorObject
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update an employee's payment method
     *
     * @remarks
     * Updates an employee's payment method. Note that creating an employee bank account will also update the employee's payment method.
     */
    async putV1EmployeesEmployeeIdPaymentMethod(
        employeeId: string,
        requestBody?: operations.PutV1EmployeesEmployeeIdPaymentMethodRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.PutV1EmployeesEmployeeIdPaymentMethodResponse> {
        const req = new operations.PutV1EmployeesEmployeeIdPaymentMethodRequest({
            employeeId: employeeId,
            requestBody: requestBody,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/employees/{employee_id}/payment_method",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PutV1EmployeesEmployeeIdPaymentMethodResponse =
            new operations.PutV1EmployeesEmployeeIdPaymentMethodResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.employeePaymentMethod = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.EmployeePaymentMethod1
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.unprocessableEntityErrorObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.UnprocessableEntityErrorObject
                    );
                }
                break;
        }

        return res;
    }
}
