/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The representation of a company's address in Gusto.
 */
export class CompanyAddress extends SpeakeasyBase {
    /**
     * The status of the location. Inactive locations have been deleted, but may still have historical data associated with them.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "active" })
    active?: boolean;

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
