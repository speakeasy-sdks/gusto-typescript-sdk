import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Contractors {
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
   * deleteV1ContractorsContractorId - Delete a contractor
   *
   * A contractor can only be deleted when there are no contractor payments.
  **/
  deleteV1ContractorsContractorId(
    req: operations.DeleteV1ContractorsContractorIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV1ContractorsContractorIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV1ContractorsContractorIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteV1ContractorsContractorIdResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
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
   * getV1CompaniesCompanyIdContractors - Get contractors of a company
   *
   * Get all contractors, active and inactive, individual and business, for a company.
   * 
   * scope: `employees:read`
  **/
  getV1CompaniesCompanyIdContractors(
    req: operations.GetV1CompaniesCompanyIdContractorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdContractorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdContractorsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/contractors", req.pathParams);
    
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
        const res: operations.GetV1CompaniesCompanyIdContractorsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractors = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV1ContractorsContractorId - Get a contractor
   *
   * Get a contractor.
   * 
   * scope: `employees:read`
  **/
  getV1ContractorsContractorId(
    req: operations.GetV1ContractorsContractorIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1ContractorsContractorIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1ContractorsContractorIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1ContractorsContractorIdResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractor = plainToInstance(
                shared.Contractor,
                httpRes?.data as shared.Contractor,
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
   * getV1ContractorsContractorUuidAddress - Get a contractor address
   *
   * The address of a contractor is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
   * 
   * scope: `contractors:read`
  **/
  getV1ContractorsContractorUuidAddress(
    req: operations.GetV1ContractorsContractorUuidAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1ContractorsContractorUuidAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1ContractorsContractorUuidAddressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_uuid}/address", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1ContractorsContractorUuidAddressResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractorAddress = plainToInstance(
                shared.ContractorAddress1,
                httpRes?.data as shared.ContractorAddress1,
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
   * getV1ContractorsContractorUuidOnboardingStatus - Get the contractor's onboarding status
   *
   * Retrieves a contractor's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.
   * 
   * scope: `contractors.read`
   * 
   * ## onboarding_status
   * 
   * ### Admin-facilitated onboarding
   * | onboarding_status | Description |
   * |:------------------|------------:|
   * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
   * | `admin_onboarding_review` | All information has been completed and admin needs to confirm onboarding. |
   * | `onboarding_completed` | Contractor has been fully onboarded and verified. |
   * 
   * ### Contractor self-onboarding
   * 
   * | onboarding_status | Description |
   * | --- | ----------- |
   * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
   * | `self_onboarding_not_invited` | Admin has the intention to invite the contractor to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
   * | `self_onboarding_invited` | Contractor has been sent an invitation to self-onboard. |
   * | `self_onboarding_started` | Contractor has started the self-onboarding process. |
   * | `self_onboarding_review` | Admin needs to review contractors's entered information and confirm onboarding. |
   * | `onboarding_completed` | Contractor has been fully onboarded and verified. |
   * 
   * ## onboarding_steps
   * 
   * | onboarding_steps | Requirement(s) to be completed |
   * |:-----------------|-------------------------------:|
   * | `basic_details` | Add individual contractor's first name, last name, social security number or Business name and EIN depending on the contractor type |
   * | `add_address` | Add contractor address. |
   * | `compensation_details` | Add contractor compensation. |
   * | `payment_details` | Set up contractor's direct deposit or set to check. |
   * | `sign_documents` | Contractor forms (e.g., W9) are generated & signed. |
   * | `file_new_hire_report` | Contractor new hire report is generated. |
  **/
  getV1ContractorsContractorUuidOnboardingStatus(
    req: operations.GetV1ContractorsContractorUuidOnboardingStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1ContractorsContractorUuidOnboardingStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1ContractorsContractorUuidOnboardingStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_uuid}/onboarding_status", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1ContractorsContractorUuidOnboardingStatusResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractorOnboardingStatus = plainToInstance(
                shared.ContractorOnboardingStatus,
                httpRes?.data as shared.ContractorOnboardingStatus,
                { excludeExtraneousValues: true }
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
   * postV1CompaniesCompanyIdContractors - Create a contractor
   *
   * Create an individual or business contractor.
   * 
   * scope: `employees:write`
  **/
  postV1CompaniesCompanyIdContractors(
    req: operations.PostV1CompaniesCompanyIdContractorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1CompaniesCompanyIdContractorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1CompaniesCompanyIdContractorsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/companies/{company_id}/contractors", req.pathParams);

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
        const res: operations.PostV1CompaniesCompanyIdContractorsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractor = plainToInstance(
                shared.Contractor,
                httpRes?.data as shared.Contractor,
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
   * putV1ContractorsContractorId - Update a contractor
   *
   * Update a contractor.
   * 
   * `scope: employees.write`
   * 
   * > 🚧 Warning
   * >
   * > Watch out when changing a contractor's type (when the contractor is finished onboarding). Specifically, changing contractor type can be dangerous since Gusto won’t recognize and file two separate 1099s if they simply change from business to individual
  **/
  putV1ContractorsContractorId(
    req: operations.PutV1ContractorsContractorIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1ContractorsContractorIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1ContractorsContractorIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_id}", req.pathParams);

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
        const res: operations.PutV1ContractorsContractorIdResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractor = plainToInstance(
                shared.Contractor,
                httpRes?.data as shared.Contractor,
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
   * putV1ContractorsContractorUuidAddress - Update a contractor's address
   *
   * The address of a contractor is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
   * 
   * scope: `contractors:write`
  **/
  putV1ContractorsContractorUuidAddress(
    req: operations.PutV1ContractorsContractorUuidAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1ContractorsContractorUuidAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1ContractorsContractorUuidAddressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_uuid}/address", req.pathParams);

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
        const res: operations.PutV1ContractorsContractorUuidAddressResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractorAddress = plainToInstance(
                shared.ContractorAddress1,
                httpRes?.data as shared.ContractorAddress1,
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
   * putV1ContractorsContractorUuidOnboardingStatus - Change the contractor's onboarding status
   *
   * scope: `contractors:write`
   * 
   * Updates a contractor's onboarding status.
   * Below is a list of valid onboarding status changes depending on the intended action to be performed on behalf of the contractor.
   * 
   * | Action | current onboarding_status | new onboarding_status |
   * |:------------------|:------------:|----------:|
   * | Mark a contractor as self-onboarding | `admin_onboarding_incomplete` | `self_onboarding_not_invited` |
   * | Invite an employee to self-onboard | `admin_onboarding_incomplete` or `self_onboarding_not_invited` | `self_onboarding_invited` |
   * | Cancel an employee's self-onboarding | `self_onboarding_invited` or `self_onboarding_not_invited` | `admin_onboarding_incomplete` |
   * | Review an employee's self-onboarded info | `self_onboarding_started` | `self_onboarding_review` |
   * | Finish an employee's onboarding | `admin_onboarding_incomplete` or `self_onboarding_review` | `onboarding_completed` |
  **/
  putV1ContractorsContractorUuidOnboardingStatus(
    req: operations.PutV1ContractorsContractorUuidOnboardingStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1ContractorsContractorUuidOnboardingStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1ContractorsContractorUuidOnboardingStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/contractors/{contractor_uuid}/onboarding_status", req.pathParams);

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
        const res: operations.PutV1ContractorsContractorUuidOnboardingStatusResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.contractorOnboardingStatus = plainToInstance(
                shared.ContractorOnboardingStatus,
                httpRes?.data as shared.ContractorOnboardingStatus,
                { excludeExtraneousValues: true }
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
