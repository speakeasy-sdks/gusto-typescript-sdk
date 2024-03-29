/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class EmployeeBenefits {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete an employee benefit
     *
     * @remarks
     * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
     *
     * scope: `employee_benefits:write`
     */
    async deleteV1EmployeeBenefitsEmployeeBenefitId(
        employeeBenefitId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse> {
        const req = new operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest({
            employeeBenefitId: employeeBenefitId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/employee_benefits/{employee_benefit_id}",
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

        const res: operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse =
            new operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse({
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
     * Get an employee benefit
     *
     * @remarks
     * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
     *
     * scope: `employee_benefits:read`
     */
    async getV1EmployeeBenefitsEmployeeBenefitId(
        employeeBenefitId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1EmployeeBenefitsEmployeeBenefitIdResponse> {
        const req = new operations.GetV1EmployeeBenefitsEmployeeBenefitIdRequest({
            employeeBenefitId: employeeBenefitId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/employee_benefits/{employee_benefit_id}",
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

        const res: operations.GetV1EmployeeBenefitsEmployeeBenefitIdResponse =
            new operations.GetV1EmployeeBenefitsEmployeeBenefitIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.employeeBenefit = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.EmployeeBenefit
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * Get all benefits for an employee
     *
     * @remarks
     * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
     *
     * Returns an array of all employee benefits for this employee
     *
     * scope: `employee_benefits:read`
     */
    async getV1EmployeesEmployeeIdEmployeeBenefits(
        employeeId: string,
        page?: number,
        per?: number,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1EmployeesEmployeeIdEmployeeBenefitsResponse> {
        const req = new operations.GetV1EmployeesEmployeeIdEmployeeBenefitsRequest({
            employeeId: employeeId,
            page: page,
            per: per,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/employees/{employee_id}/employee_benefits",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetV1EmployeesEmployeeIdEmployeeBenefitsResponse =
            new operations.GetV1EmployeesEmployeeIdEmployeeBenefitsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.employeeBenefits = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.employeeBenefits = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.EmployeeBenefit,
                        resFieldDepth
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * Create year-to-date benefit amounts from a different company
     *
     * @remarks
     * Year-to-date benefit amounts from a different company represents the amount of money added to an employees plan during a current year, made outside of the current contribution when they were employed at a different company.
     *
     * scope: `employee_benefits:write`
     */
    async postEmployeeYtdBenefitAmountsFromDifferentCompany(
        employeeId: string,
        requestBody?: operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse> {
        const req = new operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest({
            employeeId: employeeId,
            requestBody: requestBody,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/employees/{employee_id}/ytd_benefit_amounts_from_different_company",
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
        headers["Accept"] = "application/json";

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

        const res: operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse =
            new operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case [204, 404].includes(httpRes?.status):
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.unprocessableEntityErrorObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.UnprocessableEntityErrorObject
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Create an employee benefit
     *
     * @remarks
     * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
     *
     * scope: `employee_benefits:write`
     */
    async postV1EmployeesEmployeeIdEmployeeBenefits(
        employeeId: string,
        requestBody?: operations.PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.PostV1EmployeesEmployeeIdEmployeeBenefitsResponse> {
        const req = new operations.PostV1EmployeesEmployeeIdEmployeeBenefitsRequest({
            employeeId: employeeId,
            requestBody: requestBody,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/employees/{employee_id}/employee_benefits",
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
        headers["Accept"] = "application/json";

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

        const res: operations.PostV1EmployeesEmployeeIdEmployeeBenefitsResponse =
            new operations.PostV1EmployeesEmployeeIdEmployeeBenefitsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.employeeBenefit = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.EmployeeBenefit
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
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
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update an employee benefit
     *
     * @remarks
     * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
     *
     * scope: `employee_benefits:write`
     */
    async putV1EmployeeBenefitsEmployeeBenefitId(
        employeeBenefitId: string,
        requestBody?: operations.PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.PutV1EmployeeBenefitsEmployeeBenefitIdResponse> {
        const req = new operations.PutV1EmployeeBenefitsEmployeeBenefitIdRequest({
            employeeBenefitId: employeeBenefitId,
            requestBody: requestBody,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/employee_benefits/{employee_benefit_id}",
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
        headers["Accept"] = "application/json";

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

        const res: operations.PutV1EmployeeBenefitsEmployeeBenefitIdResponse =
            new operations.PutV1EmployeeBenefitsEmployeeBenefitIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.employeeBenefit = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.EmployeeBenefit
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
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
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
