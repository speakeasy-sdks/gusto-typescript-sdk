import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostV1SandboxGenerate1099RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contractor_id" })
  contractorId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "year" })
  year?: number;
}

export class PostV1SandboxGenerate1099Form extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contractor_uuid" })
  contractorUuid?: string;

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

export class PostV1SandboxGenerate1099Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  form?: PostV1SandboxGenerate1099Form;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
