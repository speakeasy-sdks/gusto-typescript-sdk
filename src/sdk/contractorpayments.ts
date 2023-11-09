/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export class ContractorPayments {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Cancel a contractor payment
     *
     * @remarks
     * Cancels and deletes a contractor payment. If the contractor payment has already started processing, the payment cannot be cancelled.
     *
     * scope: `payrolls:run`
     */
    async deleteV1CompaniesCompanyIdContractorPaymentContractorPayment(
        companyId: string,
        contractorPaymentId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse> {
        const req =
            new operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest({
                companyId: companyId,
                contractorPaymentId: contractorPaymentId,
            });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_id}/contractor_payments/{contractor_payment_id}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "*/*";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse =
            new operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse({
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
     * Get a single contractor payment
     *
     * @remarks
     * Returns a single contractor payments
     *
     * scope: `payrolls:read`
     */
    async getV1CompaniesCompanyIdContractorPaymentContractorPayment(
        companyId: string,
        contractorPaymentId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse> {
        const req = new operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest(
            {
                companyId: companyId,
                contractorPaymentId: contractorPaymentId,
            }
        );
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_id}/contractor_payments/{contractor_payment_id}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse =
            new operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.contractorPayment = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ContractorPayment
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
     * Get contractor payments for a company
     *
     * @remarks
     * Returns an object containing individual contractor payments, within a given time period, including totals.
     *
     * scope: `payrolls:read`
     */
    async getV1CompaniesCompanyIdContractorPayments(
        req: operations.GetV1CompaniesCompanyIdContractorPaymentsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1CompaniesCompanyIdContractorPaymentsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV1CompaniesCompanyIdContractorPaymentsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_id}/contractor_payments",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetV1CompaniesCompanyIdContractorPaymentsResponse =
            new operations.GetV1CompaniesCompanyIdContractorPaymentsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.oneOf = JSON.parse(decodedRes);
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
     * Get a single contractor payment receipt
     *
     * @remarks
     * Returns a contractor payment receipt.
     *
     * Notes:
     * * Receipts are only available for direct deposit payments and are only available once those payments have been funded.
     * * Payroll Receipt requests for payrolls which do not have receipts available (e.g. payment by check) will return a 404 status.
     * * Hour and dollar amounts are returned as string representations of numeric decimals.
     * * Dollar amounts are represented to the cent.
     * * If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).
     *
     * scope: `payrolls:read`
     */
    async getV1ContractorPaymentsContractorPaymentUuidReceipt(
        contractorPaymentUuid: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse> {
        const req = new operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest({
            contractorPaymentUuid: contractorPaymentUuid,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/v1/contractor_payments/{contractor_payment_uuid}/receipt",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse =
            new operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.contractorPaymentReceipt = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ContractorPaymentReceipt
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
     * Create a contractor payment
     *
     * @remarks
     * Pay a contractor. Information needed depends on the contractor's wage type (hourly vs fixed)
     *
     * scope: `payrolls:run`
     */
    async postV1CompaniesCompanyIdContractorPayments(
        companyId: string,
        requestBody?: operations.PostV1CompaniesCompanyIdContractorPaymentsRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.PostV1CompaniesCompanyIdContractorPaymentsResponse> {
        const req = new operations.PostV1CompaniesCompanyIdContractorPaymentsRequest({
            companyId: companyId,
            requestBody: requestBody,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_id}/contractor_payments",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
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

        const res: operations.PostV1CompaniesCompanyIdContractorPaymentsResponse =
            new operations.PostV1CompaniesCompanyIdContractorPaymentsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.contractorPayment = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ContractorPayment
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
