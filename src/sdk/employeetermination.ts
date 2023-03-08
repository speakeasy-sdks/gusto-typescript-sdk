import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class EmployeeTermination {
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
   * deleteV1EmployeesEmployeeIdTerminations - Delete an employee termination
   *
   * Delete an employee termination. To update an employee's termination, delete the termination first and create a new one.
  **/
  deleteV1EmployeesEmployeeIdTerminations(
    req: operations.DeleteV1EmployeesEmployeeIdTerminationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV1EmployeesEmployeeIdTerminationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV1EmployeesEmployeeIdTerminationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/terminations", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteV1EmployeesEmployeeIdTerminationsResponse =
            new operations.DeleteV1EmployeesEmployeeIdTerminationsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
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
   * getV1CompaniesCompanyIdUnprocessedTerminationPayPeriods - Get termination pay periods for a company
   *
   * When a payroll admin terminates an employee and selects "Dismissal Payroll" as the employee's final payroll, their last pay period will appear on the list. 
   * 
   * This endpoint returns the unprocessed pay periods for past and future terminated employees in a given company.
  **/
  getV1CompaniesCompanyIdUnprocessedTerminationPayPeriods(
    req: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/pay_periods/unprocessed_termination_pay_periods", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse =
            new operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.unprocessedTerminationPayPeriods = [];
              const resFieldDepth: number = utils.getResFieldDepth(res);
              res.unprocessedTerminationPayPeriods = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.UnprocessedTerminationPayPeriod,
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
   * getV1EmployeesEmployeeIdTerminations - Get terminations for an employee
   *
   * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
   * 
   * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
   * 
   * scope: `employees:read`
  **/
  getV1EmployeesEmployeeIdTerminations(
    req: operations.GetV1EmployeesEmployeeIdTerminationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1EmployeesEmployeeIdTerminationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1EmployeesEmployeeIdTerminationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/terminations", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1EmployeesEmployeeIdTerminationsResponse =
            new operations.GetV1EmployeesEmployeeIdTerminationsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.terminations = [];
              const resFieldDepth: number = utils.getResFieldDepth(res);
              res.terminations = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Termination,
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
   * postV1EmployeesEmployeeIdTerminations - Create an employee termination
   *
   * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
   * 
   * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
   * 
   * scope: `employees:write`
  **/
  postV1EmployeesEmployeeIdTerminations(
    req: operations.PostV1EmployeesEmployeeIdTerminationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1EmployeesEmployeeIdTerminationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1EmployeesEmployeeIdTerminationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/terminations", req.pathParams);

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
        const res: operations.PostV1EmployeesEmployeeIdTerminationsResponse =
            new operations.PostV1EmployeesEmployeeIdTerminationsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.termination = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Termination,
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
   * putV1TerminationsEmployeeId - Update an employee termination
   *
   * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
   * 
   * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
   * 
   * scope: `employees:write`
  **/
  putV1TerminationsEmployeeId(
    req: operations.PutV1TerminationsEmployeeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1TerminationsEmployeeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1TerminationsEmployeeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/terminations/{employee_id}", req.pathParams);

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
        const res: operations.PutV1TerminationsEmployeeIdResponse =
            new operations.PutV1TerminationsEmployeeIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.termination = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Termination,
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
