import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum PutV1CompensationsCompensationIdRequestBodyFlsaStatusEnum {
  Exempt = "Exempt",
  SalariedNonexempt = "Salaried Nonexempt",
  Nonexempt = "Nonexempt",
  CommissionOnlyExempt = "Commission Only Exempt",
  CommissionOnlyNonexempt = "Commission Only Nonexempt",
  Owner = "Owner",
}

// PutV1CompensationsCompensationIdRequestBodyMinimumWages
/**
 * The minimum wage record you want to apply to the compensation
 **/
export class PutV1CompensationsCompensationIdRequestBodyMinimumWages extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}
export enum PutV1CompensationsCompensationIdRequestBodyPaymentUnitEnum {
  Hour = "Hour",
  Week = "Week",
  Month = "Month",
  Year = "Year",
  Paycheck = "Paycheck",
}

export class PutV1CompensationsCompensationIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "adjust_for_minimum_wage" })
  adjustForMinimumWage?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "flsa_status" })
  flsaStatus?: PutV1CompensationsCompensationIdRequestBodyFlsaStatusEnum;

  @SpeakeasyMetadata({
    elemType: PutV1CompensationsCompensationIdRequestBodyMinimumWages,
  })
  @Expose({ name: "minimum_wages" })
  @Type(() => PutV1CompensationsCompensationIdRequestBodyMinimumWages)
  minimumWages?: PutV1CompensationsCompensationIdRequestBodyMinimumWages[];

  @SpeakeasyMetadata()
  @Expose({ name: "payment_unit" })
  paymentUnit?: PutV1CompensationsCompensationIdRequestBodyPaymentUnitEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "rate" })
  rate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1CompensationsCompensationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutV1CompensationsCompensationIdRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=compensation_id",
  })
  compensationId: string;
}

export class PutV1CompensationsCompensationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  compensation?: shared.Compensation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
