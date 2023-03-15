import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class TaxRequirementMetadataOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label: string;

  @SpeakeasyMetadata()
  @Expose({ name: "short_label" })
  shortLabel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}
export enum TaxRequirementMetadataRateTypeEnum {
  Percent = "percent",
  CurrencyPerHour = "currency_per_hour",
}
export enum TaxRequirementMetadataTypeEnum {
  Text = "text",
  Currency = "currency",
  Radio = "radio",
  Select = "select",
  Percent = "percent",
  AccountNumber = "account_number",
  TaxRate = "tax_rate",
  WorkersCompensationRate = "workers_compensation_rate",
}
export enum TaxRequirementMetadataValidationTypeEnum {
  OneOf = "one_of",
  MinMax = "min_max",
}

// TaxRequirementMetadataValidation
/**
 * [for `tax_rate`] Describes the validation required for the tax rate
 **/
export class TaxRequirementMetadataValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "max" })
  max?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "min" })
  min?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "rates" })
  rates?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: TaxRequirementMetadataValidationTypeEnum;
}

export class TaxRequirementMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "mask" })
  mask?: string;

  @SpeakeasyMetadata({ elemType: TaxRequirementMetadataOptions })
  @Expose({ name: "options" })
  @Type(() => TaxRequirementMetadataOptions)
  options?: TaxRequirementMetadataOptions[];

  @SpeakeasyMetadata()
  @Expose({ name: "prefix" })
  prefix?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "rate_type" })
  rateType?: TaxRequirementMetadataRateTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "risk_class_code" })
  riskClassCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "risk_class_description" })
  riskClassDescription?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: TaxRequirementMetadataTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => TaxRequirementMetadataValidation)
  validation?: TaxRequirementMetadataValidation;
}
