/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class CompanyBenefits {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete a company benefit
     *
     * @remarks
     * The following must be true in order to delete a company benefit
     *   - There are no employee benefits associated with the company benefit
     *   - There are no payroll items associated with the company benefit
     *   - The benefit is not managed by a Partner or by Gusto (type must be 'External')
     */
    async deleteV1CompanyBenefitsCompanyBenefitId(
        req: operations.DeleteV1CompanyBenefitsCompanyBenefitIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteV1CompanyBenefitsCompanyBenefitIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteV1CompanyBenefitsCompanyBenefitIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/company_benefits/{company_benefit_id}",
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
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteV1CompanyBenefitsCompanyBenefitIdResponse =
            new operations.DeleteV1CompanyBenefitsCompanyBenefitIdResponse({
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
                    res.deleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSONObject =
                        utils.objectToClass(
                            JSON.parse(decodedRes),
                            operations.DeleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSON
                        );
                }
                break;
        }

        return res;
    }

    /**
     * Get all benefits supported by Gusto
     *
     * @remarks
     * Returns all benefits supported by Gusto.
     *
     * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
     *
     * scope: `benefits:read`
     */
    async getV1Benefits(config?: AxiosRequestConfig): Promise<operations.GetV1BenefitsResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/benefits";

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

        const res: operations.GetV1BenefitsResponse = new operations.GetV1BenefitsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.supportedBenefits = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.supportedBenefits = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.SupportedBenefit,
                        resFieldDepth
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * Get a supported benefit by ID
     *
     * @remarks
     * Returns a benefit supported by Gusto.
     *
     * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
     *
     * scope: `benefits:read`
     */
    async getV1BenefitsBenefitId(
        req: operations.GetV1BenefitsBenefitIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1BenefitsBenefitIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV1BenefitsBenefitIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v1/benefits/{benefit_id}", req);

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

        const res: operations.GetV1BenefitsBenefitIdResponse =
            new operations.GetV1BenefitsBenefitIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.supportedBenefit = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.SupportedBenefit
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * Get benefit fields requirements by ID
     *
     * @remarks
     * Returns field requirements for the requested benefit type.
     *
     * scope: `benefits:read`
     */
    async getV1BenefitsBenefitsIdRequirements(
        req: operations.GetV1BenefitsBenefitsIdRequirementsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1BenefitsBenefitsIdRequirementsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV1BenefitsBenefitsIdRequirementsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/benefits/{benefit_id}/requirements",
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

        const res: operations.GetV1BenefitsBenefitsIdRequirementsResponse =
            new operations.GetV1BenefitsBenefitsIdRequirementsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.benefitTypeRequirements = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.BenefitTypeRequirements
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * Get company benefit summary by company benefit id.
     *
     * @remarks
     * Returns summary benefit data for the requested company benefit id.
     *
     * scope: `benefits:read`
     */
    async getV1BenefitsCompanyBenefitIdSummary(
        req: operations.GetV1BenefitsCompanyBenefitIdSummaryRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1BenefitsCompanyBenefitIdSummaryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV1BenefitsCompanyBenefitIdSummaryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/company_benefits/{company_benefit_id}/summary",
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

        const res: operations.GetV1BenefitsCompanyBenefitIdSummaryResponse =
            new operations.GetV1BenefitsCompanyBenefitIdSummaryResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.benefitSummary = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.BenefitSummary
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * Get benefits for a company
     *
     * @remarks
     * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
     *
     * Note that company benefits can be deactivated only when no employees are enrolled.
     *
     * scope: `company_benefits:read`
     */
    async getV1CompaniesCompanyIdCompanyBenefits(
        req: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1CompaniesCompanyIdCompanyBenefitsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_id}/company_benefits",
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

        const res: operations.GetV1CompaniesCompanyIdCompanyBenefitsResponse =
            new operations.GetV1CompaniesCompanyIdCompanyBenefitsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.companyBenefits = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.companyBenefits = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CompanyBenefit,
                        resFieldDepth
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * Get a company benefit
     *
     * @remarks
     * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
     *
     * Note that company benefits can be deactivated only when no employees are enrolled.
     *
     * When with_employee_benefits parameter with true value is passed, employee_benefits:read scope is required to return employee_benefits.
     *
     * scope: `company_benefits:read`
     */
    async getV1CompanyBenefitsCompanyBenefitId(
        req: operations.GetV1CompanyBenefitsCompanyBenefitIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1CompanyBenefitsCompanyBenefitIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV1CompanyBenefitsCompanyBenefitIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/company_benefits/{company_benefit_id}",
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

        const res: operations.GetV1CompanyBenefitsCompanyBenefitIdResponse =
            new operations.GetV1CompanyBenefitsCompanyBenefitIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.companyBenefit = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CompanyBenefit
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * Create a company benefit
     *
     * @remarks
     * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
     *
     * Note that company benefits can be deactivated only when no employees are enrolled.
     *
     * scope: `company_benefits:write`
     */
    async postV1CompaniesCompanyIdCompanyBenefits(
        req: operations.PostV1CompaniesCompanyIdCompanyBenefitsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostV1CompaniesCompanyIdCompanyBenefitsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV1CompaniesCompanyIdCompanyBenefitsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_id}/company_benefits",
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

        const res: operations.PostV1CompaniesCompanyIdCompanyBenefitsResponse =
            new operations.PostV1CompaniesCompanyIdCompanyBenefitsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.companyBenefit = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CompanyBenefit
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
     * Update a company benefit
     *
     * @remarks
     * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
     *
     * Note that company benefits can be deactivated only when no employees are enrolled.
     *
     * scope: `company_benefits:write`
     */
    async putV1CompanyBenefitsCompanyBenefitId(
        req: operations.PutV1CompanyBenefitsCompanyBenefitIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PutV1CompanyBenefitsCompanyBenefitIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutV1CompanyBenefitsCompanyBenefitIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/company_benefits/{company_benefit_id}",
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

        const res: operations.PutV1CompanyBenefitsCompanyBenefitIdResponse =
            new operations.PutV1CompanyBenefitsCompanyBenefitIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.companyBenefit = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CompanyBenefit
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
