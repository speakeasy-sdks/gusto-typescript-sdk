import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class ExternalPayrolls {
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
   * deleteV1ExternalPayroll - Delete an external payroll
   *
   * Delete an external payroll.
   * scope: `payrolls:write`
   **/
  deleteV1ExternalPayroll(
    req: operations.DeleteV1ExternalPayrollRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV1ExternalPayrollResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV1ExternalPayrollRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/external_payrolls/{external_payroll_id}",
      req
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteV1ExternalPayrollResponse =
        new operations.DeleteV1ExternalPayrollResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case [204, 404].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * getV1CompanyExternalPayrolls - Get external payrolls for a company
   *
   * Get an external payroll for a given company.
   * scope: `payrolls:read`
   **/
  getV1CompanyExternalPayrolls(
    req: operations.GetV1CompanyExternalPayrollsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompanyExternalPayrollsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompanyExternalPayrollsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/external_payrolls",
      req
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetV1CompanyExternalPayrollsResponse =
        new operations.GetV1CompanyExternalPayrollsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.externalPayrollBasics = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.externalPayrollBasics = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ExternalPayrollBasic,
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
   * getV1ExternalPayroll - Get an external payroll
   *
   * Get an external payroll for a given company.
   * scope: `payrolls:read`
   **/
  getV1ExternalPayroll(
    req: operations.GetV1ExternalPayrollRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1ExternalPayrollResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1ExternalPayrollRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/external_payrolls/{external_payroll_id}",
      req
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetV1ExternalPayrollResponse =
        new operations.GetV1ExternalPayrollResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.externalPayroll = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ExternalPayroll
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
   * getV1ExternalPayrollCalculateTaxes - Get tax suggestions for an external payroll
   *
   * Get tax suggestions for an external payroll. Earnings and/or benefits data must be saved prior to the calculation in order to retrieve accurate tax calculation.
   **/
  getV1ExternalPayrollCalculateTaxes(
    req: operations.GetV1ExternalPayrollCalculateTaxesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1ExternalPayrollCalculateTaxesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1ExternalPayrollCalculateTaxesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/external_payrolls/{external_payroll_id}/calculate_taxes",
      req
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetV1ExternalPayrollCalculateTaxesResponse =
        new operations.GetV1ExternalPayrollCalculateTaxesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.externalPayrollTaxSuggestions = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.externalPayrollTaxSuggestions = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ExternalPayrollTaxSuggestions,
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
   * postV1ExternalPayroll - Create a new external payroll for a company
   *
   * Creates a new external payroll for the company.
   * scope: `payrolls:write`
   **/
  postV1ExternalPayroll(
    req: operations.PostV1ExternalPayrollRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1ExternalPayrollResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1ExternalPayrollRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/external_payrolls",
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

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PostV1ExternalPayrollResponse =
        new operations.PostV1ExternalPayrollResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.externalPayroll = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ExternalPayroll
            );
          }
          break;
        case httpRes?.status == 404:
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.unprocessableEntityErrorObject = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.UnprocessableEntityErrorObject
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * putV1ExternalPayroll - Update an external payroll
   *
   * Update an external payroll with a list of external payroll items
   * scope: `payrolls:write`
   **/
  putV1ExternalPayroll(
    req: operations.PutV1ExternalPayrollRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1ExternalPayrollResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1ExternalPayrollRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/external_payrolls/{external_payroll_id}",
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

    const client: AxiosInstance = this._securityClient!;

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
      const res: operations.PutV1ExternalPayrollResponse =
        new operations.PutV1ExternalPayrollResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.externalPayroll = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ExternalPayroll
            );
          }
          break;
        case httpRes?.status == 404:
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.unprocessableEntityErrorObject = utils.deserializeJSONResponse(
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
