import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class EmployeeBenefits {
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
   * deleteV1EmployeeBenefitsEmployeeBenefitId - Delete an employee benefit
   *
   * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
   * 
   * scope: `employee_benefits:write`
  **/
  deleteV1EmployeeBenefitsEmployeeBenefitId(
    req: operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employee_benefits/{employee_benefit_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV1EmployeeBenefitsEmployeeBenefitId - Get an employee benefit
   *
   * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
   * 
   * scope: `employee_benefits:read`
  **/
  getV1EmployeeBenefitsEmployeeBenefitId(
    req: operations.GetV1EmployeeBenefitsEmployeeBenefitIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1EmployeeBenefitsEmployeeBenefitIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1EmployeeBenefitsEmployeeBenefitIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employee_benefits/{employee_benefit_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1EmployeeBenefitsEmployeeBenefitIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employeeBenefit = plainToInstance(
                shared.EmployeeBenefit,
                httpRes?.data as shared.EmployeeBenefit,
                { excludeExtraneousValues: true }
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
   * getV1EmployeesEmployeeIdEmployeeBenefits - Get all benefits for an employee
   *
   * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
   * 
   * Returns an array of all employee benefits for this employee
   * 
   * scope: `employee_benefits:read`
  **/
  getV1EmployeesEmployeeIdEmployeeBenefits(
    req: operations.GetV1EmployeesEmployeeIdEmployeeBenefitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1EmployeesEmployeeIdEmployeeBenefitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1EmployeesEmployeeIdEmployeeBenefitsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/employee_benefits", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1EmployeesEmployeeIdEmployeeBenefitsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employeeBenefits = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * postEmployeeYtdBenefitAmountsFromDifferentCompany - Create year-to-date benefit amounts from a different company
   *
   * Year-to-date benefit amounts from a different company represents the amount of money added to an employees plan during a current year, made outside of the current contribution when they were employed at a different company.
   * 
   * scope: `employee_benefits:write`
  **/
  postEmployeeYtdBenefitAmountsFromDifferentCompany(
    req: operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/ytd_benefit_amounts_from_different_company", req.pathParams);

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
        const res: operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.unprocessableEntityErrorObject = plainToInstance(
                shared.UnprocessableEntityErrorObject,
                httpRes?.data as shared.UnprocessableEntityErrorObject,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postV1EmployeesEmployeeIdEmployeeBenefits - Create an employee benefit
   *
   * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
   * 
   * scope: `employee_benefits:write`
  **/
  postV1EmployeesEmployeeIdEmployeeBenefits(
    req: operations.PostV1EmployeesEmployeeIdEmployeeBenefitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1EmployeesEmployeeIdEmployeeBenefitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1EmployeesEmployeeIdEmployeeBenefitsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/employee_benefits", req.pathParams);

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
        const res: operations.PostV1EmployeesEmployeeIdEmployeeBenefitsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employeeBenefit = plainToInstance(
                shared.EmployeeBenefit,
                httpRes?.data as shared.EmployeeBenefit,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.unprocessableEntityErrorObject = plainToInstance(
                shared.UnprocessableEntityErrorObject,
                httpRes?.data as shared.UnprocessableEntityErrorObject,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putV1EmployeeBenefitsEmployeeBenefitId - Update an employee benefit
   *
   * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
   * 
   * scope: `employee_benefits:write`
  **/
  putV1EmployeeBenefitsEmployeeBenefitId(
    req: operations.PutV1EmployeeBenefitsEmployeeBenefitIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1EmployeeBenefitsEmployeeBenefitIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1EmployeeBenefitsEmployeeBenefitIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employee_benefits/{employee_benefit_id}", req.pathParams);

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
        const res: operations.PutV1EmployeeBenefitsEmployeeBenefitIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employeeBenefit = plainToInstance(
                shared.EmployeeBenefit,
                httpRes?.data as shared.EmployeeBenefit,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.unprocessableEntityErrorObject = plainToInstance(
                shared.UnprocessableEntityErrorObject,
                httpRes?.data as shared.UnprocessableEntityErrorObject,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
