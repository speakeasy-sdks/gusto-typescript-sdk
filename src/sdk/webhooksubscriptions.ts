/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class WebhookSubscriptions {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete a webhook subscription
     *
     * @remarks
     * Deletes the Webhook Subscription associated with the provided UUID.
     * scope: `webhook_subscriptions:write`
     * ### Authentication
     * Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
     * ```
     * Content-Type: application/json
     * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
     * ```
     *
     */
    async deleteV1WebhookSubscriptionUuid(
        webhookSubscriptionUuid: string,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteV1WebhookSubscriptionUuidResponse> {
        const req = new operations.DeleteV1WebhookSubscriptionUuidRequest({
            webhookSubscriptionUuid: webhookSubscriptionUuid,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/webhook_subscriptions/{webhook_subscription_uuid}",
            req
        );

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

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

        const res: operations.DeleteV1WebhookSubscriptionUuidResponse =
            new operations.DeleteV1WebhookSubscriptionUuidResponse({
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
     * Get a webhook subscription
     *
     * @remarks
     * Returns the Webhook Subscription associated with the provided UUID.
     * scope: `webhook_subscriptions:read`
     * ### Authentication
     * Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
     * ```
     * Content-Type: application/json
     * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
     * ```
     *
     */
    async getV1WebhookSubscriptionUuid(
        webhookSubscriptionUuid: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1WebhookSubscriptionUuidResponse> {
        const req = new operations.GetV1WebhookSubscriptionUuidRequest({
            webhookSubscriptionUuid: webhookSubscriptionUuid,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/webhook_subscriptions/{webhook_subscription_uuid}",
            req
        );

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

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

        const res: operations.GetV1WebhookSubscriptionUuidResponse =
            new operations.GetV1WebhookSubscriptionUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.webhookSubscription = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WebhookSubscription
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
     * Request the webhook subscription verification_token
     *
     * @remarks
     * Request that the webhook subscription `verification_token` be POSTed to the Subscription URL.
     * scope: `webhook_subscriptions:write`
     * ### Authentication
     * Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
     * ```
     * Content-Type: application/json
     * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
     * ```
     *
     */
    async getV1WebhookSubscriptionVerificationTokenUuid(
        webhookSubscriptionUuid: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1WebhookSubscriptionVerificationTokenUuidResponse> {
        const req = new operations.GetV1WebhookSubscriptionVerificationTokenUuidRequest({
            webhookSubscriptionUuid: webhookSubscriptionUuid,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/webhook_subscriptions/{webhook_subscription_uuid}/request_verification_token",
            req
        );

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";

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

        const res: operations.GetV1WebhookSubscriptionVerificationTokenUuidResponse =
            new operations.GetV1WebhookSubscriptionVerificationTokenUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case [200, 404].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * List webhook subscriptions
     *
     * @remarks
     * Returns all webhook subscriptions associated with the provided Partner API token.
     * scope: `webhook_subscriptions:read`
     * ### Authentication
     * Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
     * ```
     * Content-Type: application/json
     * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
     * ```
     */
    async getV1WebhookSubscriptions(
        config?: AxiosRequestConfig
    ): Promise<operations.GetV1WebhookSubscriptionsResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/webhook_subscriptions";

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

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

        const res: operations.GetV1WebhookSubscriptionsResponse =
            new operations.GetV1WebhookSubscriptionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.webhookSubscriptions = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.webhookSubscriptions = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WebhookSubscription,
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
     * Create a Webhook Subscription
     *
     * @remarks
     * Creates a Webhook Subscription to receive notifications when entities change
     *
     * scope: `webhook_subscriptions:write`
     * ### Authentication
     * Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
     * ```
     * Content-Type: application/json
     * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
     * ```
     */
    async postV1WebhookSubscription(
        req: operations.PostV1WebhookSubscriptionRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.PostV1WebhookSubscriptionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV1WebhookSubscriptionRequestBody(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/webhook_subscriptions";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

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

        const res: operations.PostV1WebhookSubscriptionResponse =
            new operations.PostV1WebhookSubscriptionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.webhookSubscription = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WebhookSubscription
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
     * Verify the webhook subscription
     *
     * @remarks
     * When a webhook subscription is created, a `verification_token` is POSTed to the provided webhook subscription URL. This `verify` endpoint needs to be called with `verification_token` before notifications will be sent to the subscriber.
     *
     * Use the /v1/webhook_subscriptions/{webhook_subscription_uuid}/request_verification_token API to resend the `verification_token` to the Subscriber.
     *
     * scope: `webhook_subscriptions:write`
     * ### Authentication
     * Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
     * ```
     * Content-Type: application/json
     * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
     * ```
     *
     */
    async putV1VerifyWebhookSubscriptionUuid(
        webhookSubscriptionUuid: string,
        requestBody?: operations.PutV1VerifyWebhookSubscriptionUuidRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.PutV1VerifyWebhookSubscriptionUuidResponse> {
        const req = new operations.PutV1VerifyWebhookSubscriptionUuidRequest({
            webhookSubscriptionUuid: webhookSubscriptionUuid,
            requestBody: requestBody,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/webhook_subscriptions/{webhook_subscription_uuid}/verify",
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

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

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

        const res: operations.PutV1VerifyWebhookSubscriptionUuidResponse =
            new operations.PutV1VerifyWebhookSubscriptionUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.webhookSubscription = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WebhookSubscription
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
     * Update a webhook subscription
     *
     * @remarks
     * Updates the Webhook Subscription associated with the provided UUID.
     * scope: `webhook_subscriptions:write`
     * ### Authentication
     * Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
     * ```
     * Content-Type: application/json
     * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
     * ```
     *
     */
    async putV1WebhookSubscriptionUuid(
        webhookSubscriptionUuid: string,
        requestBody?: operations.PutV1WebhookSubscriptionUuidRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.PutV1WebhookSubscriptionUuidResponse> {
        const req = new operations.PutV1WebhookSubscriptionUuidRequest({
            webhookSubscriptionUuid: webhookSubscriptionUuid,
            requestBody: requestBody,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/webhook_subscriptions/{webhook_subscription_uuid}",
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

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

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

        const res: operations.PutV1WebhookSubscriptionUuidResponse =
            new operations.PutV1WebhookSubscriptionUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.webhookSubscription = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WebhookSubscription
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
