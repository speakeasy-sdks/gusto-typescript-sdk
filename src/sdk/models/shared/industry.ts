import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Industry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "naics_code" })
  naicsCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sic_codes" })
  sicCodes?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;
}