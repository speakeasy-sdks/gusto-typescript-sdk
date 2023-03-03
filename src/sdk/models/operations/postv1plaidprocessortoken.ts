import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";

export enum PostV1PlaidProcessorTokenRequestBodyOwnerTypeEnum {
    Company = "Company"
}

export class PostV1PlaidProcessorTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "owner_id" })
  ownerId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "owner_type" })
  ownerType: PostV1PlaidProcessorTokenRequestBodyOwnerTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "processor_token" })
  processorToken: string;
}

export class PostV1PlaidProcessorTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1PlaidProcessorTokenRequestBody;
}

export class PostV1PlaidProcessorTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

  @SpeakeasyMetadata()
  postV1PlaidProcessorToken201ApplicationJSONOneOf?: any;
}