import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1CompaniesCompanyIdPayrollsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;
}
export enum GetV1CompaniesCompanyIdPayrollsIncludeEnum {
    Benefits = "benefits",
    Deductions = "deductions",
    PayrollStatusMeta = "payroll_status_meta",
    Taxes = "taxes"
}

export class GetV1CompaniesCompanyIdPayrollsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: GetV1CompaniesCompanyIdPayrollsIncludeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_off_cycle" })
  includeOffCycle?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=processed" })
  processed?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: string;
}

export class GetV1CompaniesCompanyIdPayrollsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompaniesCompanyIdPayrollsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1CompaniesCompanyIdPayrollsQueryParams;
}

export class GetV1CompaniesCompanyIdPayrollsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Payroll })
  payrolls?: shared.Payroll[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}