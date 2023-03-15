import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1TerminationsEmployeeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_id",
  })
  employeeId: string;
}

export class PutV1TerminationsEmployeeIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "effective_date" })
  effectiveDate: string;

  @SpeakeasyMetadata()
  @Expose({ name: "run_termination_payroll" })
  runTerminationPayroll?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1TerminationsEmployeeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1TerminationsEmployeeIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1TerminationsEmployeeIdRequestBody;
}

export class PutV1TerminationsEmployeeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  termination?: shared.Termination;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
