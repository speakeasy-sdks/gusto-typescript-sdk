import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=time_off_policy_uuid",
  })
  timeOffPolicyUuid: string;
}

export class PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivatePathParams;
}

export class PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  timeOffPolicy?: shared.TimeOffPolicy;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
