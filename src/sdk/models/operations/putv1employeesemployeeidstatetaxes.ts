import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PutV1EmployeesEmployeeIdStateTaxesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_uuid" })
  employeeUuid: string;
}

export class PutV1EmployeesEmployeeIdStateTaxesRequestBodyStatesQuestionsAnswers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "valid_from" })
  validFrom: string;

  @SpeakeasyMetadata()
  @Expose({ name: "valid_up_to" })
  validUpTo?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}

export class PutV1EmployeesEmployeeIdStateTaxesRequestBodyStatesQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PutV1EmployeesEmployeeIdStateTaxesRequestBodyStatesQuestionsAnswers })
  @Expose({ name: "answers" })
  @Type(() => PutV1EmployeesEmployeeIdStateTaxesRequestBodyStatesQuestionsAnswers)
  answers?: PutV1EmployeesEmployeeIdStateTaxesRequestBodyStatesQuestionsAnswers[];

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key: string;
}

export class PutV1EmployeesEmployeeIdStateTaxesRequestBodyStates extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PutV1EmployeesEmployeeIdStateTaxesRequestBodyStatesQuestions })
  @Expose({ name: "questions" })
  @Type(() => PutV1EmployeesEmployeeIdStateTaxesRequestBodyStatesQuestions)
  questions?: PutV1EmployeesEmployeeIdStateTaxesRequestBodyStatesQuestions[];

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: string;
}

export class PutV1EmployeesEmployeeIdStateTaxesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "employee_id" })
  employeeId: string;

  @SpeakeasyMetadata({ elemType: PutV1EmployeesEmployeeIdStateTaxesRequestBodyStates })
  @Expose({ name: "states" })
  @Type(() => PutV1EmployeesEmployeeIdStateTaxesRequestBodyStates)
  states: PutV1EmployeesEmployeeIdStateTaxesRequestBodyStates[];
}

export class PutV1EmployeesEmployeeIdStateTaxesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1EmployeesEmployeeIdStateTaxesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1EmployeesEmployeeIdStateTaxesRequestBody;
}

export class PutV1EmployeesEmployeeIdStateTaxes422ApplicationJSONQuestionsAnswers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  errors?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "valid_from" })
  validFrom: string;

  @SpeakeasyMetadata()
  @Expose({ name: "valid_up_to" })
  validUpTo?: any;
}

export class PutV1EmployeesEmployeeIdStateTaxes422ApplicationJSONQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PutV1EmployeesEmployeeIdStateTaxes422ApplicationJSONQuestionsAnswers })
  @Expose({ name: "answers" })
  @Type(() => PutV1EmployeesEmployeeIdStateTaxes422ApplicationJSONQuestionsAnswers)
  answers?: PutV1EmployeesEmployeeIdStateTaxes422ApplicationJSONQuestionsAnswers[];

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key: string;
}

export class PutV1EmployeesEmployeeIdStateTaxes422ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PutV1EmployeesEmployeeIdStateTaxes422ApplicationJSONQuestions })
  @Expose({ name: "questions" })
  @Type(() => PutV1EmployeesEmployeeIdStateTaxes422ApplicationJSONQuestions)
  questions: PutV1EmployeesEmployeeIdStateTaxes422ApplicationJSONQuestions[];

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: string;
}

export class PutV1EmployeesEmployeeIdStateTaxesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.EmployeeStateTax })
  employeeStateTaxes?: shared.EmployeeStateTax[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata({ elemType: PutV1EmployeesEmployeeIdStateTaxes422ApplicationJSON })
  putV1EmployeesEmployeeIdStateTaxes422ApplicationJSONObjects?: PutV1EmployeesEmployeeIdStateTaxes422ApplicationJSON[];
}