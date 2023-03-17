import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class JobsAndCompensations {
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
   * deleteV1JobsJobId - Delete an individual job
   *
   * Deletes a specific job that an employee holds.
   *
   * scope: `jobs:write`
   **/
  deleteV1JobsJobId(
    req: operations.DeleteV1JobsJobIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV1JobsJobIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV1JobsJobIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/jobs/{job_id}", req);

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
      const res: operations.DeleteV1JobsJobIdResponse =
        new operations.DeleteV1JobsJobIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case [204, 404].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * getV1CompensationsCompensationId - Get a compensation
   *
   * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
   *
   * Note: Currently, jobs are arbitrarily limited to a single compensation as multiple compensations per job are not yet available in Gusto. The API is architected as if multiple compensations may exist, so integrations should integrate under the same assumption. The only exception is that creating a compensation with the same `job_uuid` as another will fail with a relevant error.
   *
   * scope: `jobs:read`
   *
   **/
  getV1CompensationsCompensationId(
    req: operations.GetV1CompensationsCompensationIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1CompensationsCompensationIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1CompensationsCompensationIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/compensations/{compensation_id}",
      req
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
      const res: operations.GetV1CompensationsCompensationIdResponse =
        new operations.GetV1CompensationsCompensationIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.compensation = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Compensation
            );
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            let out: Uint8Array = new Uint8Array(resBody.length);
            for (let i: number = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case httpRes?.status == 404:
          break;
      }

      return res;
    });
  }

  /**
   * getV1EmployeesEmployeeIdJobs - Get jobs for an employee
   *
   * Get all of the jobs that an employee holds.
   *
   * scope: `jobs:read`
   **/
  getV1EmployeesEmployeeIdJobs(
    req: operations.GetV1EmployeesEmployeeIdJobsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1EmployeesEmployeeIdJobsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1EmployeesEmployeeIdJobsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/employees/{employee_id}/jobs",
      req
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetV1EmployeesEmployeeIdJobsResponse =
        new operations.GetV1EmployeesEmployeeIdJobsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.jobs = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.jobs = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Job,
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
   * getV1JobsJobId - Get a job
   *
   * Get a job.
   *
   * scope: `jobs:read`
   **/
  getV1JobsJobId(
    req: operations.GetV1JobsJobIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1JobsJobIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1JobsJobIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/jobs/{job_id}", req);

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetV1JobsJobIdResponse =
        new operations.GetV1JobsJobIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.job = utils.deserializeJSONResponse(httpRes?.data, shared.Job);
          }
          break;
        case httpRes?.status == 404:
          break;
      }

      return res;
    });
  }

  /**
   * getV1JobsJobIdCompensations - Get compensations for a job
   *
   * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. By default the API returns only the current compensation - see the `include` query parameter for retrieving all compensations.
   *
   * Note: Currently the API does not support creating multiple compensations per job - creating a compensation with the same `job_uuid` as another will fail with a relevant error.
   *
   * Use `flsa_status` to determine if an employee is eligible for overtime.
   *
   * scope: `jobs:read`
   **/
  getV1JobsJobIdCompensations(
    req: operations.GetV1JobsJobIdCompensationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV1JobsJobIdCompensationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV1JobsJobIdCompensationsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/jobs/{job_id}/compensations",
      req
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetV1JobsJobIdCompensationsResponse =
        new operations.GetV1JobsJobIdCompensationsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.compensations = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.compensations = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Compensation,
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
   * postV1JobsJobId - Create a job
   *
   * Create a job.
   *
   * scope: `jobs:write`
   **/
  postV1JobsJobId(
    req: operations.PostV1JobsJobIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV1JobsJobIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV1JobsJobIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/employees/{employee_id}/jobs",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
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
      const res: operations.PostV1JobsJobIdResponse =
        new operations.PostV1JobsJobIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.job = utils.deserializeJSONResponse(httpRes?.data, shared.Job);
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
   * putV1CompensationsCompensationId - Update a compensation
   *
   * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
   *
   * Note: Currently, jobs are arbitrarily limited to a single compensation as multiple compensations per job are not yet available in Gusto. The API is architected as if multiple compensations may exist, so integrations should integrate under the same assumption. The only exception is that creating a compensation with the same `job_uuid` as another will fail with a relevant error
   *
   * scope: `jobs:write`
   **/
  putV1CompensationsCompensationId(
    req: operations.PutV1CompensationsCompensationIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1CompensationsCompensationIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1CompensationsCompensationIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/compensations/{compensation_id}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
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
      const res: operations.PutV1CompensationsCompensationIdResponse =
        new operations.PutV1CompensationsCompensationIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.compensation = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Compensation
            );
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            let out: Uint8Array = new Uint8Array(resBody.length);
            for (let i: number = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
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
   * putV1JobsJobId - Update a job
   *
   * Update a job.
   *
   * scope: `jobs:write`
   **/
  putV1JobsJobId(
    req: operations.PutV1JobsJobIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV1JobsJobIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV1JobsJobIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/jobs/{job_id}", req);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
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
      const res: operations.PutV1JobsJobIdResponse =
        new operations.PutV1JobsJobIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.job = utils.deserializeJSONResponse(httpRes?.data, shared.Job);
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
