import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CompanyAddress } from "./companyaddress";
import { Expose, Type } from "class-transformer";

export enum CompanyCompanyStatusEnum {
  Approved = "Approved",
  NotApproved = "Not Approved",
  Suspended = "Suspended",
}

export class CompanyCompensationsFixed extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CompanyCompensationsHourly extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "multiple" })
  multiple?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CompanyCompensationsPaidTimeOff extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CompanyCompensations
/**
 * The available company-wide compensation rates for the company.
 **/
export class CompanyCompensations extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CompanyCompensationsFixed })
  @Expose({ name: "fixed" })
  @Type(() => CompanyCompensationsFixed)
  fixed?: CompanyCompensationsFixed[];

  @SpeakeasyMetadata({ elemType: CompanyCompensationsHourly })
  @Expose({ name: "hourly" })
  @Type(() => CompanyCompensationsHourly)
  hourly?: CompanyCompensationsHourly[];

  @SpeakeasyMetadata({ elemType: CompanyCompensationsPaidTimeOff })
  @Expose({ name: "paid_time_off" })
  @Type(() => CompanyCompensationsPaidTimeOff)
  paidTimeOff?: CompanyCompensationsPaidTimeOff[];
}
export enum CompanyEntityTypeEnum {
  CCorporation = "C-Corporation",
  SCorporation = "S-Corporation",
  SoleProprietor = "Sole proprietor",
  Llc = "LLC",
  Llp = "LLP",
  LimitedPartnership = "Limited partnership",
  CoOwnership = "Co-ownership",
  Association = "Association",
  Trusteeship = "Trusteeship",
  GeneralPartnership = "General partnership",
  JointVenture = "Joint venture",
  NonProfit = "Non-Profit",
}

// CompanyPrimaryPayrollAdmin
/**
 * The primary payroll admin of the company.
 **/
export class CompanyPrimaryPayrollAdmin extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;
}

export class CompanyPrimarySignatoryHomeAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_1" })
  street1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_2" })
  street2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "zip" })
  zip?: string;
}

// CompanyPrimarySignatory
/**
 * The primary signatory of the company.
 **/
export class CompanyPrimarySignatory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "home_address" })
  @Type(() => CompanyPrimarySignatoryHomeAddress)
  homeAddress?: CompanyPrimarySignatoryHomeAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "middle_initial" })
  middleInitial?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;
}
export enum CompanyTierEnum {
  Simple = "simple",
  Plus = "plus",
  Premium = "premium",
  Core = "core",
  Complete = "complete",
  Concierge = "concierge",
  ContractorOnly = "contractor_only",
  Basic = "basic",
}

// Company
/**
 * The representation of a company in Gusto.
 **/
export class Company extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company_status" })
  companyStatus?: CompanyCompanyStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "compensations" })
  @Type(() => CompanyCompensations)
  compensations?: CompanyCompensations;

  @SpeakeasyMetadata()
  @Expose({ name: "ein" })
  ein?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "entity_type" })
  entityType?: CompanyEntityTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "is_partner_managed" })
  isPartnerManaged?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "is_suspended" })
  isSuspended?: boolean;

  @SpeakeasyMetadata({ elemType: CompanyAddress })
  @Expose({ name: "locations" })
  @Type(() => CompanyAddress)
  locations?: CompanyAddress[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "primary_payroll_admin" })
  @Type(() => CompanyPrimaryPayrollAdmin)
  primaryPayrollAdmin?: CompanyPrimaryPayrollAdmin;

  @SpeakeasyMetadata()
  @Expose({ name: "primary_signatory" })
  @Type(() => CompanyPrimarySignatory)
  primarySignatory?: CompanyPrimarySignatory;

  @SpeakeasyMetadata()
  @Expose({ name: "tier" })
  tier?: CompanyTierEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "trade_name" })
  tradeName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}
