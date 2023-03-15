import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Signatories {
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
   * deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuid - Delete a signatory
   *
   * Delete a company signatory.
   **/
  deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuid(
    req: operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/signatories/{signatory_uuid}",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse =
        new operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse(
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
    });
  }

  /**
   * getV1CompaniesCompanyUuidSignatories - Get all company signatories
   *
   * Returns company signatories. Currently we only support a single signatory per company.
   **/
  getV1CompaniesCompanyUuidSignatories(
    req: operations.GetV1CompaniesCompanyUuidSignatoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyUuidSignatoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyUuidSignatoriesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/signatories",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetV1CompaniesCompanyUuidSignatoriesResponse =
        new operations.GetV1CompaniesCompanyUuidSignatoriesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.signatories = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.signatories = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Signatory,
              resFieldDepth
            );
          }
          break;
        case httpRes?.status == 404:
          break;
      }

      return res;
    });
  }

  /**
   * postV1CompaniesCompanyUuidSignatoriesInvite - Invite a signatory
   *
   * Create a signatory with minimal information. This signatory can be invited to provide more information through the `PUT /v1/companies/{company_uuid}/signatories/{signatory_uuid}` endpoint. This will start the identity verification process and allow the signatory to be verified to sign documents.
   **/
  postV1CompaniesCompanyUuidSignatoriesInvite(
    req: operations.PostV1CompaniesCompanyUuidSignatoriesInviteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1CompaniesCompanyUuidSignatoriesInviteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1CompaniesCompanyUuidSignatoriesInviteRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/signatories/invite",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PostV1CompaniesCompanyUuidSignatoriesInviteResponse =
        new operations.PostV1CompaniesCompanyUuidSignatoriesInviteResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.signatory = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Signatory
            );
          }
          break;
        case httpRes?.status == 404:
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.unprocessableEntityErrorObject = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.UnprocessableEntityErrorObject
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * postV1CompanySignatories - Create a signatory
   *
   * Create a company signatory with complete information. A signatory can legally sign forms once the identity verification process is successful.
   **/
  postV1CompanySignatories(
    req: operations.PostV1CompanySignatoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1CompanySignatoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1CompanySignatoriesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/signatories",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PostV1CompanySignatoriesResponse =
        new operations.PostV1CompanySignatoriesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.signatory = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Signatory
            );
          }
          break;
        case httpRes?.status == 404:
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.unprocessableEntityErrorObject = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.UnprocessableEntityErrorObject
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * putV1CompaniesCompanyUuidSignatoriesSignatoryUuid - Update a signatory
   *
   * Update a signatory that has been either invited or created. If the signatory has been created with minimal information through the `POST /v1/companies/{company_uuid}/signatories/invite` endpoint, then the first update must contain all attributes specified in the request body in order to start the identity verification process.
   **/
  putV1CompaniesCompanyUuidSignatoriesSignatoryUuid(
    req: operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/signatories/{signatory_uuid}",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse =
        new operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.signatory = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Signatory
            );
          }
          break;
        case httpRes?.status == 404:
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.unprocessableEntityErrorObject = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.UnprocessableEntityErrorObject
            );
          }
          break;
      }

      return res;
    });
  }
}
