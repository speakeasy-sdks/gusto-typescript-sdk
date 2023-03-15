import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetV1CompaniesCompanyIdPayrollsPayrollIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=payroll_id",
  })
  payrollId: string;
}
export enum GetV1CompaniesCompanyIdPayrollsPayrollIdIncludeEnum {
  Benefits = "benefits",
  Deductions = "deductions",
  PayrollStatusMeta = "payroll_status_meta",
  Taxes = "taxes",
}

export class GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=include",
  })
  include?: GetV1CompaniesCompanyIdPayrollsPayrollIdIncludeEnum;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=show_calculation",
  })
  showCalculation?: string;
}

export class GetV1CompaniesCompanyIdPayrollsPayrollIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompaniesCompanyIdPayrollsPayrollIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParams;
}

export class GetV1CompaniesCompanyIdPayrollsPayrollIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payroll?: shared.Payroll;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
