import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PutVersionTimeOffPoliciesTimeOffPolicyUuidBalancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=time_off_policy_uuid" })
  timeOffPolicyUuid: string;
}

export class PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBodyEmployees extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}

export class PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBodyEmployees })
  @Expose({ name: "employees" })
  @Type(() => PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBodyEmployees)
  employees?: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBodyEmployees[];
}

export class PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalancePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody;
}

export class PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  timeOffPolicy?: shared.TimeOffPolicy;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}