/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Supported benefit response
 */
export class SupportedBenefit extends SpeakeasyBase {
    /**
     * The benefit type in Gusto.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "benefit_type" })
    benefitType?: number;

    /**
     * Category where the benefit belongs to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    category?: string;

    /**
     * The description of the benefit.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Whether the benefit is healthcare related.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "healthcare" })
    healthcare?: boolean;

    /**
     * Whether the benefit is considered imputed income.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "imputed" })
    imputed?: boolean;

    /**
     * The name of the benefit.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Whether the benefit is deducted after tax calculations.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "posttax" })
    posttax?: boolean;

    /**
     * Whether the benefit is deducted before tax calculations, thus reducing one’s taxable income
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pretax" })
    pretax?: boolean;

    /**
     * Whether the benefit is associated with retirement planning.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "retirement" })
    retirement?: boolean;

    /**
     * Whether the benefit has a government mandated yearly limit.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "yearly_limit" })
    yearlyLimit?: boolean;
}
