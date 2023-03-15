import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomFieldTypeEnum } from "./customfieldtypeenum";
import { Expose } from "class-transformer";

// EmployeeCustomField
/**
 * A custom field of an employee
 **/
export class EmployeeCustomField extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company_custom_field_id" })
  companyCustomFieldId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

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
  @Expose({ name: "value" })
  value: string;
}
