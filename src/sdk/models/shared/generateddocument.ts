import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class GeneratedDocument extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "document_urls" })
  documentUrls?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "request_uuid" })
  requestUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}
