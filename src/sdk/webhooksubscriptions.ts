import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class WebhookSubscriptions {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * deleteV1WebhookSubscriptionUuid - Delete a webhook subscription
   *
   * Deletes the Webhook Subscription associated with the provided UUID.
   * scope: `webhook_subscriptions:write`
   * ### Authentication
   * Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
   * ```
   * Content-Type: application/json
   * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
   * ```
   * 
  **/
  deleteV1WebhookSubscriptionUuid(
    req: operations.DeleteV1WebhookSubscriptionUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV1WebhookSubscriptionUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV1WebhookSubscriptionUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/webhook_subscriptions/{webhook_subscription_uuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteV1WebhookSubscriptionUuidResponse =
            new operations.DeleteV1WebhookSubscriptionUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV1WebhookSubscriptionUuid - Get a webhook subscription
   *
   * Returns the Webhook Subscription associated with the provided UUID.
   * scope: `webhook_subscriptions:read`
   * ### Authentication
   * Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
   * ```
   * Content-Type: application/json
   * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
   * ```
   * 
  **/
  getV1WebhookSubscriptionUuid(
    req: operations.GetV1WebhookSubscriptionUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1WebhookSubscriptionUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1WebhookSubscriptionUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/webhook_subscriptions/{webhook_subscription_uuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1WebhookSubscriptionUuidResponse =
            new operations.GetV1WebhookSubscriptionUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.webhookSubscription = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.WebhookSubscription,
              );
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV1WebhookSubscriptionVerificationTokenUuid - Request the webhook subscription verification_token
   *
   * Request that the webhook subscription `verification_token` be POSTed to the Subscription URL.
   * scope: `webhook_subscriptions:write`
   * ### Authentication
   * Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
   * ```
   * Content-Type: application/json
   * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
   * ```
   * 
  **/
  getV1WebhookSubscriptionVerificationTokenUuid(
    req: operations.GetV1WebhookSubscriptionVerificationTokenUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1WebhookSubscriptionVerificationTokenUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1WebhookSubscriptionVerificationTokenUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/webhook_subscriptions/{webhook_subscription_uuid}/request_verification_token", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1WebhookSubscriptionVerificationTokenUuidResponse =
            new operations.GetV1WebhookSubscriptionVerificationTokenUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV1WebhookSubscriptions - List webhook subscriptions
   *
   * Returns all webhook subscriptions associated with the provided Partner API token.
   * scope: `webhook_subscriptions:read`
   * ### Authentication
   * Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
   * ```
   * Content-Type: application/json
   * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
   * ```
  **/
  getV1WebhookSubscriptions(
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1WebhookSubscriptionsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/webhook_subscriptions";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1WebhookSubscriptionsResponse =
            new operations.GetV1WebhookSubscriptionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.webhookSubscriptions = [];
              const resFieldDepth: number = utils.getResFieldDepth(res);
              res.webhookSubscriptions = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.WebhookSubscription,
                resFieldDepth
              );
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * postV1WebhookSubscription - Create a Webhook Subscription
   *
   * Creates a Webhook Subscription to receive notifications when entities change
   * 
   * scope: `webhook_subscriptions:write`
   * ### Authentication
   * Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
   * ```
   * Content-Type: application/json
   * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
   * ```
  **/
  postV1WebhookSubscription(
    req: operations.PostV1WebhookSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1WebhookSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1WebhookSubscriptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/webhook_subscriptions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostV1WebhookSubscriptionResponse =
            new operations.PostV1WebhookSubscriptionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.webhookSubscription = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.WebhookSubscription,
              );
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.unprocessableEntityErrorObject = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.UnprocessableEntityErrorObject,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putV1VerifyWebhookSubscriptionUuid - Verify the webhook subscription
   *
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
  **/
  putV1VerifyWebhookSubscriptionUuid(
    req: operations.PutV1VerifyWebhookSubscriptionUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1VerifyWebhookSubscriptionUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1VerifyWebhookSubscriptionUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/webhook_subscriptions/{webhook_subscription_uuid}/verify", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutV1VerifyWebhookSubscriptionUuidResponse =
            new operations.PutV1VerifyWebhookSubscriptionUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.webhookSubscription = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.WebhookSubscription,
              );
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.unprocessableEntityErrorObject = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.UnprocessableEntityErrorObject,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putV1WebhookSubscriptionUuid - Update a webhook subscription
   *
   * Updates the Webhook Subscription associated with the provided UUID.
   * scope: `webhook_subscriptions:write`
   * ### Authentication
   * Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to manage Webhook Subscriptions. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
   * ```
   * Content-Type: application/json
   * Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
   * ```
   * 
  **/
  putV1WebhookSubscriptionUuid(
    req: operations.PutV1WebhookSubscriptionUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1WebhookSubscriptionUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1WebhookSubscriptionUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/webhook_subscriptions/{webhook_subscription_uuid}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutV1WebhookSubscriptionUuidResponse =
            new operations.PutV1WebhookSubscriptionUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.webhookSubscription = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.WebhookSubscription,
              );
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.unprocessableEntityErrorObject = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.UnprocessableEntityErrorObject,
              );
            }
            break;
        }

        return res;
      })
  }

}
