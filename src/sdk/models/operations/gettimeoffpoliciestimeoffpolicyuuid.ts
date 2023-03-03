import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetTimeOffPoliciesTimeOffPolicyUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=time_off_policy_uuid" })
  timeOffPolicyUuid: string;
}

export class GetTimeOffPoliciesTimeOffPolicyUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimeOffPoliciesTimeOffPolicyUuidPathParams;
}

export class GetTimeOffPoliciesTimeOffPolicyUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  timeOffPolicy?: shared.TimeOffPolicy;
}