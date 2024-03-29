/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { Expose, Transform } from "class-transformer";

/**
 * Representation of a Minimum Wage
 */
export class MinimumWage extends SpeakeasyBase {
    /**
     * The governing authority that created the minimum wage, e.g. "City", "State", or "Federal".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authority" })
    authority: string;

    /**
     * The date the minimum wage rule is effective on.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "effective_date" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    effectiveDate: RFCDate;

    /**
     * Description of parties the minimum wage applies to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notes" })
    notes?: string;

    /**
     * unique identifier of a minimum wage
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid: string;

    /**
     * The wage rate for a minimum wage record. Represented as a float, e.g. "15.0".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "wage" })
    wage: string;

    /**
     * The type of wage the minimum wage applies to, e.g. "Regular", "Regular-Industry-Specific".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "wage_type" })
    wageType: string;
}
