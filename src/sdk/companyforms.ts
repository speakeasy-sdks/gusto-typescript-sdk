import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class CompanyForms {
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
   * getV1CompanyForm - Get a company form
   *
   * Get a company form
  **/
  getV1CompanyForm(
    req: operations.GetV1CompanyFormRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompanyFormResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompanyFormRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/forms/{form_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1CompanyFormResponse =
            new operations.GetV1CompanyFormResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.form = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Form,
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
   * getV1CompanyFormPdf - Get a company form pdf
   *
   * Get the link to the form PDF
  **/
  getV1CompanyFormPdf(
    req: operations.GetV1CompanyFormPdfRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompanyFormPdfResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompanyFormPdfRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/forms/{form_id}/pdf", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1CompanyFormPdfResponse =
            new operations.GetV1CompanyFormPdfResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.formPdf = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.FormPdf,
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
   * getV1CompanyForms - Get all company forms
   *
   * Get a list of all company's forms
  **/
  getV1CompanyForms(
    req: operations.GetV1CompanyFormsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompanyFormsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompanyFormsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/forms", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1CompanyFormsResponse =
            new operations.GetV1CompanyFormsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.forms = [];
              const resFieldDepth: number = utils.getResFieldDepth(res);
              res.forms = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Form,
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
   * putV1CompanyFormSign - Sign a company form
   *
   * Sign a company form
  **/
  putV1CompanyFormSign(
    req: operations.PutV1CompanyFormSignRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompanyFormSignResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1CompanyFormSignRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/forms/{form_id}/sign", req.pathParams);

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
        const res: operations.PutV1CompanyFormSignResponse =
            new operations.PutV1CompanyFormSignResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.form = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Form,
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
