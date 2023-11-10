/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class TaxRequirementMetadataOptions extends SpeakeasyBase {
    /**
     * A customer facing label for the answer
     */
    @SpeakeasyMetadata()
    @Expose({ name: "label" })
    label: string;

    /**
     * A less verbose label that may sometimes be available
     */
    @SpeakeasyMetadata()
    @Expose({ name: "short_label" })
    shortLabel?: string;

    /**
     * The actual value to be submitted
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}

/**
 * [for `workers_compensation_rate`] The type of rate being collected. Either:
 *
 * @remarks
 *  - `percent`: A percentage formatted as a decimal, e.g. `0.01` for 1%
 *  - `currency_per_hour`: A dollar amount per hour, e.g. `3.24` for $3.24/hr
 *
 */
export enum RateType {
    Percent = "percent",
    CurrencyPerHour = "currency_per_hour",
}

/**
 * Describes the type of requirement - each type may have additional metadata properties to describe possible values, formats, etc.
 *
 * @remarks
 *
 * - `text`: free-text input, no additional requirements
 * - `currency`: a value representing a dollar amount, e.g. `374.55` representing `$374.55`
 * - `radio`: choose one of options provided, see `options`
 * - `select`: choose one of options provided, see `options`
 * - `percent`: A decimal value representing a percentage, e.g. `0.034` representing `3.4%`
 * - `account_number`: An account number for a tax agency, more information provided by `mask` and `prefix`
 * - `tax_rate`: A decimal value representing a tax rate, e.g. `0.034` representing a tax rate of `3.4%`, see `validation` for additional validation guidance
 * - `workers_compensation_rate`: A decimal value representing a percentage, see `risk_class_code`, `risk_class_description`, and `rate_type`
 *
 */
export enum TaxRequirementMetadataType {
    Text = "text",
    Currency = "currency",
    Radio = "radio",
    Select = "select",
    Percent = "percent",
    AccountNumber = "account_number",
    TaxRate = "tax_rate",
    WorkersCompensationRate = "workers_compensation_rate",
}

/**
 * Describes the type of tax_rate validation rule
 */
export enum TaxRequirementMetadataSchemasType {
    OneOf = "one_of",
    MinMax = "min_max",
}

/**
 * [for `tax_rate`] Describes the validation required for the tax rate
 */
export class Validation extends SpeakeasyBase {
    /**
     * [for `min_max`] The inclusive upper bound of the tax rate
     */
    @SpeakeasyMetadata()
    @Expose({ name: "max" })
    max?: string;

    /**
     * [for `min_max`] The inclusive lower bound of the tax rate
     */
    @SpeakeasyMetadata()
    @Expose({ name: "min" })
    min?: string;

    /**
     * [for `one_of`] The possible, unformatted tax rates for selection.
     *
     * @remarks
     * - e.g. ["0.0", "0.001"] representing 0% and 0.1%
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "rates" })
    rates?: string[];

    /**
     * Describes the type of tax_rate validation rule
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: TaxRequirementMetadataSchemasType;
}

export class TaxRequirementMetadata extends SpeakeasyBase {
    /**
     * [for `account_number`] A pattern describing the format of the account number
     *
     * @remarks
     *
     * The mask is a sequence of characters representing the requirements of the actual account number. Each character in the mask represents a single character in the account number as follows:
     * - `#`: a digit (`\d`)
     * - `@`: a upper or lower case letter (`[a-zA-Z]`)
     * - `^`: an uppercase letter (`[A-Z]`)
     * - `%`: a digit or uppercase letter (`[0-9A-Z]`)
     * - any other character represents the literal character
     *
     * Examples:
     * - mask: `WHT-######` represents `WHT-` followed by 5 digits, e.g. `WHT-33421`
     * - mask: `%####-^^` supports values of `75544-AB` and `Z7654-HK`
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mask" })
    mask?: string;

    /**
     * [for `select` or `radio`] An array of objects describing the possible values.
     */
    @SpeakeasyMetadata({ elemType: TaxRequirementMetadataOptions })
    @Expose({ name: "options" })
    @Type(() => TaxRequirementMetadataOptions)
    options?: TaxRequirementMetadataOptions[];

    /**
     * [for `account_number`] A value that precedes the value to be collected - useful for display, but should not be submitted as part of the value. E.g. some tax agencies use an account number that is a company's federal ein plus two digits. In that case the mask would be `##` and the prefix `XXXXX1234`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "prefix" })
    prefix?: string;

    /**
     * [for `workers_compensation_rate`] The type of rate being collected. Either:
     *
     * @remarks
     *  - `percent`: A percentage formatted as a decimal, e.g. `0.01` for 1%
     *  - `currency_per_hour`: A dollar amount per hour, e.g. `3.24` for $3.24/hr
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "rate_type" })
    rateType?: RateType;

    /**
     * [for `workers_compensation_rate`] The industry risk class code for the rate being requested
     */
    @SpeakeasyMetadata()
    @Expose({ name: "risk_class_code" })
    riskClassCode?: string;

    /**
     * [for `workers_compensation_rate`] A description of the industry risk class for the rate being requested
     */
    @SpeakeasyMetadata()
    @Expose({ name: "risk_class_description" })
    riskClassDescription?: string;

    /**
     * Describes the type of requirement - each type may have additional metadata properties to describe possible values, formats, etc.
     *
     * @remarks
     *
     * - `text`: free-text input, no additional requirements
     * - `currency`: a value representing a dollar amount, e.g. `374.55` representing `$374.55`
     * - `radio`: choose one of options provided, see `options`
     * - `select`: choose one of options provided, see `options`
     * - `percent`: A decimal value representing a percentage, e.g. `0.034` representing `3.4%`
     * - `account_number`: An account number for a tax agency, more information provided by `mask` and `prefix`
     * - `tax_rate`: A decimal value representing a tax rate, e.g. `0.034` representing a tax rate of `3.4%`, see `validation` for additional validation guidance
     * - `workers_compensation_rate`: A decimal value representing a percentage, see `risk_class_code`, `risk_class_description`, and `rate_type`
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: TaxRequirementMetadataType;

    /**
     * [for `tax_rate`] Describes the validation required for the tax rate
     */
    @SpeakeasyMetadata()
    @Expose({ name: "validation" })
    @Type(() => Validation)
    validation?: Validation;
}
