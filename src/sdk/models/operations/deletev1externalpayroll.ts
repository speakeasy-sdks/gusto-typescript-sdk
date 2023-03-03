import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class DeleteV1ExternalPayrollPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_payroll_id" })
  externalPayrollId: string;
}

export class DeleteV1ExternalPayrollRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV1ExternalPayrollPathParams;
}

export class DeleteV1ExternalPayrollResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}