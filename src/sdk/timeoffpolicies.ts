import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class TimeOffPolicies {
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
   * getCompaniesCompanyUuidTimeOffPolicies - Get all time off policies
   *
   * Get all time off policies for a company
   * scope: `time_off_policies:read`
  **/
  getCompaniesCompanyUuidTimeOffPolicies(
    req: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyUuidTimeOffPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_uuid}/time_off_policies", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyUuidTimeOffPoliciesResponse =
            new operations.GetCompaniesCompanyUuidTimeOffPoliciesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.timeOffPolicies = [];
              const resFieldDepth: number = utils.getResFieldDepth(res);
              res.timeOffPolicies = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.TimeOffPolicy,
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
   * getTimeOffPoliciesTimeOffPolicyUuid - Get a time off policy
   *
   * Get a time off policy
   * scope: `time_off_policies:read`
  **/
  getTimeOffPoliciesTimeOffPolicyUuid(
    req: operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeOffPoliciesTimeOffPolicyUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/time_off_policies/{time_off_policy_uuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTimeOffPoliciesTimeOffPolicyUuidResponse =
            new operations.GetTimeOffPoliciesTimeOffPolicyUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.timeOffPolicy = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.TimeOffPolicy,
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
   * postCompaniesCompanyUuidTimeOffPolicies - Create a time off policy
   *
   * Create a Time Off Policy
   * scope: `time_off_policies:write`
  **/
  postCompaniesCompanyUuidTimeOffPolicies(
    req: operations.PostCompaniesCompanyUuidTimeOffPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCompaniesCompanyUuidTimeOffPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCompaniesCompanyUuidTimeOffPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_uuid}/time_off_policies", req.pathParams);

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
        const res: operations.PostCompaniesCompanyUuidTimeOffPoliciesResponse =
            new operations.PostCompaniesCompanyUuidTimeOffPoliciesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.timeOffPolicy = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.TimeOffPolicy,
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
   * postV1PayrollsPayrollIdCalculateAccruingTimeOffHours - Calculate accruing time off hours
   *
   * Returns a list of accruing time off for each time off policy associated with the employee.
   * 
   * Factors affecting the accrued hours:
   *   * the time off policy accrual method (whether they get pay per hour worked, per hour paid, with / without overtime, accumulate time off based on pay period / calendar year / anniversary)
   *   * how many hours of work during this pay period
   *   * how many hours of PTO / sick hours taken during this pay period (for per hour paid policies only)
   *   * company pay schedule frequency (for per pay period)
   * 
   * If none of the parameters is passed in, the accrued time off hour will be 0.
  **/
  postV1PayrollsPayrollIdCalculateAccruingTimeOffHours(
    req: operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payrolls/{payroll_id}/employees/{employee_id}/calculate_accruing_time_off_hours", req.pathParams);

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
        const res: operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse =
            new operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.accruingTimeOffHours = [];
              const resFieldDepth: number = utils.getResFieldDepth(res);
              res.accruingTimeOffHours = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.AccruingTimeOffHour,
                resFieldDepth
              );
            }
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
   * putTimeOffPoliciesTimeOffPolicyUuid - Update a time off policy
   *
   * Update a Time Off Policy
   * scope: `time_off_policies:write`
  **/
  putTimeOffPoliciesTimeOffPolicyUuid(
    req: operations.PutTimeOffPoliciesTimeOffPolicyUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutTimeOffPoliciesTimeOffPolicyUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutTimeOffPoliciesTimeOffPolicyUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/time_off_policies/{time_off_policy_uuid}", req.pathParams);

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
        const res: operations.PutTimeOffPoliciesTimeOffPolicyUuidResponse =
            new operations.PutTimeOffPoliciesTimeOffPolicyUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.timeOffPolicy = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.TimeOffPolicy,
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
   * putV1TimeOffPoliciesTimeOffPolicyUuidDeactivate - Deactivate a time off policy
   *
   * Deactivate a time off policy
  **/
  putV1TimeOffPoliciesTimeOffPolicyUuidDeactivate(
    req: operations.PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/time_off_policies/{time_off_policy_uuid}/deactivate", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse =
            new operations.PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.timeOffPolicy = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.TimeOffPolicy,
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
   * putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployees - Remove employees from a time off policy
   *
   * Remove employees from a time off policy
   * scope: `time_off_policies:write`
  **/
  putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployees(
    req: operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/time_off_policies/{time_off_policy_uuid}/remove_employees", req.pathParams);

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
        const res: operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse =
            new operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.timeOffPolicy = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.TimeOffPolicy,
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
   * putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployees - Add employees to a time off policy
   *
   * Add employees to a time off policy. Employees are required to have at least one job to be added to a time off policy. Accepts starting balances for non-unlimited policies
   * scope: `time_off_policies:write`
  **/
  putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployees(
    req: operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/time_off_policies/{time_off_policy_uuid}/add_employees", req.pathParams);

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
        const res: operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse =
            new operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.timeOffPolicy = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.TimeOffPolicy,
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
   * putVersionTimeOffPoliciesTimeOffPolicyUuidBalance - Update employee time off hour balances
   *
   * Updates time off hours balances for employees for a time off policy
   * scope: `time_off_policies:write`
  **/
  putVersionTimeOffPoliciesTimeOffPolicyUuidBalance(
    req: operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/time_off_policies/{time_off_policy_uuid}/balance", req.pathParams);

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
        const res: operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse =
            new operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.timeOffPolicy = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.TimeOffPolicy,
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
