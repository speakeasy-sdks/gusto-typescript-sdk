import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class FormPdf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "document_urls" })
  documentUrls?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}