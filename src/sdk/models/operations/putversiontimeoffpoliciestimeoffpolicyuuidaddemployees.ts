import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBodyEmployees extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}

export class PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBodyEmployees,
  })
  @Expose({ name: "employees" })
  @Type(
    () =>
      PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBodyEmployees
  )
  employees?: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBodyEmployees[];
}

export class PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=time_off_policy_uuid",
  })
  timeOffPolicyUuid: string;
}

export class PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse extends SpeakeasyBase {
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
