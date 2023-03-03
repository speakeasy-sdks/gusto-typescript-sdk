import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


// TaxLiabilitiesSelectionsPossibleLiabilities
/** 
 * Possible tax liabilities selections.
**/
export class TaxLiabilitiesSelectionsPossibleLiabilities extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "external_payroll_uuid" })
  externalPayrollUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "liability_amount" })
  liabilityAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payroll_check_date" })
  payrollCheckDate?: string;
}

// TaxLiabilitiesSelections
/** 
 * The representation of tax liabilities selections.
**/
export class TaxLiabilitiesSelections extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "last_unpaid_external_payroll_uuid" })
  lastUnpaidExternalPayrollUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "possible_liabilities" })
  @Type(() => TaxLiabilitiesSelectionsPossibleLiabilities)
  possibleLiabilities?: TaxLiabilitiesSelectionsPossibleLiabilities;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_id" })
  taxId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_name" })
  taxName?: string;
}