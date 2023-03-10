import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1PaymentReceiptsPayrollsPayrollUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payroll_uuid" })
  payrollUuid: string;
}

export class GetV1PaymentReceiptsPayrollsPayrollUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1PaymentReceiptsPayrollsPayrollUuidPathParams;
}

export class GetV1PaymentReceiptsPayrollsPayrollUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payrollReceipt?: shared.PayrollReceipt;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}