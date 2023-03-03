import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1ExternalPayrollPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_payroll_id" })
  externalPayrollId: string;
}

export class GetV1ExternalPayrollRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1ExternalPayrollPathParams;
}

export class GetV1ExternalPayrollResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  externalPayroll?: shared.ExternalPayroll;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}