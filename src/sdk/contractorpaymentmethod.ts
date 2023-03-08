import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class ContractorPaymentMethod {
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
   * getV1ContractorsContractorUuidBankAccounts - Get all contractor bank accounts
   *
   * Returns all contractor bank accounts.
  **/
  getV1ContractorsContractorUuidBankAccounts(
    req: operations.GetV1ContractorsContractorUuidBankAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1ContractorsContractorUuidBankAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1ContractorsContractorUuidBankAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_uuid}/bank_accounts", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1ContractorsContractorUuidBankAccountsResponse =
            new operations.GetV1ContractorsContractorUuidBankAccountsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractorBankAccounts = [];
              const resFieldDepth: number = utils.getResFieldDepth(res);
              res.contractorBankAccounts = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ContractorBankAccount,
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
   * getV1ContractorsContractorUuidPaymentMethod - Get a contractor's payment method
   *
   * Fetches a contractor's payment method. A contractor payment method describes how the payment should be split across the contractor's associated bank accounts.
  **/
  getV1ContractorsContractorUuidPaymentMethod(
    req: operations.GetV1ContractorsContractorUuidPaymentMethodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1ContractorsContractorUuidPaymentMethodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1ContractorsContractorUuidPaymentMethodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_uuid}/payment_method", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1ContractorsContractorUuidPaymentMethodResponse =
            new operations.GetV1ContractorsContractorUuidPaymentMethodResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractorPaymentMethod = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ContractorPaymentMethod,
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
   * postV1ContractorsContractorUuidBankAccounts - Create an contractor bank account
   *
   * Creates a contractor bank account.
   * 
   * Note: We currently only support one bank account per contractor. Using this endpoint on a contractor who has already
   * has a bank account will just replace it.
  **/
  postV1ContractorsContractorUuidBankAccounts(
    req: operations.PostV1ContractorsContractorUuidBankAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1ContractorsContractorUuidBankAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1ContractorsContractorUuidBankAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_uuid}/bank_accounts", req.pathParams);

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
        const res: operations.PostV1ContractorsContractorUuidBankAccountsResponse =
            new operations.PostV1ContractorsContractorUuidBankAccountsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractorBankAccount = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ContractorBankAccount,
              );
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
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
   * putV1ContractorsContractorIdPaymentMethod - Update a contractor's payment method
   *
   * Updates a contractor's payment method. Note that creating a contractor bank account will also update the contractor's payment method.
  **/
  putV1ContractorsContractorIdPaymentMethod(
    req: operations.PutV1ContractorsContractorIdPaymentMethodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1ContractorsContractorIdPaymentMethodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1ContractorsContractorIdPaymentMethodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_uuid}/payment_method", req.pathParams);

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
        const res: operations.PutV1ContractorsContractorIdPaymentMethodResponse =
            new operations.PutV1ContractorsContractorIdPaymentMethodResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractorPaymentMethod = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ContractorPaymentMethod,
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
