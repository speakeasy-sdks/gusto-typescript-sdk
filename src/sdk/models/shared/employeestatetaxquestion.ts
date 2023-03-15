import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EmployeeStateTaxAnswer } from "./employeestatetaxanswer";
import { EmployeeStateTaxInputQuestionFormat } from "./employeestatetaxinputquestionformat";
import { Expose, Type } from "class-transformer";

export class EmployeeStateTaxQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EmployeeStateTaxAnswer })
  @Expose({ name: "answers" })
  @Type(() => EmployeeStateTaxAnswer)
  answers: EmployeeStateTaxAnswer[];

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "input_question_format" })
  @Type(() => EmployeeStateTaxInputQuestionFormat)
  inputQuestionFormat: EmployeeStateTaxInputQuestionFormat;

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key: string;

  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label: string;
}
