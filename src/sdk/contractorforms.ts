import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class ContractorForms {
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
   * getV1ContractorForm - Get a contractor form
   *
   * Get a contractor form
  **/
  getV1ContractorForm(
    req: operations.GetV1ContractorFormRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1ContractorFormResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1ContractorFormRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_uuid}/forms/{form_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1ContractorFormResponse =
            new operations.GetV1ContractorFormResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.form = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetV1ContractorFormForm,
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
   * getV1ContractorFormPdf - Get the contractor form pdf
   *
   * Get the link to the form PDF
  **/
  getV1ContractorFormPdf(
    req: operations.GetV1ContractorFormPdfRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1ContractorFormPdfResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1ContractorFormPdfRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_uuid}/forms/{form_id}/pdf", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1ContractorFormPdfResponse =
            new operations.GetV1ContractorFormPdfResponse({
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
   * getV1ContractorForms - Get all contractor forms
   *
   * Get a list of all contractor's forms
  **/
  getV1ContractorForms(
    req: operations.GetV1ContractorFormsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1ContractorFormsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1ContractorFormsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_uuid}/forms", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1ContractorFormsResponse =
            new operations.GetV1ContractorFormsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getV1ContractorFormsFormAnies = [];
              const resFieldDepth: number = utils.getResFieldDepth(res);
              res.getV1ContractorFormsFormAnies = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetV1ContractorFormsForm,
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
   * postV1SandboxGenerate1099 - Generate a 1099 form [SANDBOX]
   *
   * Generates a 1099 document for testing purposes.
   * 
   * > ????
   * >
   * > This endpoint can only be used in the Sandbox environments.
   * 
   * `scope: contractors:write`
   * 
  **/
  postV1SandboxGenerate1099(
    req: operations.PostV1SandboxGenerate1099Request,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1SandboxGenerate1099Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1SandboxGenerate1099Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/sandbox/generate_1099";

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
        const res: operations.PostV1SandboxGenerate1099Response =
            new operations.PostV1SandboxGenerate1099Response({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.form = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostV1SandboxGenerate1099Form,
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
