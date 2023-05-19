/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Locations {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Get company locations
   *
   * @remarks
   * Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.
   *
   * Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.
   *
   * scope: `companies:read`
   */
  async getV1CompaniesCompanyIdLocations(
    req: operations.GetV1CompaniesCompanyIdLocationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdLocationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdLocationsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/locations",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetV1CompaniesCompanyIdLocationsResponse =
      new operations.GetV1CompaniesCompanyIdLocationsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.locations = [];
          const resFieldDepth: number = utils.getResFieldDepth(res);
          res.locations = utils.objectToClass(
            httpRes?.data,
            shared.Location,
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
   * Get a location
   *
   * @remarks
   * Get a location.
   *
   * scope: `companies:read`
   */
  async getV1LocationsLocationId(
    req: operations.GetV1LocationsLocationIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1LocationsLocationIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1LocationsLocationIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/locations/{location_id}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

    const res: operations.GetV1LocationsLocationIdResponse =
      new operations.GetV1LocationsLocationIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.location = utils.objectToClass(httpRes?.data, shared.Location);
        }
        break;
      case httpRes?.status == 404:
        break;
    }

    return res;
  }

  /**
   * Get minimum wages for a location
   *
   * @remarks
   * Get minimum wages for a location
   *
   * scope: `companies:read`
   */
  async getV1LocationsLocationUuidMinimumWages(
    req: operations.GetV1LocationsLocationUuidMinimumWagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1LocationsLocationUuidMinimumWagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1LocationsLocationUuidMinimumWagesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/locations/{location_uuid}/minimum_wages",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetV1LocationsLocationUuidMinimumWagesResponse =
      new operations.GetV1LocationsLocationUuidMinimumWagesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.minimumWages = [];
          const resFieldDepth: number = utils.getResFieldDepth(res);
          res.minimumWages = utils.objectToClass(
            httpRes?.data,
            shared.MinimumWage,
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
   * Create a company location
   *
   * @remarks
   * Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.
   *
   * Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.
   *
   * scope: `companies.write`
   */
  async postV1CompaniesCompanyIdLocationsJson(
    req: operations.PostV1CompaniesCompanyIdLocationsJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1CompaniesCompanyIdLocationsJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1CompaniesCompanyIdLocationsJsonRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/locations",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

    const res: operations.PostV1CompaniesCompanyIdLocationsJsonResponse =
      new operations.PostV1CompaniesCompanyIdLocationsJsonResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 201:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.location = utils.objectToClass(httpRes?.data, shared.Location);
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
   * Create a company location
   *
   * @remarks
   * Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.
   *
   * Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.
   *
   * scope: `companies.write`
   */
  async postV1CompaniesCompanyIdLocationsRaw(
    req: operations.PostV1CompaniesCompanyIdLocationsRawRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1CompaniesCompanyIdLocationsRawResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1CompaniesCompanyIdLocationsRawRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/locations",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "raw"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

    const res: operations.PostV1CompaniesCompanyIdLocationsRawResponse =
      new operations.PostV1CompaniesCompanyIdLocationsRawResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 201:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.location = utils.objectToClass(httpRes?.data, shared.Location);
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
   * Update a location
   *
   * @remarks
   * Update a location.
   *
   * scope: `companies.write`
   */
  async putV1LocationsLocationId(
    req: operations.PutV1LocationsLocationIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1LocationsLocationIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1LocationsLocationIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/locations/{location_id}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

    const res: operations.PutV1LocationsLocationIdResponse =
      new operations.PutV1LocationsLocationIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.location = utils.objectToClass(httpRes?.data, shared.Location);
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
