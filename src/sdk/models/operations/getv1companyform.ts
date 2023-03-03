import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1CompanyFormPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=form_id" })
  formId: string;
}

export class GetV1CompanyFormRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompanyFormPathParams;
}

export class GetV1CompanyFormResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  form?: shared.Form;

  @SpeakeasyMetadata()
  statusCode: number;
}