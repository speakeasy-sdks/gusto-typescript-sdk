import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class TaxLiabilities {
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
   * getV1TaxLiabilities - Get tax liabilities
   *
   * Get tax liabilities from aggregate external payrolls for a company.
   * scope: `payrolls:read`
  **/
  getV1TaxLiabilities(
    req: operations.GetV1TaxLiabilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1TaxLiabilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1TaxLiabilitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_uuid}/external_payrolls/tax_liabilities", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1TaxLiabilitiesResponse =
            new operations.GetV1TaxLiabilitiesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.taxLiabilitiesSelections = [];
              const resFieldDepth: number = utils.getResFieldDepth(res);
              res.taxLiabilitiesSelections = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.TaxLiabilitiesSelections,
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
   * putV1TaxLiabilities - Update tax liabilities
   *
   * Update tax liabilities for a company.
   *   scope: `payrolls:write`
  **/
  putV1TaxLiabilities(
    req: operations.PutV1TaxLiabilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1TaxLiabilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1TaxLiabilitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_uuid}/external_payrolls/tax_liabilities", req.pathParams);

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
        const res: operations.PutV1TaxLiabilitiesResponse =
            new operations.PutV1TaxLiabilitiesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.taxLiabilitiesSelections = [];
              const resFieldDepth: number = utils.getResFieldDepth(res);
              res.taxLiabilitiesSelections = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.TaxLiabilitiesSelections,
                resFieldDepth
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
   * putV1TaxLiabilitiesFinish - Finalize tax liabilities options and convert into processed payrolls
   *
   * Finalizes tax liabilities for a company. All external payrolls edit action will be disabled.
   *   scope: `payrolls:write`
  **/
  putV1TaxLiabilitiesFinish(
    req: operations.PutV1TaxLiabilitiesFinishRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1TaxLiabilitiesFinishResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1TaxLiabilitiesFinishRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_uuid}/external_payrolls/tax_liabilities/finish", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutV1TaxLiabilitiesFinishResponse =
            new operations.PutV1TaxLiabilitiesFinishResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 202:
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
