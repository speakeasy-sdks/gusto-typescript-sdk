/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum GetV1CompaniesCompanyIdPayrollsInclude {
  Benefits = "benefits",
  Deductions = "deductions",
  PayrollStatusMeta = "payroll_status_meta",
  Taxes = "taxes",
}

export class GetV1CompaniesCompanyIdPayrollsRequest extends SpeakeasyBase {
  /**
   * The UUID of the company
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;

  /**
   * Return payrolls whose pay period is before the end date
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=end_date",
  })
  endDate?: string;

  /**
   * Include the requested attribute in the response
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=include",
  })
  include?: GetV1CompaniesCompanyIdPayrollsInclude[];

  /**
   * Whether to include off cycle payrolls in the response
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=include_off_cycle",
  })
  includeOffCycle?: boolean;

  /**
   * Whether to return processed or unprocessed payrolls
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=processed",
  })
  processed?: boolean;

  /**
   * Return payrolls whose pay period is after the start date
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=start_date",
  })
  startDate?: string;
}

export class GetV1CompaniesCompanyIdPayrollsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Example response
   */
  @SpeakeasyMetadata({ elemType: shared.Payroll })
  payrolls?: shared.Payroll[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
