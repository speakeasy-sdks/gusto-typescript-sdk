import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class BankAccounts {
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
   * getV1CompaniesCompanyIdBankAccounts - Get all company bank accounts
   *
   * Returns company bank accounts. Currently we only support a single default bank account per company.
  **/
  getV1CompaniesCompanyIdBankAccounts(
    req: operations.GetV1CompaniesCompanyIdBankAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdBankAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdBankAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/bank_accounts", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1CompaniesCompanyIdBankAccountsResponse =
            new operations.GetV1CompaniesCompanyIdBankAccountsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.companyBankAccounts = [];
              const resFieldDepth: number = utils.getResFieldDepth(res);
              res.companyBankAccounts = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.CompanyBankAccount,
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
   * postV1CompaniesCompanyIdBankAccounts - Create a company bank account
   *
   * This endpoint creates a new company bank account.
   * 
   * Upon being created, two verification deposits are automatically sent to the bank account, and the bank account's verification_status is 'awaiting_deposits'. 
   * 
   * When the deposits are successfully transferred, the verification_status changes to 'ready_for_verification', at which point the verify endpoint can be used to verify the bank account.
   * After successful verification, the bank account's verification_status is 'verified'.
   * 
   * > ???? Warning
   * >
   * > If a default bank account exists, it will be disabled and the new bank account will replace it as the company's default funding method.
  **/
  postV1CompaniesCompanyIdBankAccounts(
    req: operations.PostV1CompaniesCompanyIdBankAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1CompaniesCompanyIdBankAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1CompaniesCompanyIdBankAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/bank_accounts", req.pathParams);

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
        const res: operations.PostV1CompaniesCompanyIdBankAccountsResponse =
            new operations.PostV1CompaniesCompanyIdBankAccountsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.companyBankAccount = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.CompanyBankAccount,
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
   * postV1PlaidProcessorToken - Create a bank account from a plaid processor token
   *
   * This endpoint creates a new **verified** bank account by using a plaid processor token to retrieve its information.
   * 
   * `scope: plaid_processor:write`
   * 
   * > ????
   * > To create a token please use the [plaid api](https://plaid.com/docs/api/processors/#processortokencreate) and select "gusto" as processor.
   * 
   * > ???? Warning - Company Bank Accounts
   * >
   * > If a default company bank account exists, it will be disabled and the new bank account will replace it as the company's default funding method.
  **/
  postV1PlaidProcessorToken(
    req: operations.PostV1PlaidProcessorTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1PlaidProcessorTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1PlaidProcessorTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/plaid/processor_token";

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
        const res: operations.PostV1PlaidProcessorTokenResponse =
            new operations.PostV1PlaidProcessorTokenResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postV1PlaidProcessorToken201ApplicationJSONOneOf = httpRes?.data;
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
   * putV1CompaniesCompanyIdBankAccountsVerify - Verify a company bank account
   *
   * Verify a company bank account by confirming the two micro-deposits sent to the bank account. Note that the order of the two deposits specified in request parameters does not matter. There's a maximum of 5 verification attempts, after which we will automatically initiate a new set of micro-deposits and require the bank account to be verified with the new micro-deposits.
   * 
   * ### Bank account verification in demo
   * 
   * We provide the endpoint `POST '/v1/companies/{company_id}/bank_accounts/{bank_account_uuid}/send_test_deposits'` to facilitate bank account verification in the demo environment. This endpoint simulates the micro-deposits transfer and returns them in the response. You can call this endpoint as many times as you wish to retrieve the values of the two micro deposits.
   * 
   * ```
   *   POST '/v1/companies/89771af8-b964-472e-8064-554dfbcb56d9/bank_accounts/ade55e57-4800-4059-9ecd-fa29cfeb6dd2/send_test_deposits'
   * 
   *   {
   *     "deposit_1": 0.02,
   *     "deposit_2": 0.42
   *   }
   * ```
  **/
  putV1CompaniesCompanyIdBankAccountsVerify(
    req: operations.PutV1CompaniesCompanyIdBankAccountsVerifyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompaniesCompanyIdBankAccountsVerifyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1CompaniesCompanyIdBankAccountsVerifyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/bank_accounts/{bank_account_uuid}/verify", req.pathParams);

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
        const res: operations.PutV1CompaniesCompanyIdBankAccountsVerifyResponse =
            new operations.PutV1CompaniesCompanyIdBankAccountsVerifyResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.companyBankAccount = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.CompanyBankAccount,
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
