import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class CompanyBenefits {
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
   * deleteV1CompanyBenefitsCompanyBenefitId - Delete a company benefit
   *
   * The following must be true in order to delete a company benefit
   *   - There are no employee benefits associated with the company benefit
   *   - There are no payroll items associated with the company benefit
   *   - The benefit is not managed by a Partner or by Gusto (type must be 'External')
   **/
  deleteV1CompanyBenefitsCompanyBenefitId(
    req: operations.DeleteV1CompanyBenefitsCompanyBenefitIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV1CompanyBenefitsCompanyBenefitIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV1CompanyBenefitsCompanyBenefitIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/company_benefits/{company_benefit_id}",
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
      const res: operations.DeleteV1CompanyBenefitsCompanyBenefitIdResponse =
        new operations.DeleteV1CompanyBenefitsCompanyBenefitIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case [204, 404].includes(httpRes?.status):
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.deleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getV1Benefits - Get all benefits supported by Gusto
   *
   * Returns all benefits supported by Gusto.
   *
   * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
   *
   * scope: `benefits:read`
   **/
  getV1Benefits(
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1BenefitsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/benefits";

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
      const res: operations.GetV1BenefitsResponse =
        new operations.GetV1BenefitsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.supportedBenefits = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.supportedBenefits = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.SupportedBenefit,
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
   * getV1BenefitsBenefitId - Get a supported benefit by ID
   *
   * Returns a benefit supported by Gusto.
   *
   * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
   *
   * scope: `benefits:read`
   **/
  getV1BenefitsBenefitId(
    req: operations.GetV1BenefitsBenefitIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1BenefitsBenefitIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1BenefitsBenefitIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/benefits/{benefit_id}",
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
      const res: operations.GetV1BenefitsBenefitIdResponse =
        new operations.GetV1BenefitsBenefitIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.supportedBenefit = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.SupportedBenefit
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
   * getV1BenefitsBenefitsIdRequirements - Get benefit fields requirements by ID
   *
   * Returns field requirements for the requested benefit type.
   *
   * scope: `benefits:read`
   **/
  getV1BenefitsBenefitsIdRequirements(
    req: operations.GetV1BenefitsBenefitsIdRequirementsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1BenefitsBenefitsIdRequirementsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1BenefitsBenefitsIdRequirementsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/benefits/{benefit_id}/requirements",
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
      const res: operations.GetV1BenefitsBenefitsIdRequirementsResponse =
        new operations.GetV1BenefitsBenefitsIdRequirementsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.benefitTypeRequirements = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.BenefitTypeRequirements
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
   * getV1BenefitsCompanyBenefitIdSummary - Get company benefit summary by company benefit id.
   *
   * Returns summary benefit data for the requested company benefit id.
   *
   * scope: `benefits:read`
   **/
  getV1BenefitsCompanyBenefitIdSummary(
    req: operations.GetV1BenefitsCompanyBenefitIdSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1BenefitsCompanyBenefitIdSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1BenefitsCompanyBenefitIdSummaryRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/company_benefits/{company_benefit_id}/summary",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetV1BenefitsCompanyBenefitIdSummaryResponse =
        new operations.GetV1BenefitsCompanyBenefitIdSummaryResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.benefitSummary = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.BenefitSummary
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
   * getV1CompaniesCompanyIdCompanyBenefits - Get benefits for a company
   *
   * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
   *
   * Note that company benefits can be deactivated only when no employees are enrolled.
   *
   * scope: `company_benefits:read`
   **/
  getV1CompaniesCompanyIdCompanyBenefits(
    req: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdCompanyBenefitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/company_benefits",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetV1CompaniesCompanyIdCompanyBenefitsResponse =
        new operations.GetV1CompaniesCompanyIdCompanyBenefitsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companyBenefits = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.companyBenefits = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CompanyBenefit,
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
   * getV1CompanyBenefitsCompanyBenefitId - Get a company benefit
   *
   * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
   *
   * Note that company benefits can be deactivated only when no employees are enrolled.
   *
   * When with_employee_benefits parameter with true value is passed, employee_benefits:read scope is required to return employee_benefits.
   *
   * scope: `company_benefits:read`
   **/
  getV1CompanyBenefitsCompanyBenefitId(
    req: operations.GetV1CompanyBenefitsCompanyBenefitIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompanyBenefitsCompanyBenefitIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompanyBenefitsCompanyBenefitIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/company_benefits/{company_benefit_id}",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetV1CompanyBenefitsCompanyBenefitIdResponse =
        new operations.GetV1CompanyBenefitsCompanyBenefitIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companyBenefit = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CompanyBenefit
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
   * postV1CompaniesCompanyIdCompanyBenefits - Create a company benefit
   *
   * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
   *
   * Note that company benefits can be deactivated only when no employees are enrolled.
   *
   * scope: `company_benefits:write`
   **/
  postV1CompaniesCompanyIdCompanyBenefits(
    req: operations.PostV1CompaniesCompanyIdCompanyBenefitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1CompaniesCompanyIdCompanyBenefitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1CompaniesCompanyIdCompanyBenefitsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/company_benefits",
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
      const res: operations.PostV1CompaniesCompanyIdCompanyBenefitsResponse =
        new operations.PostV1CompaniesCompanyIdCompanyBenefitsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companyBenefit = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CompanyBenefit
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
   * putV1CompanyBenefitsCompanyBenefitId - Update a company benefit
   *
   * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
   *
   * Note that company benefits can be deactivated only when no employees are enrolled.
   *
   * scope: `company_benefits:write`
   **/
  putV1CompanyBenefitsCompanyBenefitId(
    req: operations.PutV1CompanyBenefitsCompanyBenefitIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompanyBenefitsCompanyBenefitIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1CompanyBenefitsCompanyBenefitIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/company_benefits/{company_benefit_id}",
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
      const res: operations.PutV1CompanyBenefitsCompanyBenefitIdResponse =
        new operations.PutV1CompanyBenefitsCompanyBenefitIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companyBenefit = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CompanyBenefit
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
