/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PayrollBlocker extends SpeakeasyBase {
    /**
     * The unique identifier of the reason
     */
    @SpeakeasyMetadata()
    @Expose({ name: "key" })
    key?: string;

    /**
     * User-friendly message describing the payroll blocker.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}
