import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class FederalTaxDetails {
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
   * getV1CompaniesCompanyIdFederalTaxDetails - Get Federal Tax Details
   *
   * Fetches attributes relevant for a company's federal taxes.
  **/
  getV1CompaniesCompanyIdFederalTaxDetails(
    req: operations.GetV1CompaniesCompanyIdFederalTaxDetailsRequest,
    security: operations.GetV1CompaniesCompanyIdFederalTaxDetailsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdFederalTaxDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdFederalTaxDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/federal_tax_details", req.pathParams);
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.GetV1CompaniesCompanyIdFederalTaxDetailsSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1CompaniesCompanyIdFederalTaxDetailsResponse =
            new operations.GetV1CompaniesCompanyIdFederalTaxDetailsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.federalTaxDetails = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.FederalTaxDetails,
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
   * putV1CompaniesCompanyIdFederalTaxDetails - Update Federal Tax Details
   *
   * Updates attributes relevant for a company's federal taxes. This information is required is to onboard a company for use with Gusto Embedded Payroll.
  **/
  putV1CompaniesCompanyIdFederalTaxDetails(
    req: operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/federal_tax_details", req.pathParams);

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
        const res: operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse =
            new operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.federalTaxDetails = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.FederalTaxDetails,
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
