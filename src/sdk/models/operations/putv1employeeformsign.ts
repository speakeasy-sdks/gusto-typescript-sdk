import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1EmployeeFormSignPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_id",
  })
  employeeId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=form_id",
  })
  formId: string;
}

export class PutV1EmployeeFormSignRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "agree" })
  agree: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "signature_text" })
  signatureText: string;

  @SpeakeasyMetadata()
  @Expose({ name: "signed_by_ip_address" })
  signedByIpAddress: string;
}

export class PutV1EmployeeFormSignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1EmployeeFormSignPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1EmployeeFormSignRequestBody;
}

export class PutV1EmployeeFormSignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  form?: shared.Form;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
