/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class GeneratedDocuments {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get a generated document
     *
     * @remarks
     * Get a generated document given the request_uuid. The response will include the generation request's status and, if complete, the relevant document urls.
     *
     * scope: `generated_documents:read`
     */
    async getV1GeneratedDocumentsDocumentTypeRequestUuid(
        req: operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/generated_documents/{document_type}/{request_uuid}",
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

        const res: operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse =
            new operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.generatedDocument = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.GeneratedDocument
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }
}
