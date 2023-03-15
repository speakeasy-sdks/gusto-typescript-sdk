import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1ExternalPayrollPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_uuid",
  })
  companyUuid: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=external_payroll_id",
  })
  externalPayrollId: string;
}

// PutV1ExternalPayrollRequestBodyExternalPayrollItemsBenefits
/**
 * An array of benefits for the employee. Depends on your company selections, benefits include 401k, health insurance and more.
 **/
export class PutV1ExternalPayrollRequestBodyExternalPayrollItemsBenefits extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "benefit_id" })
  benefitId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "company_contribution_amount" })
  companyContributionAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_deduction_amount" })
  employeeDeductionAmount?: string;
}
export enum PutV1ExternalPayrollRequestBodyExternalPayrollItemsEarningsEarningTypeEnum {
  CompanyPayType = "CompanyPayType",
  CompanyEarningType = "CompanyEarningType",
}

// PutV1ExternalPayrollRequestBodyExternalPayrollItemsEarnings
/**
 * An array of earnings for the employee. Depends on your company selections, earnings includes wages, hours, bonuses, tips, commission and more.
 **/
export class PutV1ExternalPayrollRequestBodyExternalPayrollItemsEarnings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "earning_id" })
  earningId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "earning_type" })
  earningType?: PutV1ExternalPayrollRequestBodyExternalPayrollItemsEarningsEarningTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "hours" })
  hours?: string;
}

export class PutV1ExternalPayrollRequestBodyExternalPayrollItemsTaxes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_id" })
  taxId?: number;
}

// PutV1ExternalPayrollRequestBodyExternalPayrollItems
/**
 * Submit wages, benefits, taxes for each employee
 **/
export class PutV1ExternalPayrollRequestBodyExternalPayrollItems extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: PutV1ExternalPayrollRequestBodyExternalPayrollItemsBenefits,
  })
  @Expose({ name: "benefits" })
  @Type(() => PutV1ExternalPayrollRequestBodyExternalPayrollItemsBenefits)
  benefits?: PutV1ExternalPayrollRequestBodyExternalPayrollItemsBenefits[];

  @SpeakeasyMetadata({
    elemType: PutV1ExternalPayrollRequestBodyExternalPayrollItemsEarnings,
  })
  @Expose({ name: "earnings" })
  @Type(() => PutV1ExternalPayrollRequestBodyExternalPayrollItemsEarnings)
  earnings?: PutV1ExternalPayrollRequestBodyExternalPayrollItemsEarnings[];

  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: string;

  @SpeakeasyMetadata({
    elemType: PutV1ExternalPayrollRequestBodyExternalPayrollItemsTaxes,
  })
  @Expose({ name: "taxes" })
  @Type(() => PutV1ExternalPayrollRequestBodyExternalPayrollItemsTaxes)
  taxes?: PutV1ExternalPayrollRequestBodyExternalPayrollItemsTaxes[];
}

export class PutV1ExternalPayrollRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: PutV1ExternalPayrollRequestBodyExternalPayrollItems,
  })
  @Expose({ name: "external_payroll_items" })
  @Type(() => PutV1ExternalPayrollRequestBodyExternalPayrollItems)
  externalPayrollItems?: PutV1ExternalPayrollRequestBodyExternalPayrollItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "replace_fields" })
  replaceFields?: boolean;
}

export class PutV1ExternalPayrollRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1ExternalPayrollPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1ExternalPayrollRequestBody;
}

export class PutV1ExternalPayrollResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  externalPayroll?: shared.ExternalPayroll;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
