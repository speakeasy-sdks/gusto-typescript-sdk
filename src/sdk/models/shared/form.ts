/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Example response
 */
export class Form extends SpeakeasyBase {
  /**
   * The description of the form
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * If the form is in a draft state. E.g. End of year tax forms may be provided in a draft state prior to being finalized.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "draft" })
  draft?: boolean;

  /**
   * The type identifier of the form
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * A boolean flag that indicates whether the form needs signing or not. Note that this value will change after the form is signed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "requires_signing" })
  requiresSigning?: boolean;

  /**
   * The title of the form
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  /**
   * The UUID of the form
   */
  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}
