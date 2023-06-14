/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Companies {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get a company
     *
     * @remarks
     * Get a company.
     * The employees:read scope is required to return home_address and non-work locations.
     * The company_admin:read scope is required to return primary_payroll_admin.
     * The signatories:read scope is required to return primary_signatory.
     *
     * scope: `companies:read`
     */
    async getV1Companies(
        req: operations.GetV1CompaniesRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1CompaniesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV1CompaniesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}", req);

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

        const res: operations.GetV1CompaniesResponse = new operations.GetV1CompaniesResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.company = utils.objectToClass(JSON.parse(decodedRes), shared.Company);
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * Get all the admins at a company
     *
     * @remarks
     * Returns a list of all the admins at a company
     */
    async getV1CompaniesCompanyIdAdmins(
        req: operations.GetV1CompaniesCompanyIdAdminsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1CompaniesCompanyIdAdminsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV1CompaniesCompanyIdAdminsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/admins", req);

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

        const res: operations.GetV1CompaniesCompanyIdAdminsResponse =
            new operations.GetV1CompaniesCompanyIdAdminsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.admins = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.admins = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Admin,
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
     * Get the custom fields of a company
     *
     * @remarks
     * Returns a list of the custom fields of the company. Useful when you need to know the schema of custom fields for an entire company
     *
     * scope: `companies:read`
     */
    async getV1CompaniesCompanyIdCustomFields(
        req: operations.GetV1CompaniesCompanyIdCustomFieldsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1CompaniesCompanyIdCustomFieldsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV1CompaniesCompanyIdCustomFieldsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_id}/custom_fields",
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

        const res: operations.GetV1CompaniesCompanyIdCustomFieldsResponse =
            new operations.GetV1CompaniesCompanyIdCustomFieldsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getV1CompaniesCompanyIdCustomFields200ApplicationJSONObject =
                        utils.objectToClass(
                            JSON.parse(decodedRes),
                            operations.GetV1CompaniesCompanyIdCustomFields200ApplicationJSON
                        );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * Finish company onboarding
     *
     * @remarks
     * Finalize a given company's onboarding process.
     *
     * ### Approve a company in demo
     * After a company is finished onboarding, Gusto requires an additional step to review and approve that company. In production environments, this step is required for risk-analysis purposes.
     *
     * We provide the endpoint `PUT '/v1/companies/{company_uuid}/approve'` to facilitate company approvals in the demo environment.
     *
     * ```shell
     * PUT '/v1/companies/89771af8-b964-472e-8064-554dfbcb56d9/approve'
     *
     * # Response: Company object, with company_status: 'Approved'
     * ```
     */
    async getV1CompanyFinishOnboarding(
        req: operations.GetV1CompanyFinishOnboardingRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1CompanyFinishOnboardingResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV1CompanyFinishOnboardingRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_uuid}/finish_onboarding",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
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
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetV1CompanyFinishOnboardingResponse =
            new operations.GetV1CompanyFinishOnboardingResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.companyOnboardingStatus = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CompanyOnboardingStatus
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
     * Get the company's onboarding status
     *
     * @remarks
     * Get company's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.
     */
    async getV1CompanyOnboardingStatus(
        req: operations.GetV1CompanyOnboardingStatusRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1CompanyOnboardingStatusResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV1CompanyOnboardingStatusRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_uuid}/onboarding_status",
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

        const res: operations.GetV1CompanyOnboardingStatusResponse =
            new operations.GetV1CompanyOnboardingStatusResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.companyOnboardingStatus = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CompanyOnboardingStatus
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * Accept terms of service for a company user
     *
     * @remarks
     * Accept the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms). The user must have a role in the company in order to accept the Terms of Service.
     */
    async postPartnerManagedCompaniesCompanyUuidAcceptTermsOfService(
        req: operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest(
                req
            );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/partner_managed_companies/{company_uuid}/accept_terms_of_service",
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

        const res: operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse =
            new operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.postPartnerManagedCompaniesCompanyUuidAcceptTermsOfService200ApplicationJSONObject =
                        utils.objectToClass(
                            JSON.parse(decodedRes),
                            operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfService200ApplicationJSON
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
     * Retrieve terms of service status for a company user
     *
     * @remarks
     * Retrieve the user acceptance status of the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
     */
    async postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService(
        req: operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req =
                new operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest(
                    req
                );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/partner_managed_companies/{company_uuid}/retrieve_terms_of_service",
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

        const res: operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse =
            new operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService200ApplicationJSONObject =
                        utils.objectToClass(
                            JSON.parse(decodedRes),
                            operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService200ApplicationJSON
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
     * Create an admin for the company
     *
     * @remarks
     * Creates a new admin for a company. If the email matches an existing user, this will create an admin account for the current user. Otherwise, this will create a new user.
     */
    async postV1CompaniesCompanyIdAdmins(
        req: operations.PostV1CompaniesCompanyIdAdminsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostV1CompaniesCompanyIdAdminsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV1CompaniesCompanyIdAdminsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/admins", req);

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

        const res: operations.PostV1CompaniesCompanyIdAdminsResponse =
            new operations.PostV1CompaniesCompanyIdAdminsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.admin = utils.objectToClass(JSON.parse(decodedRes), shared.Admin);
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
     * Create a partner managed company
     *
     * @remarks
     * Create a new partner managed company
     */
    async postV1PartnerManagedCompanies(
        req: operations.PostV1PartnerManagedCompaniesRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.PostV1PartnerManagedCompaniesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV1PartnerManagedCompaniesRequestBody(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/partner_managed_companies";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
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

        const res: operations.PostV1PartnerManagedCompaniesResponse =
            new operations.PostV1PartnerManagedCompaniesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.postV1PartnerManagedCompanies200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.PostV1PartnerManagedCompanies200ApplicationJSON
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
     * Create a company
     *
     * @remarks
     * ### Overview
     * The company provisioning API provides a way to create a Gusto company as part of your integration. When you successfully call the API, the API does the following:
     * * Creates a new company in Gusto.
     * * Creates a new user in Gusto.
     * * Makes the new user the primary payroll administrator of the new company.
     * * Sends a welcome email to the new user.
     * In the response, you will receive an account claim URL. Redirect the user to this URL to complete their account setup inside of Gusto
     * ### Authentication
     * Due to the nature of this endpoint, Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to provision Gusto accounts. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
     * ```
     * Content-Type: application/json
     * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
     * ```
     */
    async postV1Provision(
        req: operations.PostV1ProvisionRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.PostV1ProvisionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV1ProvisionRequestBody(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/provision";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
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

        const res: operations.PostV1ProvisionResponse = new operations.PostV1ProvisionResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.postV1Provision200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.PostV1Provision200ApplicationJSON
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
     * Migrate company to embedded payroll
     *
     * @remarks
     * Migrate an existing Gusto customer to your embedded payroll product. To use this endpoint, the customer will need to connect their Gusto account to your application using [OAuth2](https://docs.gusto.com/embedded-payroll/docs/oauth2) then view and [accept the Embedded Payroll Terms of Service](https://docs.gusto.com/embedded-payroll/reference/post-partner-managed-companies-company_uuid-accept_terms_of_service).
     */
    async putV1PartnerManagedCompaniesCompanyUuidMigrate(
        req: operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/partner_managed_companies/{company_uuid}/migrate",
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

        const res: operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse =
            new operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.putV1PartnerManagedCompaniesCompanyUuidMigrate200ApplicationJSONObject =
                        utils.objectToClass(
                            JSON.parse(decodedRes),
                            operations.PutV1PartnerManagedCompaniesCompanyUuidMigrate200ApplicationJSON
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
