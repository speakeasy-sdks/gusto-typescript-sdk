import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class GeneratedDocuments {
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
   * getV1GeneratedDocumentsDocumentTypeRequestUuid - Get a generated document
   *
   * Get a generated document given the request_uuid. The response will include the generation request's status and, if complete, the relevant document urls.
   * 
   * scope: `generated_documents:read`
  **/
  getV1GeneratedDocumentsDocumentTypeRequestUuid(
    req: operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/generated_documents/{document_type}/{request_uuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse =
            new operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.generatedDocument = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.GeneratedDocument,
              );
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

}
