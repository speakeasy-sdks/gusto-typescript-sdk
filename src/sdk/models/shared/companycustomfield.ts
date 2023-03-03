import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomFieldTypeEnum } from "./customfieldtypeenum";
import { Expose } from "class-transformer";


// CompanyCustomField
/** 
 * A custom field on a company
**/
export class CompanyCustomField extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "selection_options" })
  selectionOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CustomFieldTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid: string;
}