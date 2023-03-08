import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class EmployeePaymentMethod {
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
   * deleteV1EmployeesEmployeeIdBankAccountsBankAccountId - Delete an employee bank account
   *
   * Deletes an employee bank account. To update an employee's bank account details, delete the bank account first and create a new one.
  **/
  deleteV1EmployeesEmployeeIdBankAccountsBankAccountId(
    req: operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/bank_accounts/{bank_account_uuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse =
            new operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse({
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
   * getV1EmployeesEmployeeIdPaymentMethod - Get an employee's payment method
   *
   * Fetches an employee's payment method. An employee payment method describes how the payment should be split across the employee's associated bank accounts.
  **/
  getV1EmployeesEmployeeIdPaymentMethod(
    req: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1EmployeesEmployeeIdPaymentMethodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1EmployeesEmployeeIdPaymentMethodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/payment_method", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV1EmployeesEmployeeIdPaymentMethodResponse =
            new operations.GetV1EmployeesEmployeeIdPaymentMethodResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employeePaymentMethod = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.EmployeePaymentMethod,
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
   * postV1EmployeesEmployeeIdBankAccounts - Create an employee bank account
   *
   * Creates an employee bank account. An employee can have multiple bank accounts. Note that creating an employee bank account will also update the employee's payment method.
  **/
  postV1EmployeesEmployeeIdBankAccounts(
    req: operations.PostV1EmployeesEmployeeIdBankAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1EmployeesEmployeeIdBankAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1EmployeesEmployeeIdBankAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/bank_accounts", req.pathParams);

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
        const res: operations.PostV1EmployeesEmployeeIdBankAccountsResponse =
            new operations.PostV1EmployeesEmployeeIdBankAccountsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employeeBankAccount = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.EmployeeBankAccount,
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
   * putV1EmployeesEmployeeIdPaymentMethod - Update an employee's payment method
   *
   * Updates an employee's payment method. Note that creating an employee bank account will also update the employee's payment method.
  **/
  putV1EmployeesEmployeeIdPaymentMethod(
    req: operations.PutV1EmployeesEmployeeIdPaymentMethodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1EmployeesEmployeeIdPaymentMethodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1EmployeesEmployeeIdPaymentMethodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/employees/{employee_id}/payment_method", req.pathParams);

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
        const res: operations.PutV1EmployeesEmployeeIdPaymentMethodResponse =
            new operations.PutV1EmployeesEmployeeIdPaymentMethodResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.employeePaymentMethod = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.EmployeePaymentMethod,
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
