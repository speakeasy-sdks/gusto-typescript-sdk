import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1CompanyFormPdfPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=form_id" })
  formId: string;
}

export class GetV1CompanyFormPdfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompanyFormPdfPathParams;
}

export class GetV1CompanyFormPdfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  formPdf?: shared.FormPdf;

  @SpeakeasyMetadata()
  statusCode: number;
}