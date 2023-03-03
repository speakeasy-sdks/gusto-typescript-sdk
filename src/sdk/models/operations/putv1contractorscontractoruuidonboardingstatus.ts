import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PutV1ContractorsContractorUuidOnboardingStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contractor_uuid" })
  contractorUuid: string;
}
export enum PutV1ContractorsContractorUuidOnboardingStatusRequestBodyOnboardingStatusEnum {
    OnboardingCompleted = "onboarding_completed"
}

export class PutV1ContractorsContractorUuidOnboardingStatusRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "onboarding_status" })
  onboardingStatus: PutV1ContractorsContractorUuidOnboardingStatusRequestBodyOnboardingStatusEnum;
}

export class PutV1ContractorsContractorUuidOnboardingStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1ContractorsContractorUuidOnboardingStatusPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1ContractorsContractorUuidOnboardingStatusRequestBody;
}

export class PutV1ContractorsContractorUuidOnboardingStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  contractorOnboardingStatus?: shared.ContractorOnboardingStatus;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}