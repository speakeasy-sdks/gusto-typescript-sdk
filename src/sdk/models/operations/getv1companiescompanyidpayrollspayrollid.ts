import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export enum GetV1CompaniesCompanyIdPayrollsPayrollIdIncludeEnum {
  Benefits = "benefits",
  Deductions = "deductions",
  PayrollStatusMeta = "payroll_status_meta",
  Taxes = "taxes",
}

export class GetV1CompaniesCompanyIdPayrollsPayrollIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=include",
  })
  include?: GetV1CompaniesCompanyIdPayrollsPayrollIdIncludeEnum;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=payroll_id",
  })
  payrollId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=show_calculation",
  })
  showCalculation?: string;
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
