import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum PostV1CompaniesCompanyIdPayrollsRequestBodyOffCycleReasonEnum {
  Bonus = "Bonus",
  Correction = "Correction",
  DismissedEmployee = "Dismissed employee",
}
export enum PostV1CompaniesCompanyIdPayrollsRequestBodyWithholdingPayPeriodEnum {
  EveryWeek = "Every week",
  EveryOtherWeek = "Every other week",
  TwicePerMonth = "Twice per month",
  Monthly = "Monthly",
  Quarterly = "Quarterly",
  Semiannually = "Semiannually",
  Annually = "Annually",
}

export class PostV1CompaniesCompanyIdPayrollsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "check_date" })
  checkDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuids" })
  employeeUuids?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  endDate: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fixed_withholding_rate" })
  fixedWithholdingRate?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "off_cycle" })
  offCycle: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "off_cycle_reason" })
  offCycleReason: PostV1CompaniesCompanyIdPayrollsRequestBodyOffCycleReasonEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "skip_regular_deductions" })
  skipRegularDeductions?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  startDate: string;

  @SpeakeasyMetadata()
  @Expose({ name: "withholding_pay_period" })
  withholdingPayPeriod?: PostV1CompaniesCompanyIdPayrollsRequestBodyWithholdingPayPeriodEnum;
}

export class PostV1CompaniesCompanyIdPayrollsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PostV1CompaniesCompanyIdPayrollsRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

export class PostV1CompaniesCompanyIdPayrollsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payroll?: shared.Payroll;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
