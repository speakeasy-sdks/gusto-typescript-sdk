/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export class TaxRequirements {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get All Tax Requirement States
     *
     * @remarks
     * Returns objects describing the states that have tax requirements for the company
     */
    async getV1CompaniesCompanyUuidTaxRequirements(
        companyUuid: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1CompaniesCompanyUuidTaxRequirementsResponse> {
        const req = new operations.GetV1CompaniesCompanyUuidTaxRequirementsRequest({
            companyUuid: companyUuid,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_uuid}/tax_requirements",
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

        const res: operations.GetV1CompaniesCompanyUuidTaxRequirementsResponse =
            new operations.GetV1CompaniesCompanyUuidTaxRequirementsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getV1CompaniesCompanyUuidTaxRequirements200ApplicationJSONObjects = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.getV1CompaniesCompanyUuidTaxRequirements200ApplicationJSONObjects =
                        utils.objectToClass(
                            JSON.parse(decodedRes),
                            operations.GetV1CompaniesCompanyUuidTaxRequirements200ApplicationJSON,
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
     * Get State Tax Requirements
     *
     * @remarks
     * Get all tax requirements for a given state.
     *
     * ### Metadata Examples
     *
     * ```json select
     * {
     *   "type": "select",
     *   "options": [
     *     { "label": "Semiweekly",  value: "Semi-weekly" },
     *     { "label": "Monthly",  value: "Monthly" },
     *     { "label": "Quarterly",  value: "Quarterly" },
     *   ]
     * }
     * ```
     * ```json radio
     * {
     *   "type": "radio",
     *   "options": [
     *     { "label": "No, we cannot reimburse",  value: false, short_label: "Not Reimbursable" },
     *     { "label": "Yes, we can reimburse",  value: true, short_label: "Reimbursable" },
     *   ]
     * }
     * ```
     * ```json account_number
     * {
     *   "type": "account_number",
     *   "mask": "######-##',
     *   "prefix": null
     * }
     * ```
     * ```json tax_rate
     * {
     *   "type": "tax_rate",
     *   "validation": {
     *     "type": "min_max",
     *     "min": "0.0004",
     *     "max": "0.081"
     *   }
     * }
     * ```
     *
     */
    async getV1CompaniesCompanyUuidTaxRequirementsState(
        companyUuid: string,
        state: string,
        scheduling?: boolean,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1CompaniesCompanyUuidTaxRequirementsStateResponse> {
        const req = new operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest({
            companyUuid: companyUuid,
            state: state,
            scheduling: scheduling,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_uuid}/tax_requirements/{state}",
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

        const res: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateResponse =
            new operations.GetV1CompaniesCompanyUuidTaxRequirementsStateResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.taxRequirementsState = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.TaxRequirementsState
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
     * Update State Tax Requirements
     *
     * @remarks
     * Update State Tax Requirements
     */
    async putV1CompaniesCompanyUuidTaxRequirementsState(
        companyUuid: string,
        state: string,
        requestBody?: operations.PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.PutV1CompaniesCompanyUuidTaxRequirementsStateResponse> {
        const req = new operations.PutV1CompaniesCompanyUuidTaxRequirementsStateRequest({
            companyUuid: companyUuid,
            state: state,
            requestBody: requestBody,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_uuid}/tax_requirements/{state}",
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

        const res: operations.PutV1CompaniesCompanyUuidTaxRequirementsStateResponse =
            new operations.PutV1CompaniesCompanyUuidTaxRequirementsStateResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case [200, 404].includes(httpRes?.status):
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
