import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pay_period_end_date" })
  payPeriodEndDate: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pay_period_start_date" })
  payPeriodStartDate: string;
}

// PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsFixedCompensations
/** 
 * An array of fixed compensations for the employee. Fixed compensations include tips, bonuses, and one time reimbursements.
**/
export class PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsFixedCompensations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "job_uuid" })
  jobUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsHourlyCompensations
/** 
 * An array of hourly compensations for the employee. Hourly compensations include regular, overtime, and double overtime hours.
**/
export class PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsHourlyCompensations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hours" })
  hours?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "job_uuid" })
  jobUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsPaidTimeOff extends SpeakeasyBase {
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
export enum PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsPaymentMethodEnum {
    DirectDeposit = "Direct Deposit",
    Check = "Check"
}

export class PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "excluded" })
  excluded?: boolean;

  @SpeakeasyMetadata({ elemType: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsFixedCompensations })
  @Expose({ name: "fixed_compensations" })
  @Type(() => PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsFixedCompensations)
  fixedCompensations?: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsFixedCompensations[];

  @SpeakeasyMetadata({ elemType: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsHourlyCompensations })
  @Expose({ name: "hourly_compensations" })
  @Type(() => PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsHourlyCompensations)
  hourlyCompensations?: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsHourlyCompensations[];

  @SpeakeasyMetadata({ elemType: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsPaidTimeOff })
  @Expose({ name: "paid_time_off" })
  @Type(() => PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsPaidTimeOff)
  paidTimeOff?: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsPaidTimeOff[];

  @SpeakeasyMetadata()
  @Expose({ name: "payment_method" })
  paymentMethod?: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensationsPaymentMethodEnum;
}

export class PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensations })
  @Expose({ name: "employee_compensations" })
  @Type(() => PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensations)
  employeeCompensations: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBodyEmployeeCompensations[];

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateRequestBody;
}

export class PutV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDateResponse extends SpeakeasyBase {
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