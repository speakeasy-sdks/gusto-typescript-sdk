import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EmployeeStateTaxQuestion } from "./employeestatetaxquestion";
import { Expose, Type } from "class-transformer";

export class EmployeeStateTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid: string;

  @SpeakeasyMetadata()
  @Expose({ name: "file_new_hire_report" })
  fileNewHireReport?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "is_work_state" })
  isWorkState?: boolean;

  @SpeakeasyMetadata({ elemType: EmployeeStateTaxQuestion })
  @Expose({ name: "questions" })
  @Type(() => EmployeeStateTaxQuestion)
  questions: EmployeeStateTaxQuestion[];

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: string;
}
