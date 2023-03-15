import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Payrolls {
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
   * getV1CompaniesCompanyIdPayrollReversals - Get approved payroll reversals
   *
   * Returns all approved Payroll Reversals for a Company.
   *
   * scope: `payrolls:read`
   **/
  getV1CompaniesCompanyIdPayrollReversals(
    req: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdPayrollReversalsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdPayrollReversalsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/payroll_reversals",
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
      const res: operations.GetV1CompaniesCompanyIdPayrollReversalsResponse =
        new operations.GetV1CompaniesCompanyIdPayrollReversalsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.payrollReversal = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.PayrollReversal
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
   * getV1CompaniesCompanyIdPayrolls - Get all payrolls for a company
   *
   * Returns all payrolls, current and past for a company.
   *
   * Notes:
   * * Hour and dollar amounts are returned as string representations of numeric decimals.
   * * Hours are represented to the thousands place; dollar amounts are represented to the cent.
   * * Every eligible compensation is returned for each employee. If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts) or “0.000” (for hours ).
   * * When include parameter with benefits value is passed, employee_benefits:read scope is required to return benefits
   *
   * scope: `payrolls:read`
   **/
  getV1CompaniesCompanyIdPayrolls(
    req: operations.GetV1CompaniesCompanyIdPayrollsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdPayrollsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdPayrollsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/payrolls",
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
      const res: operations.GetV1CompaniesCompanyIdPayrollsResponse =
        new operations.GetV1CompaniesCompanyIdPayrollsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.payrolls = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.payrolls = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Payroll,
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
   * getV1CompaniesCompanyIdPayrollsPayrollId - Get a single payroll
   *
   * Returns a payroll.
   *
   * Notes:
   * * Hour and dollar amounts are returned as string representations of numeric decimals.
   * * Hours are represented to the thousands place; dollar amounts are represented to the cent.
   * * Every eligible compensation is returned for each employee. If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts) or “0.000” (for hours ).
   * * When include parameter with benefits value is passed, employee_benefits:read scope is required to return benefits
   *
   * scope: `payrolls:read`
   **/
  getV1CompaniesCompanyIdPayrollsPayrollId(
    req: operations.GetV1CompaniesCompanyIdPayrollsPayrollIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesCompanyIdPayrollsPayrollIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesCompanyIdPayrollsPayrollIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/payrolls/{payroll_id}",
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
      const res: operations.GetV1CompaniesCompanyIdPayrollsPayrollIdResponse =
        new operations.GetV1CompaniesCompanyIdPayrollsPayrollIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.payroll = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Payroll
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
   * getV1CompaniesPayrollBlockersCompanyUuid - Get all payroll blockers for a company
   *
   * Returns a list of reasons that prevent the company from running payrolls.
   *
   * The list is empty if there are no payroll blockers.
   *
   * scope: `payrolls:run`
   **/
  getV1CompaniesPayrollBlockersCompanyUuid(
    req: operations.GetV1CompaniesPayrollBlockersCompanyUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompaniesPayrollBlockersCompanyUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompaniesPayrollBlockersCompanyUuidRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_uuid}/payrolls/blockers",
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
      const res: operations.GetV1CompaniesPayrollBlockersCompanyUuidResponse =
        new operations.GetV1CompaniesPayrollBlockersCompanyUuidResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.payrollBlockers = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.payrollBlockers = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.PayrollBlocker,
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
   * getV1PaymentReceiptsPayrollsPayrollUuid - Get a single payroll receipt
   *
   * Returns a payroll receipt.
   *
   * Notes:
   * * Hour and dollar amounts are returned as string representations of numeric decimals.
   * * Dollar amounts are represented to the cent.
   * * If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).
   *
   * scope: `payrolls:read`
   **/
  getV1PaymentReceiptsPayrollsPayrollUuid(
    req: operations.GetV1PaymentReceiptsPayrollsPayrollUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1PaymentReceiptsPayrollsPayrollUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1PaymentReceiptsPayrollsPayrollUuidRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/payrolls/{payroll_uuid}/receipt",
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
      const res: operations.GetV1PaymentReceiptsPayrollsPayrollUuidResponse =
        new operations.GetV1PaymentReceiptsPayrollsPayrollUuidResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.payrollReceipt = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.PayrollReceipt
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
   * getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStub - Get an employee pay stub (pdf)
   *
   * Get an employee's pay stub for the specified payroll. By default, an application/pdf response will be returned. No other content types are currently supported, but may be supported in the future.
   *
   * scope: `payrolls:run`
   **/
  getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStub(
    req: operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/payrolls/{payroll_id}/employees/{employee_id}/pay_stub",
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
      const res: operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse =
        new operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case [200, 404].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * postV1CompaniesCompanyIdPayrolls - Create an off-cycle payroll
   *
   * Creates a new, unprocessed, off-cycle payroll.
   *
   * ## `off_cycle_reason`
   * - External benefits and deductions will be included when the `off_cycle_reason` is set to `Correction`.
   * - All benefits and deductions are blocked when the `off_cycle_reason` is set to `Bonus`.
   **/
  postV1CompaniesCompanyIdPayrolls(
    req: operations.PostV1CompaniesCompanyIdPayrollsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1CompaniesCompanyIdPayrollsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1CompaniesCompanyIdPayrollsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/payrolls",
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
      const res: operations.PostV1CompaniesCompanyIdPayrollsResponse =
        new operations.PostV1CompaniesCompanyIdPayrollsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.payroll = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Payroll
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
   * postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecks - Generate payroll printable checks (pdf)
   *
   * This endpoint initiates the generation of employee checks for the payroll specified by payroll_id. A generation status and corresponding generated document request_uuid will be returned. Use the generated document GET endpoint with document_type: `printable_payroll_checks` and request_uuid to poll the check generation process and retrieve the generated check URL upon completion.
   *
   * scope: `generated_documents:write`
   **/
  postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecks(
    req: operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/payrolls/{payroll_id}/generated_documents/printable_payroll_checks",
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
      const res: operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse =
        new operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.payrollCheck = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.PayrollCheck
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
   * putApiV1CompaniesCompanyIdPayrollsPayrollIdCancel - Cancel a payroll
   *
   * Transitions a `processed` payroll back to the `unprocessed` state. A payroll can be canceled if it meets both criteria:
   * - `processed` is true
   * - Current time is earlier than 3:30pm PT on the payroll_deadline
   *
   **/
  putApiV1CompaniesCompanyIdPayrollsPayrollIdCancel(
    req: operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/payrolls/{payroll_id}/cancel",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse =
        new operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.payroll = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Payroll
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
   * putV1CompaniesCompanyIdPayrolls - Update a payroll by ID
   *
   * This endpoint allows you to update information for one or more employees for a specific **unprocessed** payroll.
   *
   * scope: `payrolls:write`
   **/
  putV1CompaniesCompanyIdPayrolls(
    req: operations.PutV1CompaniesCompanyIdPayrollsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompaniesCompanyIdPayrollsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1CompaniesCompanyIdPayrollsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/payrolls/{payroll_id}",
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
      const res: operations.PutV1CompaniesCompanyIdPayrollsResponse =
        new operations.PutV1CompaniesCompanyIdPayrollsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.payroll = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Payroll
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
   * putV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDate - Update a payroll
   *
   * This endpoint allows you to update information for one or more employees for a specific **unprocessed** payroll.
   *
   * The payrolls are identified by their pay periods’ start_date and end_date. Both are required and must correspond with an existing, unprocessed payroll. *If the dates do not match, the entire request will be rejected.* This was an explicit design decision to remove any assumptions around the time span for data sent.
   *
   * scope: `payrolls:write`
   **/
  putV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDate(
    req: operations.PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/payrolls/{pay_period_start_date}/{pay_period_end_date}",
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
      const res: operations.PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateResponse =
        new operations.PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.payroll = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Payroll
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
   * putV1CompaniesCompanyIdPayrollsPayrollIdCalculate - Calculate a payroll
   *
   * Performs calculations for taxes, benefits, and deductions for an unprocessed payroll. The calculated payroll details provide a preview of the actual values that will be used when the payroll is run.
   *
   * This calculation is asynchronous and a successful request responds with a 202 HTTP status. To view the details of the calculated payroll, use the GET /v1/companies/{company_id}/payrolls/{payroll_id} endpoint with the *show_calculation=true* and *include=taxes,benefits,deductions* params.
   *
   * If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.
   **/
  putV1CompaniesCompanyIdPayrollsPayrollIdCalculate(
    req: operations.PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/payrolls/{payroll_id}/calculate",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse =
        new operations.PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case [202, 404].includes(httpRes?.status):
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.putV1CompaniesCompanyIdPayrollsPayrollIdCalculate422ApplicationJSONOneOf =
              httpRes?.data;
          }
          break;
      }

      return res;
    });
  }

  /**
   * putV1CompaniesCompanyIdPayrollsPayrollIdSubmit - Submit payroll
   *
   * Submits an unprocessed payroll to be calculated and run. This submission is asynchronous and a successful request responds with a 202 HTTP status. Upon success, transitions the payroll to the `processed` state.
   *
   * If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.
   **/
  putV1CompaniesCompanyIdPayrollsPayrollIdSubmit(
    req: operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/companies/{company_id}/payrolls/{payroll_id}/submit",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse =
        new operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case [202, 404].includes(httpRes?.status):
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.putV1CompaniesCompanyIdPayrollsPayrollIdSubmit422ApplicationJSONOneOf =
              httpRes?.data;
          }
          break;
      }

      return res;
    });
  }
}
