import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class FederalTaxDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ein_verified" })
  einVerified?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "filing_form" })
  filingForm?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "has_ein" })
  hasEin?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "legal_name" })
  legalName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_payer_type" })
  taxPayerType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxable_as_scorp" })
  taxableAsScorp?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}