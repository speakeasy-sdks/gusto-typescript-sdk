import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

// ExternalPayrollTaxSuggestionsTaxSuggestions
/**
 * Possible tax liabilities selections.
 **/
export class ExternalPayrollTaxSuggestionsTaxSuggestions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_id" })
  taxId?: number;
}

// ExternalPayrollTaxSuggestions
/**
 * The representation of an external payroll with minimal information.
 **/
export class ExternalPayrollTaxSuggestions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_suggestions" })
  @Type(() => ExternalPayrollTaxSuggestionsTaxSuggestions)
  taxSuggestions?: ExternalPayrollTaxSuggestionsTaxSuggestions;
}
