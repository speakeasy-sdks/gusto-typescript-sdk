import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class ContractorPayments {
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
   * deleteV1CompaniesCompanyIdContractorPaymentContractorPayment - Cancel a contractor payment
   *
   * Cancels and deletes a contractor payment. If the contractor payment has already started processing, the payment cannot be cancelled.
   * 
   * scope: `payrolls:run`
  **/
  deleteV1CompaniesCompanyIdContractorPaymentContractorPayment(
    req: operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/contractor_payments/{contractor_payment_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getV1CompaniesCompanyIdContractorPaymentContractorPayment - Get a single contractor payment
   *
   * Returns a single contractor payments
   * 
   * scope: `payrolls:read`
  **/
  getV1CompaniesCompanyIdContractorPaymentContractorPayment(
    req: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/contractor_payments/{contractor_payment_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractorPayment = plainToInstance(
                shared.ContractorPayment,
                httpRes?.data as shared.ContractorPayment,
                { excludeExtraneousValues: true }
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
   * getV1CompaniesCompanyIdContractorPayments - Get contractor payments for a company
   *
   * Returns an object containing individual contractor payments, within a given time period, including totals.
   * 
   * scope: `payrolls:read`
  **/
  getV1CompaniesCompanyIdContractorPayments(
    req: operations.GetV1CompaniesCompanyIdContractorPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdContractorPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdContractorPaymentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/contractor_payments", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1CompaniesCompanyIdContractorPaymentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getV1CompaniesCompanyIdContractorPayments200ApplicationJSONOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV1ContractorPaymentsContractorPaymentUuidReceipt - Get a single contractor payment receipt
   *
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
  **/
  getV1ContractorPaymentsContractorPaymentUuidReceipt(
    req: operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractor_payments/{contractor_payment_uuid}/receipt", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractorPaymentReceipt = plainToInstance(
                shared.ContractorPaymentReceipt,
                httpRes?.data as shared.ContractorPaymentReceipt,
                { excludeExtraneousValues: true }
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
   * postV1CompaniesCompanyIdContractorPayments - Create a contractor payment
   *
   * Pay a contractor. Information needed depends on the contractor's wage type (hourly vs fixed)
   * 
   * scope: `payrolls:run`
  **/
  postV1CompaniesCompanyIdContractorPayments(
    req: operations.PostV1CompaniesCompanyIdContractorPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1CompaniesCompanyIdContractorPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1CompaniesCompanyIdContractorPaymentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/contractor_payments", req.pathParams);

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
        const res: operations.PostV1CompaniesCompanyIdContractorPaymentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractorPayment = plainToInstance(
                shared.ContractorPayment,
                httpRes?.data as shared.ContractorPayment,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.unprocessableEntityErrorObject = plainToInstance(
                shared.UnprocessableEntityErrorObject,
                httpRes?.data as shared.UnprocessableEntityErrorObject,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
