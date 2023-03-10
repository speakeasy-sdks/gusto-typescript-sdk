import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class PaymentConfigs {
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
   * getV1CompanyPaymentConfigs - Get a company's payment configs
   *
   * Get payment speed for the company and fast payment limit (only applicable for 2-day payroll).
  **/
  getV1CompanyPaymentConfigs(
    req: operations.GetV1CompanyPaymentConfigsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompanyPaymentConfigsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompanyPaymentConfigsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_uuid}/payment_configs", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1CompanyPaymentConfigsResponse =
            new operations.GetV1CompanyPaymentConfigsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.paymentConfigs = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.PaymentConfigs,
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
   * putV1CompanyPaymentConfigs - Update a company's payment configs
   *
   * Update payment speed for the company and fast payment limit (only applicable for 2-day payroll)
  **/
  putV1CompanyPaymentConfigs(
    req: operations.PutV1CompanyPaymentConfigsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompanyPaymentConfigsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1CompanyPaymentConfigsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_uuid}/payment_configs", req.pathParams);

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
        const res: operations.PutV1CompanyPaymentConfigsResponse =
            new operations.PutV1CompanyPaymentConfigsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.paymentConfigs = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.PaymentConfigs,
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
