import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1GeneratedDocumentsDocumentTypeRequestUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=document_type" })
  documentType: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=request_uuid" })
  requestUuid: string;
}

export class GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1GeneratedDocumentsDocumentTypeRequestUuidPathParams;
}

export class GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  generatedDocument?: shared.GeneratedDocument;

  @SpeakeasyMetadata()
  statusCode: number;
}