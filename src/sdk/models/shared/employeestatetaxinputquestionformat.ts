import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class EmployeeStateTaxInputQuestionFormatOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class EmployeeStateTaxInputQuestionFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EmployeeStateTaxInputQuestionFormatOptions })
  @Expose({ name: "options" })
  @Type(() => EmployeeStateTaxInputQuestionFormatOptions)
  options?: EmployeeStateTaxInputQuestionFormatOptions[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}