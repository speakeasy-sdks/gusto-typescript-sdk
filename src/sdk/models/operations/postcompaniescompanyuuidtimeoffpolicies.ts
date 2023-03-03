import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PostCompaniesCompanyUuidTimeOffPoliciesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;
}
export enum PostCompaniesCompanyUuidTimeOffPoliciesRequestBodyAccrualMethodEnum {
    Unlimited = "unlimited",
    PerPayPeriod = "per_pay_period",
    PerCalendarYear = "per_calendar_year",
    PerAnniversaryYear = "per_anniversary_year",
    PerHourWorked = "per_hour_worked",
    PerHourWorkedNoOvertime = "per_hour_worked_no_overtime",
    PerHourPaid = "per_hour_paid",
    PerHourPaidNoOvertime = "per_hour_paid_no_overtime"
}

export class PostCompaniesCompanyUuidTimeOffPoliciesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accrual_method" })
  accrualMethod: PostCompaniesCompanyUuidTimeOffPoliciesRequestBodyAccrualMethodEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "accrual_rate" })
  accrualRate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accrual_rate_unit" })
  accrualRateUnit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accrual_waiting_period_days" })
  accrualWaitingPeriodDays?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "carryover_limit_hours" })
  carryoverLimitHours?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "max_accrual_hours_per_year" })
  maxAccrualHoursPerYear?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "max_hours" })
  maxHours?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "paid_out_on_termination" })
  paidOutOnTermination?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "policy_type" })
  policyType: string;
}

export class PostCompaniesCompanyUuidTimeOffPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCompaniesCompanyUuidTimeOffPoliciesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostCompaniesCompanyUuidTimeOffPoliciesRequestBody;
}

export class PostCompaniesCompanyUuidTimeOffPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  timeOffPolicy?: shared.TimeOffPolicy;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}