import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum PostV1PlaidProcessorTokenRequestBodyOwnerTypeEnum {
  Company = "Company",
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

export class PostV1PlaidProcessorTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

  @SpeakeasyMetadata()
  postV1PlaidProcessorToken201ApplicationJSONOneOf?: any;
}
