import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Form extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "draft" })
  draft?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "requires_signing" })
  requiresSigning?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}