import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

// PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsFixedCompensations
/**
 * An array of fixed compensations for the employee. Fixed compensations include tips, bonuses, and one time reimbursements.
 **/
export class PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsFixedCompensations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "job_uuid" })
  jobUuid?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsHourlyCompensations
/**
 * An array of hourly compensations for the employee. Hourly compensations include regular, overtime, and double overtime hours.
 **/
export class PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsHourlyCompensations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hours" })
  hours?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "job_uuid" })
  jobUuid?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsPaidTimeOff extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "final_payout_unused_hours_input" })
  finalPayoutUnusedHoursInput?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "hours" })
  hours?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "policy_uuid" })
  policyUuid?: string;
}
export enum PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsPaymentMethodEnum {
  DirectDeposit = "Direct Deposit",
  Check = "Check",
}

export class PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "excluded" })
  excluded?: boolean;

  @SpeakeasyMetadata({
    elemType:
      PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsFixedCompensations,
  })
  @Expose({ name: "fixed_compensations" })
  @Type(
    () =>
      PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsFixedCompensations
  )
  fixedCompensations?: PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsFixedCompensations[];

  @SpeakeasyMetadata({
    elemType:
      PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsHourlyCompensations,
  })
  @Expose({ name: "hourly_compensations" })
  @Type(
    () =>
      PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsHourlyCompensations
  )
  hourlyCompensations?: PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsHourlyCompensations[];

  @SpeakeasyMetadata({
    elemType:
      PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsPaidTimeOff,
  })
  @Expose({ name: "paid_time_off" })
  @Type(
    () =>
      PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsPaidTimeOff
  )
  paidTimeOff?: PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsPaidTimeOff[];

  @SpeakeasyMetadata()
  @Expose({ name: "payment_method" })
  paymentMethod?: PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensationsPaymentMethodEnum;
}

export class PutV1CompaniesCompanyIdPayrollsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensations,
  })
  @Expose({ name: "employee_compensations" })
  @Type(() => PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensations)
  employeeCompensations: PutV1CompaniesCompanyIdPayrollsRequestBodyEmployeeCompensations[];

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1CompaniesCompanyIdPayrollsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutV1CompaniesCompanyIdPayrollsRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=payroll_id",
  })
  payrollId: string;
}

export class PutV1CompaniesCompanyIdPayrollsResponse extends SpeakeasyBase {
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
