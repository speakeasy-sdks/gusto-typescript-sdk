import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payroll_id" })
  payrollId: string;
}

export class PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelPathParams;
}

export class PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payroll?: shared.Payroll;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}