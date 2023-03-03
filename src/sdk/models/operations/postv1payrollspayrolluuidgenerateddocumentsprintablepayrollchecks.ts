import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payroll_id" })
  payrollId: string;
}

export class PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "printing_format" })
  printingFormat: string;

  @SpeakeasyMetadata()
  @Expose({ name: "starting_check_number" })
  startingCheckNumber?: number;
}

export class PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody;
}

export class PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payrollCheck?: shared.PayrollCheck;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}