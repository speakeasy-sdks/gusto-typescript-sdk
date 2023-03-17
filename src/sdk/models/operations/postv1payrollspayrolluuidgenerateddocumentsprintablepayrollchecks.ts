import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "printing_format" })
  printingFormat: string;

  @SpeakeasyMetadata()
  @Expose({ name: "starting_check_number" })
  startingCheckNumber?: number;
}

export class PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=payroll_id",
  })
  payrollId: string;
}

export class PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payrollCheck?: shared.PayrollCheck;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
