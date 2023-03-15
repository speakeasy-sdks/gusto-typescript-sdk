import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=payroll_id",
  })
  payrollId: string;
}

export class PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitPathParams;
}

export class PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  putV1CompaniesCompanyIdPayrollsPayrollIdSubmit422ApplicationJSONOneOf?: any;
}
