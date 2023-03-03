import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class PutV1CompaniesCompanyIdPayrollsPayrollIdCalculatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payroll_id" })
  payrollId: string;
}

export class PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1CompaniesCompanyIdPayrollsPayrollIdCalculatePathParams;
}

export class PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putV1CompaniesCompanyIdPayrollsPayrollIdCalculate422ApplicationJSONOneOf?: any;
}