import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PutV1CompanyFormSignPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=form_id" })
  formId: string;
}

export class PutV1CompanyFormSignRequestBody extends SpeakeasyBase {
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

export class PutV1CompanyFormSignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1CompanyFormSignPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1CompanyFormSignRequestBody;
}

export class PutV1CompanyFormSignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  form?: shared.Form;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}