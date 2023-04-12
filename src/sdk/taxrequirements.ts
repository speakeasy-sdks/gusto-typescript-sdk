/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class TaxRequirements {
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
   * Get All Tax Requirement States
   *
   * @remarks
   * Returns objects describing the states that have tax requirements for the company
   */
  getV1CompaniesCompanyUuidTaxRequirements(
    req: operations.GetV1CompaniesCompanyUuidTaxRequirementsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyUuidTaxRequirementsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyUuidTaxRequirementsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/tax_requirements",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetV1CompaniesCompanyUuidTaxRequirementsResponse =
        new operations.GetV1CompaniesCompanyUuidTaxRequirementsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getV1CompaniesCompanyUuidTaxRequirements200ApplicationJSONObjects =
              [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.getV1CompaniesCompanyUuidTaxRequirements200ApplicationJSONObjects =
              utils.objectToClass(
                httpRes?.data,
                operations.GetV1CompaniesCompanyUuidTaxRequirements200ApplicationJSON,
                resFieldDepth
              );
          }
          break;
        case httpRes?.status == 404:
          break;
      }

      return res;
    });
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
  getV1CompaniesCompanyUuidTaxRequirementsState(
    req: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyUuidTaxRequirementsStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/tax_requirements/{state}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateResponse =
        new operations.GetV1CompaniesCompanyUuidTaxRequirementsStateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.taxRequirementsState = utils.objectToClass(
              httpRes?.data,
              shared.TaxRequirementsState
            );
          }
          break;
        case httpRes?.status == 404:
          break;
      }

      return res;
    });
  }

  /**
   * Update State Tax Requirements
   *
   * @remarks
   * Update State Tax Requirements
   */
  putV1CompaniesCompanyUuidTaxRequirementsState(
    req: operations.PutV1CompaniesCompanyUuidTaxRequirementsStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompaniesCompanyUuidTaxRequirementsStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1CompaniesCompanyUuidTaxRequirementsStateRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/tax_requirements/{state}",
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

    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PutV1CompaniesCompanyUuidTaxRequirementsStateResponse =
        new operations.PutV1CompaniesCompanyUuidTaxRequirementsStateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case [200, 404].includes(httpRes?.status):
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
    });
  }
}
