import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Employees {
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
   * deleteV1Employee - Delete an onboarding employee
   *
   * Use this endpoint to delete an employee who is in onboarding. Deleting an onboarded employee is not allowed. Please check out the Terminations api if you need to terminate an onboarded employee.
  **/
  deleteV1Employee(
    req: operations.DeleteV1EmployeeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV1EmployeeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV1EmployeeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteV1EmployeeResponse =
            new operations.DeleteV1EmployeeResponse({
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
   * getV1Employees - Get an employee
   *
   * Get an employee.
   * 
   * scope: `employees:read`
   * 
  **/
  getV1Employees(
    req: operations.GetV1EmployeesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1EmployeesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1EmployeesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}", req.pathParams);
    
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
        const res: operations.GetV1EmployeesResponse =
            new operations.GetV1EmployeesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employee = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Employee,
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
   * getV1EmployeesEmployeeIdCustomFields - Get an employee's custom fields
   *
   * Returns a list of the employee's custom fields.
   * 
   * scope: `employees:read`
  **/
  getV1EmployeesEmployeeIdCustomFields(
    req: operations.GetV1EmployeesEmployeeIdCustomFieldsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1EmployeesEmployeeIdCustomFieldsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1EmployeesEmployeeIdCustomFieldsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/custom_fields", req.pathParams);
    
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
        const res: operations.GetV1EmployeesEmployeeIdCustomFieldsResponse =
            new operations.GetV1EmployeesEmployeeIdCustomFieldsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getV1EmployeesEmployeeIdCustomFields200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetV1EmployeesEmployeeIdCustomFields200ApplicationJSON,
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
   * getV1EmployeesEmployeeIdHomeAddress - Get an employee's home address
   *
   * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
   * 
   * scope: `employees:read`
  **/
  getV1EmployeesEmployeeIdHomeAddress(
    req: operations.GetV1EmployeesEmployeeIdHomeAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1EmployeesEmployeeIdHomeAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1EmployeesEmployeeIdHomeAddressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/home_address", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1EmployeesEmployeeIdHomeAddressResponse =
            new operations.GetV1EmployeesEmployeeIdHomeAddressResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employeeAddress = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.EmployeeAddress,
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
   * getV1EmployeesEmployeeIdOnboardingStatus - Get the employee's onboarding status
   *
   * # Description
   * Retrieves an employee's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.
   * 
   * scope: `employees:read`
   * 
   * ## onboarding_status
   * 
   * ### Admin-facilitated onboarding
   * | onboarding_status | Description |
   * |:------------------|------------:|
   * | `admin_onboarding_incomplete` | Admin needs to complete the full employee-onboarding. |
   * | `onboarding_completed` | Employee has been fully onboarded and verified. |
   * 
   * ### Employee self-onboarding
   * | onboarding_status | Description |
   * |:------------------|------------:|
   * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the employee. |
   * | `self_onboarding_pending_invite` | Admin has the intention to invite the employee to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
   * | `self_onboarding_invited` | Employee has been sent an invitation to self-onboard. |
   * | `self_onboarding_invited_started` | Employee has started the self-onboarding process. |
   * | `self_onboarding_invited_overdue` | Employee's start date has passed, and employee has still not completed self-onboarding. |
   * | `self_onboarding_completed_by_employee` | Employee has completed entering in their information. The status should be updated via API to "self_onboarding_awaiting_admin_review" from here, once the Admin has started reviewing. |
   * | `self_onboarding_awaiting_admin_review` | Admin needs to review employee's entered information and confirm onboarding. |
   * | `onboarding_completed` | Employee has been fully onboarded and verified. |
   * 
   * ## onboarding_steps
   * 
   * | onboarding_steps | Requirement(s) to be completed |
   * |:-----------------|-------------------------------:|
   * | `personal_details` | Add employee's first name, last name, email, date of birth, social security number |
   * | `compensation_details` | Associate employee to a job & compensation. |
   * | `add_work_address` | Add employee work address. |
   * | `add_home_address` | Add employee home address. |
   * | `federal_tax_setup` | Set up federal tax withholdings. |
   * | `state_tax_setup` | Set up state tax withholdings. |
   * | `direct_deposit_setup` | Set up employee's direct deposit. |
   * | `employee_form_signing` | Employee forms (e.g., W4, direct deposit authorization) are generated & signed. |
   * | `admin_review` | Admin reviews & confirms employee details (only required for Employee self-onboarding) |
  **/
  getV1EmployeesEmployeeIdOnboardingStatus(
    req: operations.GetV1EmployeesEmployeeIdOnboardingStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1EmployeesEmployeeIdOnboardingStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1EmployeesEmployeeIdOnboardingStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/onboarding_status", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1EmployeesEmployeeIdOnboardingStatusResponse =
            new operations.GetV1EmployeesEmployeeIdOnboardingStatusResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employeeOnboardingStatus = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.EmployeeOnboardingStatus,
              );
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getVersionEmployeesTimeOffActivities - Get employee time off activities
   *
   * Get employee time off activities.
   * 
   * scope: `employee_time_off_activities:read`
  **/
  getVersionEmployeesTimeOffActivities(
    req: operations.GetVersionEmployeesTimeOffActivitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVersionEmployeesTimeOffActivitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVersionEmployeesTimeOffActivitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_uuid}/time_off_activities", req.pathParams);
    
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
        const res: operations.GetVersionEmployeesTimeOffActivitiesResponse =
            new operations.GetVersionEmployeesTimeOffActivitiesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.timeOffActivity = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.TimeOffActivity,
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
   * postV1Employees - Create an employee
   *
   * Create an employee.
   * 
   * scope: `employees:write`
  **/
  postV1Employees(
    req: operations.PostV1EmployeesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1EmployeesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1EmployeesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/employees", req.pathParams);

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
        const res: operations.PostV1EmployeesResponse =
            new operations.PostV1EmployeesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employee = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Employee,
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
   * putV1EmployeeFinishOnboarding - Finish onboarding an employee
   *
   * This endpoint is currently supported but will eventually be deprecated; please use `/v1/employees/{employee_id}/onboarding_status` instead.
   * 
   * Call this endpoint as the very last step of employee onboarding to complete their onboarding. When successful, the employee's `onboarded` attribute will be updated to true, indicating that they can be included in company's payrolls.
  **/
  putV1EmployeeFinishOnboarding(
    req: operations.PutV1EmployeeFinishOnboardingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1EmployeeFinishOnboardingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1EmployeeFinishOnboardingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/finish_onboarding", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutV1EmployeeFinishOnboardingResponse =
            new operations.PutV1EmployeeFinishOnboardingResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employee = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Employee,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putV1Employees - Update an employee
   *
   * Update an employee.
   * 
   * scope: `employees:write`
  **/
  putV1Employees(
    req: operations.PutV1EmployeesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1EmployeesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1EmployeesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}", req.pathParams);

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
        const res: operations.PutV1EmployeesResponse =
            new operations.PutV1EmployeesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employee = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Employee,
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
   * putV1EmployeesEmployeeIdHomeAddress - Update an employee's home address
   *
   * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
   * 
   * scope: `employees:write`
  **/
  putV1EmployeesEmployeeIdHomeAddress(
    req: operations.PutV1EmployeesEmployeeIdHomeAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1EmployeesEmployeeIdHomeAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1EmployeesEmployeeIdHomeAddressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/home_address", req.pathParams);

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
        const res: operations.PutV1EmployeesEmployeeIdHomeAddressResponse =
            new operations.PutV1EmployeesEmployeeIdHomeAddressResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employeeAddress = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.EmployeeAddress,
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
   * putV1EmployeesEmployeeIdOnboardingStatus - Update the employee's onboarding status
   *
   * scope: `employees:write`
   * 
   * Updates an employee's onboarding status.
   * Below is a list of valid onboarding status changes depending on the intended action to be performed on behalf of the employee.
   * 
   * | Action | current onboarding_status | new onboarding_status |
   * |:------------------|:------------:|----------:|
   * | Mark an employee as self-onboarding | `admin_onboarding_incomplete` | `self_onboarding_pending_invite` |
   * | Invite an employee to self-onboard | `admin_onboarding_incomplete` or `self_onboarding_pending_invite` | `self_onboarding_invited` |
   * | Cancel an employee's self-onboarding | `self_onboarding_invited` or `self_onboarding_pending_invite` | `admin_onboarding_incomplete` |
   * | Review an employee's self-onboarded info | `self_onboarding_completed_by_employee` | `self_onboarding_awaiting_admin_review` |
   * | Finish an employee's onboarding | `admin_onboarding_incomplete` or `self_onboarding_awaiting_admin_review` | `onboarding_completed` |
  **/
  putV1EmployeesEmployeeIdOnboardingStatus(
    req: operations.PutV1EmployeesEmployeeIdOnboardingStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1EmployeesEmployeeIdOnboardingStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1EmployeesEmployeeIdOnboardingStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/onboarding_status", req.pathParams);

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
        const res: operations.PutV1EmployeesEmployeeIdOnboardingStatusResponse =
            new operations.PutV1EmployeesEmployeeIdOnboardingStatusResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employeeOnboardingStatus = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.EmployeeOnboardingStatus,
              );
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
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
