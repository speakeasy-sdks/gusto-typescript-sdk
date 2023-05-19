/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class ContractorPayments {
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
   * Cancel a contractor payment
   *
   * @remarks
   * Cancels and deletes a contractor payment. If the contractor payment has already started processing, the payment cannot be cancelled.
   *
   * scope: `payrolls:run`
   */
  async deleteV1CompaniesCompanyIdContractorPaymentContractorPayment(
    req: operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/contractor_payments/{contractor_payment_id}",
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

    const res: operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse =
      new operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse(
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
   * Get a single contractor payment
   *
   * @remarks
   * Returns a single contractor payments
   *
   * scope: `payrolls:read`
   */
  async getV1CompaniesCompanyIdContractorPaymentContractorPayment(
    req: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/contractor_payments/{contractor_payment_id}",
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

    const res: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse =
      new operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse(
        {
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        }
      );
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.contractorPayment = utils.objectToClass(
            httpRes?.data,
            shared.ContractorPayment
          );
        }
        break;
      case httpRes?.status == 404:
        break;
    }

    return res;
  }

  /**
   * Get contractor payments for a company
   *
   * @remarks
   * Returns an object containing individual contractor payments, within a given time period, including totals.
   *
   * scope: `payrolls:read`
   */
  async getV1CompaniesCompanyIdContractorPayments(
    req: operations.GetV1CompaniesCompanyIdContractorPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdContractorPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdContractorPaymentsRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/contractor_payments",
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

    const res: operations.GetV1CompaniesCompanyIdContractorPaymentsResponse =
      new operations.GetV1CompaniesCompanyIdContractorPaymentsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getV1CompaniesCompanyIdContractorPayments200ApplicationJSONOneOf =
            httpRes?.data;
        }
        break;
      case httpRes?.status == 404:
        break;
    }

    return res;
  }

  /**
   * Get a single contractor payment receipt
   *
   * @remarks
   * Returns a contractor payment receipt.
   *
   * Notes:
   * * Receipts are only available for direct deposit payments and are only available once those payments have been funded.
   * * Payroll Receipt requests for payrolls which do not have receipts available (e.g. payment by check) will return a 404 status.
   * * Hour and dollar amounts are returned as string representations of numeric decimals.
   * * Dollar amounts are represented to the cent.
   * * If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).
   *
   * scope: `payrolls:read`
   */
  async getV1ContractorPaymentsContractorPaymentUuidReceipt(
    req: operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/contractor_payments/{contractor_payment_uuid}/receipt",
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

    const res: operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse =
      new operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse(
        {
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        }
      );
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.contractorPaymentReceipt = utils.objectToClass(
            httpRes?.data,
            shared.ContractorPaymentReceipt
          );
        }
        break;
      case httpRes?.status == 404:
        break;
    }

    return res;
  }

  /**
   * Create a contractor payment
   *
   * @remarks
   * Pay a contractor. Information needed depends on the contractor's wage type (hourly vs fixed)
   *
   * scope: `payrolls:run`
   */
  async postV1CompaniesCompanyIdContractorPayments(
    req: operations.PostV1CompaniesCompanyIdContractorPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1CompaniesCompanyIdContractorPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1CompaniesCompanyIdContractorPaymentsRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/contractor_payments",
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

    const res: operations.PostV1CompaniesCompanyIdContractorPaymentsResponse =
      new operations.PostV1CompaniesCompanyIdContractorPaymentsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.contractorPayment = utils.objectToClass(
            httpRes?.data,
            shared.ContractorPayment
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
