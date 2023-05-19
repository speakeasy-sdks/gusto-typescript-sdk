/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class EarningTypes {
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
   * Deactivate an earning type
   *
   * @remarks
   * Deactivate an earning type.
   *
   * scope: `payrolls:write`
   */
  async deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuid(
    req: operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/earning_types/{earning_type_uuid}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers["Accept"] = "*/*";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

    const res: operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse =
      new operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse(
        {
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        }
      );
    switch (true) {
      case [204, 404].includes(httpRes?.status):
        break;
    }

    return res;
  }

  /**
   * Get all earning types for a company
   *
   * @remarks
   * A payroll item in Gusto is associated to an earning type to name the type of earning described by the payroll item.
   *
   * #### Default Earning Type
   * Certain earning types are special because they have tax considerations. Those earning types are mostly the same for every company depending on its legal structure (LLC, Corporation, etc.)
   *
   * #### Custom Earning Type
   * Custom earning types are all the other earning types added specifically for a company.
   *
   * scope: `payrolls:read`
   */
  async getV1CompaniesCompanyIdEarningTypes(
    req: operations.GetV1CompaniesCompanyIdEarningTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdEarningTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdEarningTypesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/earning_types",
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

    const res: operations.GetV1CompaniesCompanyIdEarningTypesResponse =
      new operations.GetV1CompaniesCompanyIdEarningTypesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getV1CompaniesCompanyIdEarningTypes200ApplicationJSONObject =
            utils.objectToClass(
              httpRes?.data,
              operations.GetV1CompaniesCompanyIdEarningTypes200ApplicationJSON
            );
        }
        break;
      case httpRes?.status == 404:
        break;
    }

    return res;
  }

  /**
   * Create a custom earning type
   *
   * @remarks
   * Create a custom earning type.
   *
   * If an inactive earning type exists with the same name, this will reactivate it instead of creating a new one.
   *
   * scope: `payrolls:write`
   */
  async postV1CompaniesCompanyIdEarningTypes(
    req: operations.PostV1CompaniesCompanyIdEarningTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1CompaniesCompanyIdEarningTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1CompaniesCompanyIdEarningTypesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/earning_types",
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

    const res: operations.PostV1CompaniesCompanyIdEarningTypesResponse =
      new operations.PostV1CompaniesCompanyIdEarningTypesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 201:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.earningType = utils.objectToClass(
            httpRes?.data,
            shared.EarningType
          );
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
   * Update an earning type
   *
   * @remarks
   * Update an earning type.
   *
   * scope: `payrolls:write`
   */
  async putV1CompaniesCompanyIdEarningTypesEarningTypeUuid(
    req: operations.PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/earning_types/{earning_type_uuid}",
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

    const res: operations.PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse =
      new operations.PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse(
        {
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        }
      );
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.earningType = utils.objectToClass(
            httpRes?.data,
            shared.EarningType
          );
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
