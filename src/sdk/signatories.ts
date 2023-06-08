/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Signatories {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete a signatory
     *
     * @remarks
     * Delete a company signatory.
     */
    async deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuid(
        req: operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_uuid}/signatories/{signatory_uuid}",
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
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse =
            new operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse({
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
     * Get all company signatories
     *
     * @remarks
     * Returns company signatories. Currently we only support a single signatory per company.
     */
    async getV1CompaniesCompanyUuidSignatories(
        req: operations.GetV1CompaniesCompanyUuidSignatoriesRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1CompaniesCompanyUuidSignatoriesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV1CompaniesCompanyUuidSignatoriesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_uuid}/signatories",
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
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetV1CompaniesCompanyUuidSignatoriesResponse =
            new operations.GetV1CompaniesCompanyUuidSignatoriesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.signatories = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.signatories = utils.objectToClass(
                        httpRes?.data,
                        shared.Signatory,
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
     * Invite a signatory
     *
     * @remarks
     * Create a signatory with minimal information. This signatory can be invited to provide more information through the `PUT /v1/companies/{company_uuid}/signatories/{signatory_uuid}` endpoint. This will start the identity verification process and allow the signatory to be verified to sign documents.
     */
    async postV1CompaniesCompanyUuidSignatoriesInvite(
        req: operations.PostV1CompaniesCompanyUuidSignatoriesInviteRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostV1CompaniesCompanyUuidSignatoriesInviteResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV1CompaniesCompanyUuidSignatoriesInviteRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_uuid}/signatories/invite",
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
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostV1CompaniesCompanyUuidSignatoriesInviteResponse =
            new operations.PostV1CompaniesCompanyUuidSignatoriesInviteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.signatory = utils.objectToClass(httpRes?.data, shared.Signatory);
                }
                break;
            case httpRes?.status == 404:
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.unprocessableEntityErrorObject = utils.objectToClass(
                        httpRes?.data,
                        shared.UnprocessableEntityErrorObject
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Create a signatory
     *
     * @remarks
     * Create a company signatory with complete information. A signatory can legally sign forms once the identity verification process is successful.
     */
    async postV1CompanySignatories(
        req: operations.PostV1CompanySignatoriesRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostV1CompanySignatoriesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV1CompanySignatoriesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_uuid}/signatories",
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
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostV1CompanySignatoriesResponse =
            new operations.PostV1CompanySignatoriesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.signatory = utils.objectToClass(httpRes?.data, shared.Signatory);
                }
                break;
            case httpRes?.status == 404:
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.unprocessableEntityErrorObject = utils.objectToClass(
                        httpRes?.data,
                        shared.UnprocessableEntityErrorObject
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update a signatory
     *
     * @remarks
     * Update a signatory that has been either invited or created. If the signatory has been created with minimal information through the `POST /v1/companies/{company_uuid}/signatories/invite` endpoint, then the first update must contain all attributes specified in the request body in order to start the identity verification process.
     */
    async putV1CompaniesCompanyUuidSignatoriesSignatoryUuid(
        req: operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/companies/{company_uuid}/signatories/{signatory_uuid}",
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
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse =
            new operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.signatory = utils.objectToClass(httpRes?.data, shared.Signatory);
                }
                break;
            case httpRes?.status == 404:
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.unprocessableEntityErrorObject = utils.objectToClass(
                        httpRes?.data,
                        shared.UnprocessableEntityErrorObject
                    );
                }
                break;
        }

        return res;
    }
}
