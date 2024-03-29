/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Possible tax liabilities selections.
 */
export class ExternalPayrollTaxSuggestionsTaxSuggestions extends SpeakeasyBase {
    /**
     * Calculated tax amount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: string;

    /**
     * The ID of the tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_id" })
    taxId?: number;
}

/**
 * The representation of an external payroll with minimal information.
 */
export class ExternalPayrollTaxSuggestions extends SpeakeasyBase {
    /**
     * The UUID of the employee.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employee_uuid" })
    employeeUuid?: string;

    /**
     * Possible tax liabilities selections.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_suggestions" })
    @Type(() => ExternalPayrollTaxSuggestionsTaxSuggestions)
    taxSuggestions?: ExternalPayrollTaxSuggestionsTaxSuggestions;
}
