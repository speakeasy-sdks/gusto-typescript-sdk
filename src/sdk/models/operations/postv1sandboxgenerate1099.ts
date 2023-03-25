/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostV1SandboxGenerate1099RequestBody extends SpeakeasyBase {
  /**
   * The contractor UUID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contractor_id" })
  contractorId: string;

  /**
   * Must be equal to or more recent than 2015. If not specified, defaults to the previous year.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "year" })
  year?: number;
}

/**
 * OK
 */
export class PostV1SandboxGenerate1099Form extends SpeakeasyBase {
  /**
   * The UUID of the contractor
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contractor_uuid" })
  contractorUuid?: string;

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

export class PostV1SandboxGenerate1099Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  form?: PostV1SandboxGenerate1099Form;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Unprocessable Entity
   *
   * @remarks
   *
   * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
   *
   */
  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
