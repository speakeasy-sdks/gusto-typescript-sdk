import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBodyEmployees extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}

export class PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBodyEmployees,
  })
  @Expose({ name: "employees" })
  @Type(
    () =>
      PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBodyEmployees
  )
  employees?: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBodyEmployees[];
}

export class PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=time_off_policy_uuid",
  })
  timeOffPolicyUuid: string;
}

export class PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse extends SpeakeasyBase {
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
