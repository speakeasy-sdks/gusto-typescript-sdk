/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class FederalTaxDetails {
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
   * Get Federal Tax Details
   *
   * @remarks
   * Fetches attributes relevant for a company's federal taxes.
   */
  async getV1CompaniesCompanyIdFederalTaxDetails(
    req: operations.GetV1CompaniesCompanyIdFederalTaxDetailsRequest,
    security: operations.GetV1CompaniesCompanyIdFederalTaxDetailsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdFederalTaxDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdFederalTaxDetailsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/federal_tax_details",
      req
    );

    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.GetV1CompaniesCompanyIdFederalTaxDetailsSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

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

    const res: operations.GetV1CompaniesCompanyIdFederalTaxDetailsResponse =
      new operations.GetV1CompaniesCompanyIdFederalTaxDetailsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.federalTaxDetails = utils.objectToClass(
            httpRes?.data,
            shared.FederalTaxDetails
          );
        }
        break;
      case httpRes?.status == 404:
        break;
    }

    return res;
  }

  /**
   * Update Federal Tax Details
   *
   * @remarks
   * Updates attributes relevant for a company's federal taxes. This information is required is to onboard a company for use with Gusto Embedded Payroll.
   */
  async putV1CompaniesCompanyIdFederalTaxDetails(
    req: operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/federal_tax_details",
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

    const res: operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse =
      new operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.federalTaxDetails = utils.objectToClass(
            httpRes?.data,
            shared.FederalTaxDetails
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
